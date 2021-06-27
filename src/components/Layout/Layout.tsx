import React from "react";

// Libarary

interface LayoutProps {
  children: Object;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="layout">{children}</div>
    </>
  );
}

export default Layout;
