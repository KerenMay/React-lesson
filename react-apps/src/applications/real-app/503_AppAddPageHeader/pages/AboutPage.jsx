import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import routes from "../router/routes";

function AboutPage() {
  return (
    <Layout>
      <div>About My App</div>
      <Link to={routes.HOMEPAGE}>Go to on page</Link>
    </Layout>
  );
}
export default AboutPage;
