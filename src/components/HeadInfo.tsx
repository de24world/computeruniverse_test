import React from "react";

// Next
import Head from "next/head";

interface Props {
  title: string;
  name: string;
  content: string;
}

function HeadInfo({ title, name, content }: Props): JSX.Element {
  return (
    <>
      <title>{title}</title>
      <meta name={name} />
      <meta content={content} />
    </>
  );
}

export default HeadInfo;
