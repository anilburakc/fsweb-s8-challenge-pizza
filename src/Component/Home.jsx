import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home(){
    return(
      <div className="home-container">
        <img src="/images/iteration-1-images/logo.svg"/>
        <p>
          KOD ACIKTIRIR
          PIZZA DOYURUR
        </p>
        <Link to='/order'>
          <button>ACIKTIM</button>
        </Link>
      </div>
    );
}