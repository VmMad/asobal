import { Table } from "react-bootstrap"
import Match from "../Match/Match"

const ResultsTable = () => {

    return (
        <div className="bodypadding">
            <h2 className="text-center">Horarios</h2>
            <Table>
                <thead>
                    <tr>
                        <th className="text-center">Fecha</th>
                        <th></th>
                        <th className="text-center">Puntos</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <Match date={`24/02`} year="2022" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team1Name="GRA" team2Name="CNG" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                    <Match date={`24/02`} year="2022" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team1Name="GRA" team2Name="CNG" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                    <Match date={`24/02`} year="2022" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team1Name="GRA" team2Name="CNG" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                    <Match date={`24/02`} year="2022" team1Img="https://asobal.es/imagenes/jornada/club7.svg" team1Name="GRA" team2Name="CNG" team2Img="https://asobal.es/imagenes/jornada/club15.svg" score="0 : 0" />
                </tbody>
            </Table>
        </div>
    )

}
export default ResultsTable