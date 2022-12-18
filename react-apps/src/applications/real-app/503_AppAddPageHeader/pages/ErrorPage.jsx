import Layout from "../layouts/Layout";
import PageHeader from "../components/PageHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function ErrorPage() {
  return (
    <Layout>
      <PageHeader
        title="OOOPS something went wrong"
        subtitle={"not existed page"}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={6} lg={6} xl={8}>
          <Typography variant="h5">
            Requested URL wasn't found in this server
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={6} lg={6} xl={4}>
          <img
            width="100%"
            src="/assets/images/broken-robot.jpg"
            alt="Broken Robot"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ErrorPage;
