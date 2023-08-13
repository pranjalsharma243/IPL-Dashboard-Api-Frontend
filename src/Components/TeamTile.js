import React from 'react';
import { Link } from 'react-router-dom';
import './TeamTile.scss';
export const TeamTile = ({teamname}) => {
  return (
    <div className='TeamTile'>
        <h1><Link to={`/team/${teamname}`}>{teamname}</Link></h1>
        </div>
  )
}

