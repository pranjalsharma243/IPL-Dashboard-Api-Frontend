import {React,useEffect,useState} from 'react'

import './HomePage.scss';

import { TeamTile } from '../Components/TeamTile';

export const HomePage = () => {

    const [teams,setTeams]=useState([]);
   

useEffect(
()=>{
 
    const fetchAllTeams=async()=>
    {
        console.log("haa aya");
        const response=await fetch(`https://pranjal.azurewebsites.net/teams`);
        const data=await response.json();
       
        setTeams(data);
    };

fetchAllTeams();
},[]
);


  return (
    <div className='HomePage'>
        <div className='header-section'>
               <h1 className='app-name'>IPL Dashboard</h1>
        </div>
        <div className='team-grid'>
            {teams.map(team=> <TeamTile teamname={team.teamname}/>)}
        </div>
      </div>
  );
  }