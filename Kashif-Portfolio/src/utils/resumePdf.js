const resume = {
  name: 'Kashif Akram',
  role: 'Software Engineer',
  summary:
    'Building modern web applications with JavaScript, APIs, cloud deployment, and networking fundamentals.',
  skills: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'REST API',
    'Authentication',
    'Authorization',
    'Google OAuth',
    'MongoDB',
    'PostgreSQL',
    'Docker (Basics)',
    'Git',
    'GitHub',
    'Render',
    'Vercel',
    'Computer Networking',
    'Data Structures & Algorithms (Basics)',
    'Object-Oriented Programming',
  ],
  projects: ['DevOps Lab Platform', 'Google OAuth Authentication API', 'Portfolio v2'],
  education: 'Intermediate (Class 11) - Current Student',
  github: 'https://github.com/KashifAkram0345',
  linkedin: 'https://www.linkedin.com/in/kashif-akram-834569301',
  email: 'm.kashif6833@gmail.com',
};

function escapePdfText(text) {
  return text.replaceAll('\\', '\\\\').replaceAll('(', '\\(').replaceAll(')', '\\)');
}

function drawText(lines) {
  return lines
    .map(({ text, x, y, size = 10, font = 'F1', color = '0 0 0' }) => {
      return `BT /${font} ${size} Tf ${color} rg ${x} ${y} Td (${escapePdfText(text)}) Tj ET`;
    })
    .join('\n');
}

function buildPdf() {
  const lines = [
    { text: resume.name, x: 54, y: 770, size: 28, font: 'F2', color: '0.07 0.35 0.19' },
    { text: resume.role, x: 54, y: 744, size: 15, font: 'F2', color: '0.38 0.14 0.65' },
    { text: resume.email, x: 54, y: 720 },
    { text: resume.github, x: 54, y: 704 },
    { text: resume.linkedin, x: 54, y: 688 },
    { text: 'Summary', x: 54, y: 650, size: 15, font: 'F2', color: '0.07 0.35 0.19' },
    { text: resume.summary, x: 54, y: 630 },
    { text: 'Skills', x: 54, y: 592, size: 15, font: 'F2', color: '0.07 0.35 0.19' },
  ];

  let y = 572;
  resume.skills.forEach((skill) => {
    lines.push({ text: `- ${skill}`, x: 66, y });
    y -= 14;
  });

  y -= 14;
  lines.push({ text: 'Projects', x: 54, y, size: 15, font: 'F2', color: '0.07 0.35 0.19' });
  y -= 20;
  resume.projects.forEach((project) => {
    lines.push({ text: `- ${project}`, x: 66, y });
    y -= 14;
  });

  y -= 14;
  lines.push({ text: 'Education', x: 54, y, size: 15, font: 'F2', color: '0.07 0.35 0.19' });
  y -= 20;
  lines.push({ text: resume.education, x: 66, y });

  const content = [
    '0.03 0.03 0.06 rg 0 0 612 792 re f',
    '0.08 0.09 0.13 rg 34 34 544 724 re f',
    '0.22 1 0.53 RG 1.2 w 34 34 544 724 re S',
    drawText(lines),
  ].join('\n');

  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
    `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return pdf;
}

export function downloadResumePdf() {
  const blob = new Blob([buildPdf()], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Kashif-Akram-Resume.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
