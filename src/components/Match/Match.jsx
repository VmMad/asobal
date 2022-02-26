import "./Match.css"
const Match = ({ date, team1Img, team2Img, score, hour }) => {


    return (
        <tr className=" flex-row trow">
            <td className="text-start" >
                {date}<br />{hour}
            </td>
            <td><img src={team1Img} /></td>
            <td className="text-center ">{score}</td>
            <td><img src={team2Img} /></td>
        </tr>
    )
}
export default Match