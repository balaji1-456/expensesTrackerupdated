import React,{useEffect,useState}from "react"
import { Title, Value, Button } from "../../styled-components"

const Header=()=>{
    const [balance,setBalance]=useState(0);
    const [income,setIncome]=useState(0);
    const [expenses,setExpenses]=useState(0)

    useEffect(()=>{
      
        const transactions=JSON.parse(localStorage.getItem("transactions"));
        console.log(transactions,"transatio")
//income total
        let incomeArray=transactions.filter(item=>item.type=="income")

        console.log(incomeArray,"incomear")
     console.log(incomeArray.map(item=>Number(item.amount)).reduce((a,b)=>a+b),"incometotal")
     let incomeTotal=incomeArray.map(item=>Number(item.amount)).reduce((a,b)=>a+b)

     //expenses total
     let expensesArray=transactions.filter(item=>item.type==="expense")

        console.log(expensesArray,"expensesarray")
       
        
            console.log(expensesArray.map(item=>Number(item.amount)).reduce((a,b)=>a+b),"expensestotal")
            let expensesTotal=expensesArray.map(item=>Number(item.amount)).reduce((a,b)=>a+b)
        
     
           
        setBalance(incomeTotal-expensesTotal)
        setIncome(incomeTotal)
        setExpenses(expensesTotal)
        
    },[])
    
    return(<div style={containerStyle}>

        <Title>Expense Tracker</Title>
    <Value>Available Balance : ${balance}</Value>
        <Button theme={{main:"green",border:"green"}}>Income</Button>
        <Value>+${income}</Value>

        <Button theme={{main:"red",border:"red"}}>Expenses</Button>
    <Value>-${expenses}</Value>
        

    </div>)
}

const containerStyle={
    background: "#0f0c29",  /* fallback for old browsers */
background: "-webkit-linear-gradient(to top, #0f0c29, #302b63, #24243e);",  /* Chrome 10-25, Safari 5.1-6" */
background: "linear-gradient(to top, #0f0c29, #302b63, #24243e)",
 /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
position:"absolute",
top:"0",
left:"0",
width:"100%",
height:"350px",
color:"white",
fontFamily:"sans-serif",
textAlign:'center'

}

export default Header