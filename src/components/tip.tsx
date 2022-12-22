import { useState } from "react";
import "./tip.css";
interface TipProps {
    pourcent: number;
    onClick: (tip:number) => void;
    currentTip: number;
}

const Tip = ({pourcent, currentTip, onClick}:TipProps) => {
 
    const clickBut =(pourcent:number, e:React.MouseEvent<HTMLButtonElement>) => {
        document.querySelectorAll("button").forEach((button) => {
            if(button.classList.contains("active")){
                button.classList.remove("active");
            }
        });
        onClick(pourcent);
    }
    if(pourcent === currentTip){
        return <button className={"w-full p-2 rounded-lg bg-[hsl(183,100%,15%)] transition-all duration-300 active"}   onClick={(e)=>clickBut(pourcent,e)}>{pourcent}%</button>
    }
   return <button className={"w-full p-2 rounded-lg bg-[hsl(183,100%,15%)] transition-all duration-300"}   onClick={(e)=>clickBut(pourcent,e)}>{pourcent}%</button>

}

export default Tip;