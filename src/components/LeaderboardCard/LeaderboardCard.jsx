import "./LeaderboardCard.css"

const LeaderboardCard = ({ position, img, name, playedMatches, points, className }) => {
    return (
        <>{className ? <tr className={`leaderboardCard text-center ${className}`}>
            <td>{position}</td>
            <td className="text-start"> <img src={img} className="clubLogo" /> {name}</td>
            <td>{playedMatches}</td>
            <td>{points}</td>
        </tr> : <tr className={`leaderboardCard text-center`}>
            <td>{position}</td>
            <td className="text-start"> <img src={img} className="clubLogo" /> {name}</td>
            <td>{playedMatches}</td>
            <td>{points}</td>
        </tr>}

        </>
    )
}
export default LeaderboardCard