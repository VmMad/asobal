import { Table } from "react-bootstrap"
import Match from "../Match/Match"

const ResultsTable = () => {

    return (
        <div className="bodypadding">
            <h2 className="text-center upperC titlecolor">Horario</h2>
            <Table>
                <thead className="titlecolor">
                    <tr>
                        <th className="text-center">Hora</th>
                        <th>L</th>
                        <th className="text-center upperC">Marcador</th>
                        <th>V</th>
                    </tr>
                </thead>
                <tbody>
                    <Match date={`24/02`} hour="14:00" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                    <Match date={`24/02`} hour="14:00" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                    <Match date={`24/02`} hour="14:00" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                    <Match date={`24/02`} hour="14:00" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                </tbody>
            </Table>
        </div>
    )

}
export default ResultsTable