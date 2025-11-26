export default function sitemap() {
  const base = "https://www.yourdomain.com";

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/uae`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    }
  ];
}
