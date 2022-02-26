import { Table } from "react-bootstrap"
import LeaderboardCard from "../LeaderboardCard/LeaderboardCard"
import './Leaderboard.css'


const Leaderboard = () => {
    return (
        <div className="bodypadding paddingbot">
            <h2 className="text-start upperC titlecolor">Clasificación</h2>
            <Table className="leaderboardtable">
                <thead>
                    <tr className="text-start">
                        <th className="text-center">P</th>
                        <th className="upperC">Club</th>
                        <th className="text-center">PJ</th>
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody>
                    <LeaderboardCard position="1º" img="https://asobal.es/imagenes/jornada/club1.svg" name="Barça" playedMatches="32" points="34" className="leaders" />
                    <LeaderboardCard position="2º" img="https://asobal.es/imagenes/jornada/club1.svg" name="1" playedMatches="32" points="24" className="leaders" />
                    <LeaderboardCard position="3º" img="https://asobal.es/imagenes/jornada/club1.svg" name="Barça" playedMatches="32" points="22" className="leaders" />
                    <LeaderboardCard position="4º" img="https://asobal.es/imagenes/jornada/club1.svg" name="Barça" playedMatches="32" points="20" />
                    <LeaderboardCard position="5º" img="https://asobal.es/imagenes/jornada/club1.svg" name="Barça" playedMatches="32" points="16" />
                </tbody>
            </Table>
        </div>
    )
}
export default Leaderboard