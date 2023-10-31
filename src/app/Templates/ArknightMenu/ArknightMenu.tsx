import "./ArknightMenu.scss";
import w from "../../../assets/images/W.webp";

const ArknightMenu = () => {
  return (
    <>
      <img
        style={{ width: " 800px" }}
        src="https://api.duniagames.co.id/api/content/upload/file/5911735281580664125.jpg"
        alt=""
      />
      <div className="arknight-menu-host mb-10">
        <img src={w} alt="" style={{ height: "500px" }} className="ml-10" />
        <div className="arknight-menu-left-wrapper">
          <div className="menu">Mission</div>
          <div className="menu">Mission</div>
          <div className="menu">Mission</div>
          <div className="menu">Mission</div>
        </div>
        <div className="test">
          <div className="arknight-menu-right-wrapper">
            <div className="menu">
              <div className="coin">Coin</div>
            </div>
            <div className="menu">
              <div className="combat">Squads</div>
            </div>
            <div className="menu">
              <div className="box">Squads</div>
              <div className="box">Operator</div>
            </div>
            <div className="menu">
              <div className="store">Store</div>
            </div>
            <div className="menu">
              <div className="mission">Mission</div>
              <div className="base">Base</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArknightMenu;
