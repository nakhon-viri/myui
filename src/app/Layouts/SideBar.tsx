import logo from "../../assets/images/logo.svg";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <header className="header-siderbar">
        <a href="" className="logo">
          <img src={logo} width={50} alt="" />
          <span className="logo-name">{import.meta.env.VITE_APP_NAME}</span>
        </a>
      </header>
      <nav className="content-sidebar">
        <ul>
          <li>
            <section className="sidebar-section">
              <p className="sidebar-links-header">
                <span>Components</span>
              </p>
              <ul className="sidebar-group-links">
                <li>
                  <a className="sidebar-link cursor-pointer">Button</a>
                </li>
                <li>
                  <a className="sidebar-link cursor-pointer">Select</a>
                </li>
                <li>
                  <a className="sidebar-link cursor-pointer">Model</a>
                </li>
              </ul>
            </section>
          </li>
          <li>
            <section className="sidebar-section">
              <p className="sidebar-links-header">
                <span>Template</span>
              </p>
              <ul className="sidebar-group-links">
                <li>
                  <a className="sidebar-link cursor-pointer">Arknight Menu</a>
                </li>
              </ul>
            </section>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
