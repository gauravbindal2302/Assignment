import "./Main.css";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="row-first">
          <div className="row-first-items">
            <button id="previous-toggler">*</button>
            <h2>Basic Mathematics 101</h2>
          </div>
          <div className="row-first-items">
            <button>* Call Teacher</button>
            <button>* Support</button>
          </div>
        </div>
        <div className="row-second">
          <button>Classroom</button>
          <button>Whiteboard</button>
          <button>Videos</button>
          <button>Slide Show</button>
          <button>Documents</button>
          <button>Doc Cam</button>
        </div>
        <div className="row-third">
          <div className="column-first">
            <div className="cards">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1699694927472-46a4fcf68973?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1699694927472-46a4fcf68973?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="card">
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
                    <img src="share.png" alt="" />
                  </button>
                  <button>
                    <img src="share.png" alt="" />
                  </button>
                </div>
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
