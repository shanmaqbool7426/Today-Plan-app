import React, { Component } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Plan from './plan'


class App extends Component {
  state={
    items:[],
    text:"",
    placehold:"write here today plan"
  }
  hanlechange=e=>{
    this.setState({
      text:e.target.value
    })
    console.log("changed")
  }
  handleAdd = e => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  }
  

  updatehandler=(id)=>{

const itemsold=[...this.state.items];
 const a=itemsold.filter((element,i)=>{
   return i===id
 })
console.log(a);
console.log("next",this.state.text=a);
this.setState({
  text:a
})
const newupdate=itemsold.filter((element,i)=>{
 return i!==id;
})
this.setState({items:newupdate})

console.log(this.state.text)


  }
  DeleteHandler=(id)=>{
const itemsold=[...this.state.items];
const newitems=itemsold.filter((element,i)=>{
  return i!==id;
})
this.setState({items:newitems})
console.log(itemsold);
console.log(newitems);
  }
  Searchhandler=(e)=>
  {
    const olditems=[...this.state.items]
  let serachtxt=e.target.value
  let indexofitemsearched = olditems.indexOf(serachtxt);
  const serched=olditems.filter((element,i)=>{
    return i===indexofitemsearched
  })
  //  
  console.log(serched)
console.log("this.state.items hi",this.state.items) 
  }
 
   
  render(){
  return (
    <div className="continer-fluid my-5">
     <div className="row">
         <div className="col-sm-9 text-white mx-auto shadow-lg p-3">
           <h1 className="text-center "> Today's plan</h1>
            <div className="row">
             <div className="col-9">
               <input type="text" className="form-control" value={this.state.text} placeholder={this.state.placehold} onChange={this.hanlechange}></input>
             </div>
             <div className="col-3">
               <div className="btn btn-warning px-4 font-weight-bold" onClick={this.handleAdd}>
                 Add
               </div>
               
             
            </div>
             <div className="container-fluid  ">
               <ul className="list-unstyled  m-4">
                {this.state.items.map((value,i)=>{
                  return <Plan value={value}
                  key={i}
                  id={i}
                  updatehandler={this.updatehandler}
                  DeleteHandler={this.DeleteHandler}/>
                })}
                
               </ul>
             </div>
           </div>
          </div>
       </div>
    </div>
  )
}
}
export default App
