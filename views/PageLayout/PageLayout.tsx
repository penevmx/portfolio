import { Nav } from "@/views/PageLayout/Nav";
import React from "react";

type PageLayoutType = {
  children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutType> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
