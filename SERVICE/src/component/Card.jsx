import React,{ useState ,useEffect} from 'react'
import './Card.css'

function Card({}) {
    const [data,setdata]=useState([])
    async function fetchdata() {
        await fetch('https://fakestoreapi.com/products?limit=8')
       
        .then(res => res.json())
        .then(dataa => setdata(dataa))

        
    }
    useEffect(()=>{
        fetchdata();

    },[])

    console.log(data);

    return(
        <>
        {
            data.map((info)=>(
            <div id='main-product'>
                <div key={info.id} >
                <img src={info.image} alt="" />
                <h3 >{info.title}</h3>
                <h2 >{info.price}</h2>
                <h4>{info.category}</h4>
                <button className='bttn'>BUYING OPTION </button>
            </div>
            </div>
            )
                

            ) 
        }
        
        </>
    )
       
    

}export default Card