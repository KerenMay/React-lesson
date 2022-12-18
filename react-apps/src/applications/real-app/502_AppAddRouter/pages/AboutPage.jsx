import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Layout>
      <div>About My App</div>
      <Link to={"/"}>Go to on page</Link>
    </Layout>
  );
}
export default AboutPage;
