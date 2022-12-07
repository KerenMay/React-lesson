import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

function Layout({ children }) {
  return (
    <div>
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
