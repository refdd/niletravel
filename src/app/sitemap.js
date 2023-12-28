import { getData } from "../../utils/featchApi";
const baseUrl = "www.nilecruisez.com";
async function sitemap() {
  const pages = await getData("/pages");
  const types = await getData("/types");
  const tours = await getData(`/tours`);
  const posts = await getData(`/posts`);
  // const articles = await getData(
  //   `/articles?tenant_id=18&language_id=11&status=active&paginate=1000`
  // );
  // const wikis = await getData(
  //   `/wikis?tenant_id=18&language_id=11&status=active&paginate=1000`
  // );
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/Egypt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/AboutUs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/CountactUs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/InquireNow`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/Thank_you`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/egypt-travel-blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...pages?.data.map((slug) => ({
      url: `${baseUrl}/${slug?.slug}`,
      changeFrequency: "monthly",
      priority: 1,
    })),
    ...types?.data.map((slug) => ({
      url: `${baseUrl}/Egypt/${slug?.slug}`,
      changeFrequency: "monthly",
      priority: 1,
    })),
    ...tours?.data.map((slug) => ({
      url: `${baseUrl}/Egypt/${slug?.site_map_frequency}/${slug?.slug}`,
      changeFrequency: "monthly",
      priority: 1,
    })),
    ...posts?.data.map((slug) => ({
      url: `${baseUrl}/egypt-travel-blog/${slug?.slug}`,
      changeFrequency: "monthly",
      priority: 1,
    })),
  ];
}

export default sitemap;
