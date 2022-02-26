import "./LeaderboardCard.css"

const LeaderboardCard = ({ position, img, name, playedMatches, points }) => {
    return (
        <tr className="leaderboardCard text-center">
            <td>{position}</td>
            <td className="d-flex flex-row clubSpace"><img src={img} className="clubLogo" />{name}</td>
            <td>{playedMatches}</td>
            <td>{points}</td>
        </tr>
    )
}
export default LeaderboardCard