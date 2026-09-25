import fs from 'fs';
import path from 'path';
import ClientApp from './ClientApp';

export default function Page() {
  const designMdPath = path.join(process.cwd(), 'design.md');
  let markdownContent = '';
  
  try {
    markdownContent = fs.readFileSync(designMdPath, 'utf-8');
  } catch {
    markdownContent = '# Balance Wellness Coach — Brand Identity\n\nDesign specification loading...';
  }

  return <ClientApp markdownContent={markdownContent} />;
}
