import { Link } from "react-router-dom";
import "../stylesheet/Home.css";

export function Home() {
  return (
    <div className="content-main">
      <div className="content-txt">
        <p className="txt-testimonials">EXPLORE ALL THE PROJECTS MADE IN THE FREECODECAMP COURSE</p>
      </div>
      <div className="img-content">
        <Link to ="/testimonials">
          <img 
            src="https://i.ibb.co/zQ63wd5/img-test.png"
            alt="imagen"
            className="img"/>
        </Link>
        <Link to ="/counter">
          <img 
            src="https://i.ibb.co/vDWnbt9/img-coun.png"
            alt="imagen"
            className="img"/>
        </Link>
        <Link to ="/calculator">
          <img 
            src="https://i.ibb.co/R6Y47Dc/Screenshot-2024-05-04-194603.png"
            alt="imagen"
            className="img"/>
        </Link>
        <Link to ="/list">
          <img 
            src="https://i.ibb.co/zVjZB4N/Screenshot-2024-05-09-at-12-38-07.png"
            alt="imagen"
            className="img"/>
        </Link>
      </div>
    </div>
  );
}