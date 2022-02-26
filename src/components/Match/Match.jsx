import "./Match.css"
const Match = ({ date, team1Img, team2Img, score, hour }) => {


    return (
        <tr className=" flex-row trow">
            <td className="text-center" >
                {date}<br />{hour}
            </td>
            <td align="center"><img src={team1Img} className="teamMatch" /></td>
            <td className="text-center score">{score}</td>
            <td align="center"><img src={team2Img} className="teamMatch" /></td>
        </tr>
    )
}
export default Match