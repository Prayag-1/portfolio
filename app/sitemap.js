const baseUrl = "https://prayagnepal.vercel.app";

export default function sitemap() {
  return [
    ["/", "weekly", 1.0], ["/about", "monthly", 0.8], ["/projects", "monthly", 0.8],
    ["/clients", "monthly", 0.8], ["/life", "monthly", 0.8], ["/contact", "monthly", 0.8],
  ].map(([path, changeFrequency, priority]) => ({ url: `${baseUrl}${path}`, changeFrequency, priority }));
}
