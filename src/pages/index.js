// layouts
import Layout from "@/layouts";
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

function Home() {
  return <h1>Welcome to my Page </h1>;
}
export default Home;
