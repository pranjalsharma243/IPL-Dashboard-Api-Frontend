import {React,useEffect,useState} from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard';
import { MatchSmallCard } from '../Components/MatchSmallCard';
import { useParams,Link } from 'react-router-dom';
import './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';

export const TeamPage = () => {
//useState to set State
    const [team,setTeam]=useState({matches: []});
    const {teamname}=useParams();

useEffect(
()=>{
 
    const fetchMatches=async()=>
    {
        const response=await fetch(`http://localhost:8080/team/${teamname}`);
        const data=await response.json();
       
        setTeam(data);
    };

fetchMatches();
},[teamname]
);


if(! team || !team.teamname)
return <h1>Team Not Found</h1>
  return (
    <div className='TeamPage'>
        <div className='team-name-section'>
               <h1 className='team-name'>{team.teamname}</h1>
        </div>
        <div className='win-loss-section'>
            Wins/Losses
            <PieChart
  data={[
    { title: 'Losses', value: (team.teammatches-team.totalwins), color: '#a34d5d' },
    { title: 'Wins', value: team.totalwins, color: '#4da375' },
  
    
  ]}
/>
        </div>
            <div className='match-detail-section'>  
            <h3>Latest matches</h3>
               <MatchDetailCard  teamname={team.teamname} match={team.matches[0]}/>
        </div>
      
               {team.matches.slice(1).map(match=><MatchSmallCard key={match.id} teamname={team.teamname} match={match}/>)}
       <div className='more-link'>
       <Link to={`/team/${teamname}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>more..</Link> 
       </div>
    </div>
  );
  }