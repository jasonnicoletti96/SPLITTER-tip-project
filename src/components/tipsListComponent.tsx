import React, { useState,Fragment } from 'react';
import Tip from './tip';
import "./tip.css"

interface TipsListComponentProps {
    list: number[];
    changeTip: (tip:number) => void;
    changeLook: (tip:string) => void;
    currentTip: number;
}

const TipsListComponent = ({list, currentTip,changeTip,changeLook}:TipsListComponentProps) => {
    const [customTip, setCustomTip] = useState<string>();

    const onClick = (tip:number) => {
  
        {changeTip(tip)}
        
    }

    const removeDiv = () => {
        document.querySelector(".custom")?.classList.add("hidden");
    }

    const inputTip = (tip:string) => {
        setCustomTip(tip);
        changeLook(tip);
    }
    if(customTip === undefined || customTip === "" || isNaN(parseInt(customTip))){
        document.querySelector(".custom")?.classList.remove("hidden");
    }

    return (
        <Fragment>
            {
                 list.map((tip:number) => {
                return <div key={Math.random()} className="w-[32%]  mb-2 h-10">
                    <Tip currentTip={currentTip} pourcent={tip} onClick={(tip)=>onClick(tip)} />
                </div>
            })
            }
            <div className="input relative w-[32%]"  onClick={()=>removeDiv()}>
            <div className="custom absolute top-0 left-0 w-full h-10 rounded-lg flex items-center justify-center bg-[hsl(180,22%,90%)] cursor-pointer "> CUSTOM </div>
                <input type="number"  className="w-full rounded-lg outline-none bg-[hsl(180,22%,90%)] text-right p-2  h-10  cursor-pointer border-2 border-transparent focus:border-[hsl(172,67%,45%)]" value={customTip} onChange={(e)=>inputTip(e.target.value)}/>
            </div>
            
        </Fragment>
    )
}



export default TipsListComponent;