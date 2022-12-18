import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Layout>
      <h1>Home Page!!</h1>
      <Link to={"/about"}>Go to About page</Link>
    </Layout>
  );
}
export default HomePage;
