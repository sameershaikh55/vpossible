import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ description, title, canonical, robot }) => {
  const noFound = {
    title: "",
    description: "",
  };

  const metaDescription = description || noFound.description;
  const metaTitle = title || noFound.title;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta property="og:title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={robot} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:title" content={metaTitle} />
      <meta itemprop="name" content={metaTitle} />
      <meta itemprop="description" content={metaDescription} />
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:description" content={metaDescription} />
      <meta itemprop="description" content={metaDescription} />
      <meta property="og:image" content="" />
      <meta name="twitter:image" content="" />
      <meta itemprop="image" content="" />
      <meta property="og:url" content="https://www.vpossible.com.au/" />
      <meta itemprop="url" content="https://www.vpossible.com.au/" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
};

export default Seo;
