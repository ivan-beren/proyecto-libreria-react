import Apple from "../assets/app-store.png";
import Android from "../assets/google-play.png";
import PreFooter from "./PreFooter";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter-x.svg";
import Tiktok from "../assets/tiktok.svg";

const Footer = () => {
    return(
        <>
            <PreFooter />
            <div className="container text-end">
                <div className="row">
                    <div className="col">
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#" className="mx-1"><img src={Facebook} width= {40} alt={"Facebook"} /></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="mx-1"><img src={Instagram} width= {40} alt={"Instagram"} /></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="mx-1"><img src={Twitter} width= {40} alt={"Twitter"} /></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="mx-1"><img src={Tiktok} width= {40} alt={"Tiktok"} /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <a href="#" className="mx-1"><img src={Apple} width= {115} alt={"Apple"} /></a>
                        <a href="#"><img src={Android} width= {128} alt={"Android"} /></a>
                    </div>
                </div>
                <hr />
                <div className="row my-3">
                    <div className="col-md-10">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Sucursales</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">¿Necesitas Asesoramiento para tu Compra?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-secondary fs-6" href="#">Desctacados</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;