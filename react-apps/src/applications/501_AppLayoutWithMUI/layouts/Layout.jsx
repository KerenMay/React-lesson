import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import CssBaseline from "@mui/material/CssBaseline";

function Layout({ children }) {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Main>
        <div>This is my main</div>
        {children}
      </Main>
      <Footer />
    </div>
  );
}

export default Layout;
