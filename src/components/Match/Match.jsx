import "./Match.css"
const Match = ({ date, team1Img, team1Name, team2Img, team2Name, score, year }) => {


    return (
        <tr className=" flex-row trow">
            <td className="text-center" >
                {date}<br />{year}
            </td>
            <td><img src={team1Img} /><br /><p className="text-center">{team1Name}</p></td>
            <td className="text-center ">{score}</td>
            <td><img src={team2Img} /> <br /> <p className="text-center">{team2Name}</p></td>
        </tr>
    )
}
export default Match