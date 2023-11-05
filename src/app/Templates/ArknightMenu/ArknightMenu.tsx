import "./ArknightMenu.scss";
import w from "../../../assets/images/W.webp";
// import C from "../../../assets/images/chess-rook-alt.svg";

const ArknightMenu = () => {
  return (
    <>
      <img
        style={{ width: " 830px" }}
        src="https://www.bayjinger.com/wp-content/uploads/2019/05/IMG_0647-1024x473.png"
        alt=""
      />
      <img
        style={{ width: " 800px" }}
        src="https://api.duniagames.co.id/api/content/upload/file/5911735281580664125.jpg"
        alt=""
      />
      <div className="arknight-menu-host mb-10">
        <img src={w} alt="" style={{ height: "500px" }} className="ml-16" />
        <svg
          viewBox="25 25 50 50"
          className="p-progress-spinner-svg"
          data-pc-section="root"
          style={{ animationDuration: " 0.5s" }}
        >
          <circle
            cx="50"
            cy="50"
            r="20"
            stroke-miterlimit="10"
            className="p-progress-spinner-circle"
            fill="var(--surface-ground)"
            stroke-width="8"
          ></circle>
        </svg>
        <div className="test2">
          <div className="arknight-menu-left-wrapper">
            <div className="menu">
              <span className="chat">
                <div className="topic-chat">Working!</div>
                Gooood mornign, Doctor!
              </span>
            </div>
            <div className="menu">
              <div className="breaking-news"></div>
              <div className="info-wrapper">
                <div className="friend">
                  <span className="icon-friend"></span>
                  <span className="text-menu">Friend</span>
                </div>
                <div className="info">
                  <span className="text-menu">Info</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="test">
          <div className="arknight-menu-right-wrapper">
            <div className="menu">
              <div className="coin">Coin</div>
            </div>
            <div className="menu">
              <div className="combat">Combat</div>
            </div>
            <div className="menu">
              <div className="squads">Squads</div>
              <div className="Operator">Operator</div>
              <div className="black-box"></div>
            </div>
            <div className="menu">
              <div className="store">Store</div>
            </div>
            <div className="menu">
              <div className="mission">
                <div className="border-mission"></div>Mission
              </div>
              <div className="base">
                <span>Base</span>
                {/* <small>BETA</small> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArknightMenu;
