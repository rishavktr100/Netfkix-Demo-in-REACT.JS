import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import "./index.css";
import Sdata from "./Sdata";

 function netflix(val){
  return(
    <Card imgsrc ={val.imgsrc}
        title ={val.title}
        sname ={val.sname}
        link={val.link} />
  );
}

ReactDOM.render(
  <>
  <img src="netflix.jpg" alt="" srcset="" />
  <h1 className="heading_style">List of top 6 Netflix Series</h1>
  {Sdata.map(netflix)};
  </>,



  document.getElementById("root")
); 

