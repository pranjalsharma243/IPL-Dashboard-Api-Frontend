import React from 'react'
import {Link} from 'react-router-dom';
import './MatchSmallCard.scss';
export const MatchSmallCard = ({teamname,match}) => {
  const otherteam=match.team1===teamname ? match.team2 : match.team1;
  const otherteamroute=`/team/${otherteam}`;
  const isMatchWon=teamname===match.matchWinner;
  return (
    <div className={isMatchWon ? 'MatchSmallCard won-card':'MatchSmallCard lost-card'}>
      <span className="vs">vs</span>
   <h3><Link to={otherteamroute}> {otherteam}</Link></h3> 
   <p className='match-result'>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
}

