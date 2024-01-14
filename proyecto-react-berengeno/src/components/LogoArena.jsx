import Logo from "../assets/logo-librosarena.png"

const LogoArena = ({tamano}) => {
    return(
        <img src={Logo} alt="Arena Logo" width={tamano} />
    )
}

export default LogoArena;