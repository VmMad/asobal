import { Table } from "react-bootstrap"
import Match from "../Match/Match"

const ResultsTable = () => {

    return (
        <div className="bodypadding scheduletable">
            <h2 className="text-start upperC titlecolor schedule">Horario</h2>
            <Table width="100%">
                <thead className="titlecolor">
                    <tr className="theaders">
                        <th className="text-center">Hora</th>
                        <th className="text-center">L</th>
                        <th className="text-center upperC">Marcador</th>
                        <th className="text-center">V</th>
                    </tr>
                </thead>
                <tbody>
                    <Match date={`24/02`} hour="14:00" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                    <Match date={`24/02`} hour="14:00" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                    <Match date={`24/02`} hour="14:00" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                    <Match date={`24/02`} hour="14:00" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                    <Match date={`24/02`} hour="14:00" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                </tbody>
            </Table>
            <h6 className="upperC titlecolor">+ Horario completo</h6>
        </div>
    )

}
export default ResultsTable