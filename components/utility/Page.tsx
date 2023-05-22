import Footer from "../global/Footer";
import Head from "next/head";
import MobileNavbar from "../global/MobileNavbar";
import Navbar from "../global/Navbar";
import React, { ReactChildren } from "react";

function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
  const pageTitle = `${
    currentPage === "Portfolio"
      ? "Weiran Zhou"
      : `${currentPage} - WeiranZhou.github.io`
  }`;
  console.log(currentPage);
  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-black overflow-hidden md:overflow-visible"
      style={{ maxWidth: "1200px" }}
    >
      
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC3CN7V"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>

      <main className="p-5 w-full flex-1 text-center mb-10">
        <div className="hidden sm:block z-100">
          <Navbar currentPage={currentPage} />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar />
        </div>
        {children}
       
      </main>
      <Footer /> 
    </div>
  );
}

export default Page;

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};
