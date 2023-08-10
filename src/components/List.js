


function List({ category, amount ,deleteItem,id})
 {
    
     return (
          <>
          
          
               <ul className="list">
                    <li className={amount>0 ? "plus" :"minus"}>
                         {category} <span> ${amount}</span>
                         <button className="delete-btn" onClick={()=>deleteItem(id)}>x</button>
                    </li>
               </ul>
               
          </>

     )
}

export default List;