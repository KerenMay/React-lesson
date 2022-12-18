import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import routes from "../router/routes";

function HomePage() {
  return (
    <Layout>
      <h1>Home Page!!</h1>
      <Link to={routes.ABOUT_PAGE}>Go to About page</Link>
    </Layout>
  );
}
export default HomePage;
