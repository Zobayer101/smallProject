import "../CSS/Home.css";
import { PiMouseSimpleThin } from "react-icons/pi";
const Home = () => {
    return (
      <div>
        <div id="home" className="countuner">
          <div className="border">
                    <PiMouseSimpleThin className="scrollIcon" />
                    <span className="scrolltext">scroll</span>
                </div>
                <div className="mainPropaty">
                    <div className="writer">
                        <div className="writerCard">
                            <div className="startText">Start/&gt;</div>
                            <div className="myname">Hi, my name is <span>Md Zobayer hosen</span></div>
                            <div className="writerWrite"> I&#39;m a webdevloper</div>
                            <p>Let me show you....</p>
                        </div>
                    </div>
                    <div className="IMG"></div>
                </div>
        </div>
      </div>
    );
}
export default Home;