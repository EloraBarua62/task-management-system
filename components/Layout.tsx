import Head from "next/head";
import Header from "./shared/Header/Header";


export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
    return (
      <>
        <Header/>
        {children}
      </>
    );
};
