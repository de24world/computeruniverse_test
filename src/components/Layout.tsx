import React from "react";

// Libarary

interface Props {}

function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <div>{children}</div>
    </>
  );
}

export default Layout;
