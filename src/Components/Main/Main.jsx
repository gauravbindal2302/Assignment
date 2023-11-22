import "./Main.css";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="row-first">
          <div className="left">
            <button id="previous-toggler">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ic_keyboard_arrow_left_48px.svg/1200px-Ic_keyboard_arrow_left_48px.svg.png"
                alt=""
              />
            </button>
            <h2>Basic Mathematics 101</h2>
          </div>

          <div className="row-first-items">
            <button>
              <img
                style={{ backgroundColor: "#85baee" }}
                src="call.png"
                alt=""
              />{" "}
              Call Teacher
            </button>
            <button>
              <img
                style={{ backgroundColor: "#85baee" }}
                src="support.png"
                alt=""
              />{" "}
              Support
            </button>
          </div>
        </div>
        <div className="row-second">
          <button>
            <img src="classroom.png" alt="" /> Classroom
          </button>
          <button>
            <img src="whiteboard.png" alt="" />
            Whiteboard
          </button>
          <button style={{ backgroundColor: "#fff" }}>
            <img src="videos.png" alt="" /> Videos
          </button>
          <button>
            <img src="slideshow.png" alt="" /> Slide Show
          </button>
          <button>
            <img src="documents.png" alt="" /> Documents
          </button>
          <button>
            <img src="doc-cam.png" alt="" /> Doc Cam
          </button>
        </div>
        <div className="row-third">
          <div className="column-first">
            <div className="cards">
              <div className="card">
                <img
                  src="https://media.istockphoto.com/id/1295639732/id/foto/pria-membuat-panggilan-video-di-rumahnya.jpg?s=612x612&w=0&k=20&c=iL_h_wVUdhhiNCmj7mENrOj9BSVlFKLYoo9Qt0HHgC8="
                  alt=""
                />
                <div className="overlay">
                  <h3>Teacher Name</h3>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://media.istockphoto.com/id/1192627569/photo/headshot-portrait-laughing-30s-woman-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ZR4TOK9EJhoHO4lHySoelMCYXqEHqUCNQrxHDwiLjtU="
                  alt=""
                />
                <div className="overlay">
                  <h3>Student Name</h3>
                </div>
              </div>
              <div className="buttons">
                <button>
                  <img src="cam.png" alt="" />
                </button>
                <button>
                  <img src="mic.png" alt="" />
                </button>
                <button>
                  <img src="share.png" alt="" />
                </button>
                <button>
                  <img src="chat.png" alt="" />
                </button>
                <button style={{ backgroundColor: "#85baee" }}>
                  <img src="exit.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="column-second">
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" />
          </div>
        </div>
      </div>
    </>
  );
}
