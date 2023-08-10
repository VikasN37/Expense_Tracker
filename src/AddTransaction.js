import { useState } from "react";

const initial={
    amount:0,category:''
}


function AddTransaction({addItem}) 
{
const[newItem ,setNewItem]=useState(initial);

     function handleChange(e)
     {
         
          setNewItem({...newItem ,[e.target.name]:e.target.value})
     }

     
     function handleSumbit(e)
     {
          e.preventDefault();
         
          addItem(newItem);
          setNewItem(initial)
     }

     return(
          <>
               <h3>Add new transaction</h3>
               <form>
                    <div className="form-control">
                         <label htmlFor="text">Text</label>
                         <input type="text" name="category"  placeholder="Enter text..." onChange={handleChange} value={newItem.category}/>
                    </div>
                    <div className="form-control">
                         <label htmlFor="amount"
                         >Amount <br />
                              (negative - expense, positive - income)</label
                         >
                         <input type="number" name="amount" placeholder="Enter amount..." onChange={handleChange} value={newItem.amount} />
                    </div>
                    <button className="btn" onClick={handleSumbit}>Add transaction</button>
               </form>
          </>
     )
}


export default AddTransaction;