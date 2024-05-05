import { Link } from "react-router-dom";
import "../stylesheet/Home.css";

export function Home() {
  return (
    <div className="content-main">
      <p className="txt-testimonials">EXPLORA TODOS LOS PROYECTOS HECHOS EN EL CURSO DE FREECODECAMP</p>
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
            <img 
            src="https://media.revistagq.com/photos/642d239639741a22169073ce/16:9/w_2560%2Cc_limit/spider-man-cruzando-el-multiverso.jpeg"
            alt="imagen"
            className="img"/>
      </div>
    </div>
  );
}