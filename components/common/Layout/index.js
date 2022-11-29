import Header from "components/common/Layout/Header";
import Footer from "components/common/Layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
