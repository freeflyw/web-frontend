import React, { useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import "./slider.css"
function Slider({ data }) {
  
  const [title,setTitle]=useState("PPM AND PPC")
  const [flag,setFlag]=useState(true)
  const [x,setX]=useState([0,1,2,3,4,5,6,7,8])
  const mar=[-280,-210,-140,-70,0,70,140,210,280]
  const zind=[6,7,8,9,10,9,8,7,6]
  const width=[56,67,78,89,100,89,78,67,56]
  let slide=document.getElementsByClassName("img-slide")
  
  const leftshift=()=>{
    
    
    for(let i=0;i<9;i++){
      
      if(x[i]==0){
        x[i]=8
      }
      else{
        x[i]-=1
      }
      slide[i].style.zIndex=`${zind[x[i]]}`
      slide[i].style.transform=`translate(${mar[x[i]]}%,0)`
      slide[i].style.width=`${width[x[i]]}%`
      slide[i].style.transition="transform 1s ease-in-out,width 1s ease-in-out, zIndex 5s ease-in-out"
    }
    setTitle(data[8-x[4]].title)
    console.log(data[8-x[4]].title,x)
    setFlag(!flag)
  }
  const rightshift=()=>{
    for(let i=0;i<9;i++){
      if(x[i]==8){
        x[i]=0
      }
      else{
        x[i]+=1
      }
      slide[i].style.zIndex=`${zind[x[i]]}`
      slide[i].style.transform=`translate(${mar[x[i]]}%,0)`
      slide[i].style.width=`${width[x[i]]}%`
      slide[i].style.transition="transform 1s ease-in-out,width 1s ease-in-out, zIndex 5s ease-in-out"
    }
    setTitle(data[8-x[4]].title)
    setFlag(!flag)
  }

  return (

    <div class="slider-container">
      <a class="slider" href='/signup'>
        {
          data.map((item)=>(         
            <div  className="img-slide " key={item.photos}>
            <img src={item.photos} alt=""/>
            </div>
            
            
          ))
        }
      </a>

      <div class="slider-controller">
        <button class="left" onClick={()=>leftshift()}><BsArrowLeft /></button>
        <div class="nav-btm-text">{title}</div>
        <button class="right" onClick={()=>rightshift()}><BsArrowRight /></button>
      </div>
    </div>



  )
}

export default Slider