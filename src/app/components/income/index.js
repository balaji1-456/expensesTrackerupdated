import React, { useEffect,useState,useContext } from "react"
import { Value,InputData } from "../../styled-components"
import { GlobalContext } from './../context/globalState';
const Income=()=>{

    const [data,setData]=useState([])
    const context=useContext(GlobalContext)
    const {id}=context.transactions
    useEffect(()=>{
        console.log(JSON.parse(localStorage.getItem("transactions")))
        let incomedata=JSON.parse(localStorage.getItem("transactions"))
        console.log(incomedata,"incomedata")

        setData(incomedata.filter(i=>i.type==="income"))
      
  
        
    },[id])

   
  const deleteHandler=(item)=>{
      let testing=data.filter(d=>d.id!==item.id)
      setData(testing)
    
      if(localStorage.getItem("transactions"))
      {
      let transactions=JSON.parse(localStorage.getItem("transactions"))
     
      localStorage.setItem("transactions",JSON.stringify(transactions.filter(i=>i.id!==item.id)))
      console.log(transactions)
      }

      

  }
    return(<div>
          <Value style={{color:"green"}}>Income (+)</Value>
          <div>
              {data.map(item=> <div key={item} style={containerStyle}>
                <InputData>{item.date.date}.{item.date.month}.{item.date.year}</InputData>
                <InputData>{item.description}</InputData>
                <InputData>${item.amount}</InputData>
                <InputData><button onClick={()=>deleteHandler(item)}><i className="fas fa-trash-alt" style={{color:"red",cursor:"pointer"}}></i>
               </button></InputData>
                
              </div>)}
           
         
              
          </div>
    </div>)
}
const containerStyle={
    display:"flex",
    justifyContent:"space-between",
    width:"300px",
    borderBottom:"1px solid gray",
    color:"white"
}
export default Income