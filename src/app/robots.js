
export default function robots(){
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://my-project-port.vercel.app/sitemap.xml",
  };
}
