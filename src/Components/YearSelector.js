import {React} from "react";
import { Link } from "react-router-dom";
import './YearSelector.scss';
export const YearSelector = ({teamname}) => {

let years=[];
const startYear=process.env.REACT_APP_DATA_START_YEAR;
const endYear=process.env.REACT_APP_DATA_END_YEAR;
for(let i=startYear;i<=endYear;i++)
{

    years.push(i);

}
console.log(years);
return(
<ol className="YearSelector">
{years.map(year=>(
<li>
   <Link key={year} to={`/team/${teamname}/matches/${year}`}>{year}</Link> 
</li>
))}
</ol>




)
}