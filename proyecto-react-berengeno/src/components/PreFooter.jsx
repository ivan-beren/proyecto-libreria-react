import LogoArena from "./LogoArena";

const PreFooter = () => {
    return(
        <div className="container-fluid bg-success my-5">
            <div className="row">
                <div className="col py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1">
                                <LogoArena />
                            </div>
                            <div className="col-md-9 d-flex align-items-center text-center">
                                <div className="row">
                                    <h3>¡NO TE PIERDAS NINGUNA DE NUESTRAS NOVEDADES!</h3>
                                    <h5>Registráte en nuestro newsletter.</h5>
                                </div>
                            </div>
                            <div className="col-md-2 d-flex align-items-center justify-content-end">
                                <input name="email" type="email" placeholder="Ingrese su email"></input>
                                <button title="Suscribirme" type="submit">
                                    <span>Suscribirme</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreFooter;