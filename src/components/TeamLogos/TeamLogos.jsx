import "./TeamLogos.css"
import barcaLogo from "./../../HACKATON copia/equipos/barca-icon.svg"
import abandaLogo from "./../../HACKATON copia/equipos/Abanda-ademar-leon.svg"
import angelLogo from "./../../HACKATON copia/equipos/Angel Ximenez puente Genil.svg"
import badaLogo from "./../../HACKATON copia/equipos/Bada Huesca.svg"
import bathcoLogo from "./../../HACKATON copia/equipos/Bathco BM Torrelavega.svg"
import bidasoaLogo from "./../../HACKATON copia/equipos/Bidasoa IRUN.svg"
import bmANLogo from "./../../HACKATON copia/equipos/BM ANtequera.svg"
import BmBeniLogo from "./../../HACKATON copia/equipos/Bm Benidorm.svg"
import BmLogrono from "./../../HACKATON copia/equipos/Bm. logroño la rioja.svg"
import frigorificos from "./../../HACKATON copia/equipos/Frigorificos Morrazo.svg"
import granollers from "./../../HACKATON copia/equipos/granollers.svg"


const TeamLogos = () => {

    return (
        <div className="teamLogos">
            <img src={barcaLogo} />
            <img src={abandaLogo} />
            <img src={angelLogo} />
            <img src={badaLogo} />
            <img src={bathcoLogo} />
            <img src={bidasoaLogo} />
            <img src={bmANLogo} />
            <img src={BmBeniLogo} />
            <img src={BmLogrono} />
            <img src={frigorificos} />
            <img src={granollers} />
        </div>
    )
}
export default TeamLogos