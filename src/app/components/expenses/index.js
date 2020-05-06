import React,{useState,useEffect, useContext}from "react"
import { Value,InputData } from "../../styled-components"


import { GlobalContext } from './../context/globalState';
const Expenses=()=>{
    const [data,setData]=useState([])
    const context=useContext(GlobalContext)

    console.log(context,"this from context")
    const {id}=context.transactions
    useEffect(()=>{
        let expensedata=JSON.parse(localStorage.getItem("transactions"))
        console.log(expensedata,"expensedata")
        setData(expensedata.filter(i=>i.type==="expense"))
   
    },[id])
  
    console.log(data,"this is to check data")
    const deleteHandler=(item)=>{
       
        console.log("this is for testing")
        console.log(item)
        console.log(data)
     let testing= data.filter(i=>i.id!==item.id)
       console.log(testing)
       setData(testing)
       if(localStorage.getItem("transactions"))
      {
      let transactions=JSON.parse(localStorage.getItem("transactions"))
     
      localStorage.setItem("transactions",JSON.stringify(transactions.filter(i=>i.id!==item.id)))
      console.log(transactions)
      }

       

        
    }
    return(<div>
          <Value style={{color:"red"}}>Expenses (-)</Value>
          <div>
              {data.map((item,index)=> <div key={item.date} style={containerStyle}>
                
                <InputData>{item.date.date}.{item.date.month}.{item.date.year}</InputData>
                <InputData>{item.description}</InputData>
                <InputData>${item.amount}</InputData>
               <InputData><button onClick={()=>deleteHandler(item)}><i className="fas fa-trash-alt" style={{color:"red",cursor:"pointer"}}></i>
               </button> 

                </InputData>
                
              </div>)}
           
         
              
          </div>
    </div>)
}

const containerStyle={
    display:"flex",
    justifyContent:"space-between",
    width:"300px",
    borderBottom:"1px solid gray"
    
}

export default Expenses