import "./App.scss";
import Content from "./Layouts/Content";
import Header from "./Layouts/Header";
import SideBar from "./Layouts/SideBar";

function App() {
  return (
    <>
      <SideBar />
      <div className="layout-page-wrapper">
        <Header />
        <main className="page">
          <div className="radius-page"></div>
          <div className="radius-config"></div>
          <div className="config"></div>
          <Content />
          <footer></footer>
        </main>
      </div>
    </>
  );
}

export default App;
