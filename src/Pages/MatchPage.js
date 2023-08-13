import {React,useEffect,useState} from 'react'
import { MatchDetailCard } from '../Components/MatchDetailCard';
import { MatchSmallCard } from '../Components/MatchSmallCard';
import { useParams } from 'react-router-dom';
import './MatchPage.scss';
import { YearSelector } from '../Components/YearSelector';
export const MatchPage = () => {
const [matches,setMatches]=useState([]);
const {teamname,year}=useParams();

useEffect(
    ()=>{
     
        const fetchMatches=async()=>
        {
            const response=await fetch(`http://localhost:8080/team/${teamname}/matches?year=${year}`);
            const data=await response.json();
           
            setMatches(data);
        };
    
    fetchMatches();
    },[teamname,year]
    );

  return (
    <div className='MatchPage'>
      <div className='year-selector'>
        <h3>Select year</h3>
        <YearSelector teamname={teamname}/>
      </div>
     
      <div >
      <h1 className='t-selector'>{teamname} matches in {year}</h1>
      {
      matches.map(match=><MatchDetailCard  teamname={teamname} match={match}/>)
      }
      </div>
    </div>
  );
  }