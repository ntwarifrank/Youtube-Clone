
import movie from '../../assets/image/movie.png'
import './sidebar.css';
import home from '../../assets/image/home.png'
import music from '../../assets/image/music.jpg'
import game from '../../assets/image/game.png'
import politic from '../../assets/image/politic.jpg'
import bass from '../../assets/image/bass.jpg'
import foot from '../../assets/image/foot.jpg'
import profile from '../../assets/image/profile.jpg'

const Sidebar = ({navbar, category, setCategory}) => {
  return (
    <div>
      <div className="sidebar">
        <div className={navbar ? "" : "short-sidebar"}>
          <div className="short-link ">
            <div
              className={`link ${category === 0 ? "active" : ""}`}
              onClick={() => {
                setCategory(0);
              }}
            >
              <div className="link-image">
                <img src={home} alt="" />
              </div>
              <div className="link-title">
                <p>Home</p>
              </div>
            </div>

            <div
              className={`link ${category === 25 ? "active" : ""}`}
              onClick={() => {
                setCategory(25);
              }}
            >
              <div className="link-image">
                <img src={politic} alt="" />
              </div>
              <div className="link-title">
                <p>plitics</p>
              </div>
            </div>

            <div
              className={`link ${category === 24 ? "active" : ""}`}
              onClick={() => {
                setCategory(24);
              }}
            >
              <div className="link-image">
                <img src={music} alt="" />
              </div>
              <div className="link-title">
                <p>Entertainment</p>
              </div>
            </div>

            <div
              className={`link ${category === 17 ? "active" : ""}`}
              onClick={() => {
                setCategory(17);
              }}
            >
              <div className="link-image">
                <img src={foot} alt="" />
              </div>
              <div className="link-title">
                <p>Sports</p>
              </div>
            </div>

            <div
              className={`link ${category === 10 ? "active" : ""}`}
              onClick={() => {
                setCategory(10);
              }}
            >
              <div className="link-image">
                <img src={bass} alt="" />
              </div>
              <div className="link-title">
                <p>Music</p>
              </div>
            </div>

            <div

              className={`link ${category === 22 ? "active" : ""}`}
              onClick={() => {
                setCategory(22);
              }}
            >
              <div className="link-image">
                <img src={politic} alt="" />
              </div>
              <div className="link-title">
                <p>Blogs</p>
              </div>
            </div>

            <div
              className={`link ${category === 20 ? "active" : ""}`}
              onClick={() => {
                setCategory(20);
              }}
            >
              <div className="link-image">
                <img src={game} alt="" />
              </div>
              <div className="link-title">
                <p>Game</p>
              </div>
            </div>

            <div
              className={`link ${category === 25 ? "active" : ""}`}
              onClick={() => {
                setCategory(25);
              }}
            >
              <div className="link-image">
                <img src={movie} alt="" />
              </div>
              <div className="link-title">
                <p>News</p>
              </div>
            </div>
          </div>

          <hr />

          <div className="subscription">
            <h3>{navbar ? "Subscriptions" : "Subsc"}</h3>

            <div className="subscribed">
              <div className="image">
                <img src={profile} alt="" />
              </div>
              <div className="name">
                <h4>mr beast</h4>
              </div>
            </div>

            <div className="subscribed">
              <div className="image">
                <img src={profile} alt="" />
              </div>
              <div className="name">
                <h4>Amezing R</h4>
              </div>
            </div>

            <div className="subscribed">
              <div className="image">
                <img src={profile} alt="" />
              </div>
              <div className="name">
                <h4>Bro Code</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar
