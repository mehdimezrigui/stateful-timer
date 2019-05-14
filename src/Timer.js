import React from 'react'

export default function Timer({date, btns, btnr}) {
let h = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let m = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
let s = Math.floor((date % (1000 * 60)) / 1000);
if(h<10){h="0"+h}
if(m<10){m="0"+m}
if(s<10){s="0"+s}
  return (
      
      
        <div className="time" >
        <p><span id="hour">{h}</span>:<span id="minute">{m}</span>:<span id="second">{s}</span></p>
        <p><span className="text">Hour</span><span className="text">Minute</span><span className="text">Second</span></p>
        </div>
        
      
    
  )
}
