import "./Nav.css"
import search from "../../assets/image/ff.jpg";
import bar from '../../assets/image/sidebar.jpg'
import logo from '../../assets/image/logo.png'
import notif from '../../assets/image/not.png'
import upload from '../../assets/image/upload.jpg'
import profile from '../../assets/image/profile.jpg'
import {Link} from 'react-router-dom'

const Nav = ({setnavbar}) => {
  return (
    <div>
      <div className="nav">
        <div className="left">
          <img
            src={bar}
            alt=""
            className="bar"
            onClick={() => {
              setnavbar((prev) => (prev ? false : true));
            }}
          />
          <Link to="">
            <img src={logo} alt="" className="logo" />
          </Link>
          <h3>YouTube</h3>
        </div>

        <div className="middle">
          <div className="search_input">
            <div className="ser">
              <input type="search" id="search" />
            </div>
            <div className="icon">
              <img src={search} alt="" />
            </div>
          </div>
        </div>

        <div className="right">
          <img src={upload} alt="" className="upload" />
          <img src={notif} alt="" className="notif" />
          <div className="profile">
            <img src={profile} alt="" className="profile-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
