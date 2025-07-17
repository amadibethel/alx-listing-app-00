import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
