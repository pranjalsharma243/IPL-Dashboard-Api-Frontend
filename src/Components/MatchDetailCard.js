import React from 'react'
import {Link} from 'react-router-dom'
import './MatchDetailCard.scss'
export const MatchDetailCard = ({teamname,match}) => {
    if(!match )return null;
    const otherteam=match.team1===teamname ? match.team2 : match.team1;
    const otherteamroute=`/team/${otherteam}`;
  
    const isMatchWon=teamname===match.matchWinner;
  return (
    <div className={isMatchWon ? 'MatchDetailCard won-card' : 'MatchDetailCard lost-card'}>
      <div>
        <span classname="vs">vs</span>
       <h3><Link to={otherteamroute}>{otherteam}</Link></h3>
       <h2 className="match-date">{match.date}</h2>
       <h3 className="match-venue">{match.venue}</h3>
       <h4 className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</h4>
       </div>
       <div className='additional-detail'>
       <h3>First Innings</h3>
       <p>{match.team1}</p>
       <h3>Second innings</h3>
       <p>{match.team2}</p>
       <h3>Man of the match</h3>
       <p>{match.playerOfMatch}</p>
       <h3>Umpires</h3>
       <p>{match.umpire1},{match.umpire2}</p>
       </div>
    </div>
  );
}

