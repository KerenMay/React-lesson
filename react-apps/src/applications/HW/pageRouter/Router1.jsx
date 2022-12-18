import { useState } from "react";

function Page1() {
  return (
    <div>
      <h2>This is my Page1 Title</h2>
      <p>This is my page1 body</p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h2>This is my Page2 Title</h2>
      <p>This is my Page2 body</p>
    </div>
  );
}

function Page3() {
  return (
    <div>
      <h2>This is my Page3 Title</h2>
      <p>This is my Page3 body</p>
    </div>
  );
}

function Router1() {
  const [pageToShow, setPageToShow] = useState("page1");

  function getPage() {
    if (pageToShow === "page1") {
      return <Page1 />;
    } else if (pageToShow === "page2") {
      return <Page2 />;
    } else if (pageToShow === "page3") {
      return <Page3 />;
    }
  }

  function showPage1() {
    setPageToShow("page1");
  }
  function showPage2() {
    setPageToShow("page2");
  }
  function showPage3() {
    setPageToShow("page3");
  }

  return (
    <div>
      <div>
        <button onClick={showPage1}>Show page1</button>
        <button onClick={showPage2}>Show page2</button>
        <button onClick={showPage3}>Show page3</button>
      </div>
      {getPage()}
    </div>
  );
}
export default Router1;
