import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const Seo = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image,
  } = useSiteMetadata();

  const seo = {
    title: `${title} | Sarah Wilkes Dev` || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      {children}
    </>
  );
};
