import HomeTemplate from "components/templates/home";
import Layout from "components/common/Layout";
/*** dataStatic ***/
import dataStatic from "./data.json";
/*** ========== ***/
export default function Home() {
  return (
    <>
      <Layout>
        <HomeTemplate dataStatic={dataStatic} />
      </Layout>
    </>
  );
}
