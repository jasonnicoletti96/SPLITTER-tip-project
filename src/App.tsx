import React, { useState,useEffect } from 'react';
import InputComponent from './components/inputComponent';
import image from './images/logo.svg';
import dollar from './images/icon-dollar.svg';
import person from './images/icon-person.svg';
import './index.css';
import TipsListComponent from './components/tipsListComponent';
import TotalComponent from './components/totalComponent';

function App() {

  const [bill, setBill] = React.useState('0');
  const [people, setPeople] = React.useState('1');

  const tips = [5,10,15,25,50]
  const [tip, setTip] = useState<number>(5);
  const [totalAmount, setTotalAmount] = useState<number>(0.00);
  const [total, setTotal] = useState<number>(0.00);

  useEffect(() => {
   
    let tot = parseInt(bill)/parseInt(people);
    let reduc = tot*(tip/100);
    setTotalAmount(reduc);
    tot = tot + reduc;
    setTotal(tot);
   
  }, [bill, people, tip]);
  useEffect(() => {
    if(isNaN(total)||isNaN(totalAmount)){
      setTotal(0.00);
      setTotalAmount(0.00);
    }
  }, [total, totalAmount]);


  const changeTip = (value:number) => {
 
    setTip(value);

  }

  const resetAll = () => {
    setBill('0');
    setPeople('1');
    setTip(0);
    setTotalAmount(0.00);
    setTotal(0.00);
  }

  const changeLook = (value:string) => {
      if(value.length > 0){
        setTip(parseInt(value));
      }else{
        setTip(0);
      }
  }
  
  return (
    <div className="App w-full h-screen flex items-center justify-center">
      <header className="App-header absolute top-20">
        <img src={image} alt="logo" />
      </header>
      <div className="calculator w-[60%] bg-white rounded-xl flex justify-between p-10 h-[450px]">
        <div className="left-calculator flex flex-col justify-between w-1/2">
            <InputComponent label="bill" type="number" name="bill" value={parseInt(bill)} onChange={(e)=>setBill(e.target.value)} img={dollar} />
          <div className="select-tip flex flex-col  w-full">
            <label>Select tip %</label>
            <div className="tips-ctn flex flex-wrap justify-between">
              <TipsListComponent list={tips} changeTip={changeTip} currentTip={tip}  changeLook={changeLook} />
            </div>
            
          </div>
            <InputComponent label="number of people" type="number" name="people" value={parseInt(people)} onChange={(e)=>setPeople(e.target.value)} img={person} />
  
        </div>
        <div className="right-calculator bg-[hsl(183,100%,15%)] w-[45%] rounded-xl flex flex-col justify-between items-center p-4">
          <div className="totalTip flex flex-col w-full">
              <TotalComponent typeTip="Tip Amount" total={totalAmount}/>
              <TotalComponent typeTip="Total" total={total}/>
          </div>
          <button className='w-full p-2 bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)] rounded-xl' onClick={()=>resetAll()}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
