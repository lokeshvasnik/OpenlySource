import { useEffect,useState } from "react"; 
import {BsMoonStarsFill} from "react-icons/bs"
import {ImSun} from "react-icons/im"
import {TbLink} from "react-icons/tb"
import axios from "axios"
import "./Opportunities.css";

const Opportunities = () => {
  const [DarkTheme,setDarkTheme] = useState(false);
  const [Events , setEvents ] = useState([]);
  useEffect(() => {
  const fecthData = async () => {
    await axios.get("http://localhost:8000/api/opportunities/events")
        .then(res => {
            setEvents(res.data.data);
            console.log(Events);
        });
};
fecthData();
},[])
  return (
    <div className={` ${DarkTheme ?  "Opportunities_LightTheme":"Opportunities_DarkTheme"}`}>
      {/* opportunities heading  */}
      <div className="Opp_heading">All Upcoming open-source opportunities
      <div className="Opp_heading_icon">
        <button > {DarkTheme ? <BsMoonStarsFill className='icon' onClick = {()=>setDarkTheme(false)}/> : <ImSun className='icon'onClick = {()=>setDarkTheme(true)}/>} </button></div>
       </div>
      <div className="Opp_cards_list">
        {/* for Google summer of code */}
        {Events && Events.map && Events.map((Event,_id) => <div key={_id} className="Opp_card">
          <div className="card_left ">
            <img src={Event.logo} className="event_logo" />
          </div>
          <div className="card_right">
            <span className="card_right_heading">{Event.eventName}</span>
            <span className="card_right_description">
              {" "}
          {Event.description}
            </span>
            <div className="card_right_button">
              <button className="visit_button"> <a
                rel='noreferrer'
                href={Event.websiteUrl}
                target='_blank'
              ><TbLink/>Visit</a></button>
              <span className="month_name">{Event.months}</span>
            </div>
          </div>
        </div>)}
        </div>
      </div>
    // </div>
  );
};

export default Opportunities;
