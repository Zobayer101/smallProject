import "../CSS/Project.css";
import Tilt from "./Tilt";

const Project = () => {
  return (
    <div>
      <div id="project" className="projectSection">
        <div className="Pborder ">
          <p>Project/&gt;</p>
        </div>
        <div className="projectCon">
          <div className="tiltBox1">
            <div className="leftBox">
              <Tilt
                img="../../public/screenshot/Screenshot (24).png"
                className="img"
              />
              <Tilt
                img="../../public/screenshot/Screenshot (31).png"
                className="img"
              />
            </div>
            <div className="rightbox">
              <Tilt
                img="../../public/screenshot/Screenshot (41).png"
                className="img"
              />
              <Tilt
                img="../../public/screenshot/Screenshot (20).png"
                className="img"
              />
            </div>
          </div>
          <div className="tiltBox2">
            <div className="leftBox">
              <Tilt
                img="../../public/screenshot/Screenshot (27).png"
                className="imgx"
              />
              <Tilt
                img="../../public/screenshot/Screenshot (47).png"
                className="img"
              />
            </div>
            <div className="rightbox">
              <Tilt
                img="../../public/screenshot/Screenshot (45).png"
                className="img "
              />
              <Tilt
                img="../../public/screenshot/Screenshot (23).png"
                className="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
