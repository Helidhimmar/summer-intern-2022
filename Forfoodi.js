import React, { useState } from "react";
import "./style.css";
import Menu from "./menuapi.js";
import MenuCard from "./menucard";

const Forfoodi=()=>{
    const [menuData,setMenuData]=useState(Menu);
    const filter=(category)=>{
    const updatedlist=Menu.filter((curElem)=>{
    return curElem.category===category;
     })
     setMenuData(updatedlist);
    }
    return(
        <>
     <nav className="navbar">
        <div className="btn-group">

       <button className="btn-group-item" 
       onClick={()=>filter("Breakfast")}>Breakfast</button>
       <button className="btn-group-item"
       onClick={()=>filter("lunch")}>lunch</button>
       <button className="btn-group-item"
       onClick={()=>filter("Evening")}>Evening</button>
       <button className="btn-group-item"
       onClick={()=>filter("Dinner")}>Dinner</button>
       <button className="btn-group-item"
       onClick={()=>setMenuData(Menu)}>All</button>
        </div>

     </nav>

        <MenuCard menuData={menuData}/>
        </>
    )
}
export default Forfoodi;