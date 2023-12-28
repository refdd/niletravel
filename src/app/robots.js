export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: "www.viagemparaegito.com/sitemap.xml",
  };
}
