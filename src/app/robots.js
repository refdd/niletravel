export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: "www.nilecruisez.com/sitemap.xml",
  };
}
