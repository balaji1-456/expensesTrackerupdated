import React, { useState,useContext} from "react"
import { Button } from "../../styled-components"

import { GlobalContext } from './../context/globalState';

const Add=()=>{
    const [description,setDescription]=useState("")
    const [amount,setAmount]=useState(0)
  
    const {setActive}=useContext(GlobalContext)
    
    const handleTransaction=(type)=>{


        if(!description) alert("Description is required")
        else if(!amount) alert("Value is required")

        else{ let id=0
            if(localStorage.getItem("transactions"))
            {
            const length=JSON.parse(localStorage.getItem("transactions")).length;
            id=length;
            }
            const newTransaction={

                description,amount,date:getCurrentTime(),type,id
            }
            
            if(localStorage.getItem("transactions"))
            {
            let transactions=JSON.parse(localStorage.getItem("transactions"))
            transactions=[...transactions,newTransaction]
            localStorage.setItem("transactions",JSON.stringify(transactions))
            console.log(transactions)
            }
            else localStorage.setItem("transactions",JSON.stringify([newTransaction]))
            setActive(newTransaction)
            
        }

      

    }
  
    return (<div style={containerStyle}>
       
        <input 
            type="text" 
            placeholder="Add description"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
         />

        <input 
            type="number" 
            placeholder="Value"
            onChange={(e)=>setAmount(e.target.value)}
            value={amount}
        />
            <Button 
                theme={{main:"blue"}}
                style={{width:"150px"}}
                onClick={()=>handleTransaction("income")}
                value={"Refresh"}>  
            Add Income
            </Button>
            <Button 
                theme={{main:"blue"}}
                style={{width:"150px"}}
                onClick={()=>handleTransaction("expense")}
                value={"Refresh"}>    
            Add Expense
            </Button>

    </div>)
}

const containerStyle={
    position:"absolute",
    top:"21em",
    width:"1540px",
    display:"flex",
    justifyContent:"center",
    alignItems:"space-between",
    borderBottom:"2px solid gray",
    backgroundColor:"#f54269",
    left:"0"
}

const getCurrentTime=()=>{
    const instance=new Date()
    const date=instance.getDate()
    const month=instance.getMonth()
    const year=instance.getFullYear()
    const time=instance.getTime()
    return {
        date,month,year,time
    }
}


export default Add