import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />
          </div>
          <div className="navbar-items">
            <ul>
              <li>
                <img src="bar.png" alt="" />
              </li>
              <li>
                <img src="notification.png" alt="" />
              </li>
              <li>
                <img src="gauge.png" alt="" />
              </li>
              <li>
                <img src="list.png" alt="" />
              </li>
              <li>
                <img src="view.png" alt="" />
              </li>
              <li>
                <img src="group.png" alt="" />
              </li>
              <li>
                <img src="graph.png" alt="" />
              </li>
            </ul>
          </div>
          <div className="profile">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/30/60/82/1000_F_230608264_fhoqBuEyiCPwT0h9RtnsuNAId3hWungP.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
