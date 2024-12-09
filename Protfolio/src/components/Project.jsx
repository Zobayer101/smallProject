import "../CSS/Project.css";
import Tilt from "./Tilt";
import images27 from "../screenshot/Screenshot (27).png";
import images24 from "../screenshot/Screenshot (24).png";
import images31 from "../screenshot/Screenshot (58).png";
import images59 from "../screenshot/Screenshot (59).png";
import images61 from "../screenshot/Screenshot  (61).png";
import images33 from "../screenshot/Screenshot (33).png";
import images23 from "../screenshot/Screenshot (23).png";
import images38 from "../screenshot/Screenshot (38).png";

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
                img={images24}
                texts={"OTP verification"}
                link={
                  "https://github.com/Zobayer101/TheMainProject/blob/TheMainProject/client/src/components/Verify.tsx"
                }
                className="img"
              />
              <Tilt
                img={images31}
                texts={"E-ecommerce"}
                link={"https://github.com/Zobayer101/E-commerce"}
                className="img"
              />
            </div>
            <div className="rightbox">
              <Tilt
                img={images59}
                texts={"ToDo app"}
                link={"https://github.com/Zobayer101/ToDoApp"}
                className="img"
              />
              <Tilt img={images61} texts={"calculator app"} className="img" />
            </div>
          </div>
          <div className="tiltBox2">
            <div className="leftBox">
              <Tilt
                img={images27}
                texts={"edit Profile"}
                link={
                  "https://github.com/Zobayer101/TheMainProject/blob/TheMainProject/client/src/components/profile/Editprofile.tsx"
                }
                className="imgx"
              />
              <Tilt
                img={images33}
                texts={"light mode"}
                link={
                  "https://github.com/Zobayer101/TheMainProject/blob/TheMainProject/client/src/components/Feed.tsx"
                }
                className="img"
              />
            </div>
            <div className="rightbox">
              <Tilt
                img={images38}
                texts={"message box"}
                link={
                  "https://github.com/Zobayer101/TheMainProject/blob/TheMainProject/client/src/components/message/MessagePage.tsx"
                }
                className="img "
              />
              <Tilt img={images23} texts={"check email "} className="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
