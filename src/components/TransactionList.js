import List from "./List.js"


function TransactionList({deleteItem,listData})
{
     return(
          <>
           <h3>History</h3>
          {
               listData.map(auto=><List category={auto.category} amount={auto.amount} id={auto.id}
               key={auto.id} deleteItem={deleteItem}></List>)
          }
          </>
     )
}

export default TransactionList;