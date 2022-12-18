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

const routes = [
  {
    id: "0",
    name: "page1",
    page: <Page1 />,
  },
  {
    id: "1",
    name: "page2",
    page: <Page2 />,
  },
  {
    id: "2",
    name: "page3",
    page: <Page3 />,
  },
];

function Router2() {
  const [pageId, setPageId] = useState(0);
  function showPage(event) {
    const newPageId = event.target.getAttribute("page-id");
    setPageId(newPageId);
  }

  return (
    <div>
      <h2>Router 2</h2>
      {routes.map((route) => (
        <button onClick={showPage} key={route.name} page-id={route.id}>
          {route.name}
        </button>
      ))}
      {routes[pageId].page}
    </div>
  );
}

export default Router2;
