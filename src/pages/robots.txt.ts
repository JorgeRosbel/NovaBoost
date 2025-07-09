export function GET() {
  const body = `
User-agent: *
Disallow:

Sitemap: ${import.meta.env.SITE}/sitemap-index.xml
`.trim();

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
