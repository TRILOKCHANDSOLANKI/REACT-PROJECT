import { useEffect, useState } from "react";
import './Slidder.css'



function Slidder(){

const [num,setNum] = useState(0)
    const picture= [
      
      
      
      "https://images.squarespace-cdn.com/content/v1/53f3382de4b01ae9c440142e/1697136212841-T3Q33AM74TNIB126POKJ/consult-+brand+kick-start.png?format=1000w",

     "https://saralifestyle.com/_next/image?url=https%3A%2F%2Fprod.saralifestyle.com%2FImages%2FContent%2Fdeb53aa96a8749fdad565cea3472bc7c.jpeg&w=3840&q=75",
     "https://imgscf.slidemembers.com/docs/1/1/284/men_s_style_fashion_presentation_powerpoint_templates_design_283903.jpg",
     "https://newcdn.kalkifashion.com/media/wysiwyg/2-slider-12-08-24.jpg?w=1440"
    ]

    const Increment = () => {
    
        if (num === 3) {
          setNum(0);
        } else {
          setNum(num + 1);
        }
      };


      const Decrement = () => {
        if (num === 3) {
          setNum(0);
        } else {
          setNum(num - 1);
        }
      };

      useEffect(()=>{
        let interwel = setInterval(()=>{
            Increment()
       

    },2000)

    return()=>clearInterval(interwel)
    
      },[num]
    )
  
return(
    <>

    <div className="slider">
    <img className="img1" src ={picture[num]}  />
    {/* <button onClick={Increment} id="btt1">next</button>
   <button onClick={Decrement} id="btt2">pre</button> */}
    </div>
   
    </>
)




}export default Slidder