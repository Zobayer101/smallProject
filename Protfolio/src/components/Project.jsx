import "../CSS/Project.css";
import Tilt from "./Tilt";
import images27 from "../screenshot/Screenshot (27).png";
import images24 from "../screenshot/Screenshot (24).png";
import images31 from "../screenshot/Screenshot (31).png";
import images41 from "../screenshot/Screenshot (41).png";
import images20 from "../screenshot/Screenshot (20).png";
import images47 from "../screenshot/Screenshot (47).png";
import images23 from "../screenshot/Screenshot (23).png";
import images45 from "../screenshot/Screenshot (45).png";

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
              <Tilt img={images24} className="img" />
              <Tilt img={images31} className="img" />
            </div>
            <div className="rightbox">
              <Tilt img={images41} className="img" />
              <Tilt img={images20} className="img" />
            </div>
          </div>
          <div className="tiltBox2">
            <div className="leftBox">
              <Tilt img={images27} className="imgx" />
              <Tilt img={images47} className="img" />
            </div>
            <div className="rightbox">
              <Tilt img={images45} className="img " />
              <Tilt img={images23} className="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
