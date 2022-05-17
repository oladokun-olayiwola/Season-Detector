import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  winter: {
    text: "Burr it's chilly!",
    iconName: "snowflake",
  },
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
};




function getSeason(lat, month) {
  if (month < 2 && month > 9) {
    return lat > 0 ? "winter" : "summer";
  } else {
    return lat > 0 ? "summer" : "winter";
  }
}

const SeasonDetail = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season]
  return (
    <div className={`${season} season-display`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};














// function getSeason(lat, month) {
//     if(month > 2 && month < 9 && lat > 0){
//         return 'summer'
//     }else {
//         return "winnter"
//     };
//     if(month < 2 && month > 9 && lat > 0){
//         return "swinter"
//     }else {
//         return "summer"
//     }
// }

//Refctoring the above function with ternary operators

export default SeasonDetail;
