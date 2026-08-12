/**
 * Renders schema.org JSON-LD structured data.
 * Data is serialized once at build time (this site is fully static).
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(Array.isArray(data) ? data : data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
