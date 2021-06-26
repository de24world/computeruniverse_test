import React from "react";

// Next
import Head from "next/head";

interface Props {
  title: string;
  name: string;
  contents: string;
}

function HeadInfo({ title, name, contents }: Props): JSX.Element {
  return (
    <>
      <title>{title}</title>
      <meta name={name} />
      <meta contents={contents} />
    </>
  );
}

export default HeadInfo;
