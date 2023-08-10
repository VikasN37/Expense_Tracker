

function Balance({listData})
{
  const array = listData.map((auto)=>auto.amount);
  let x = array.map((x)=>{
    return parseInt(x,10);
  })


  const sum = x.reduce((partialSum, a) => partialSum + a, 0);
  
     return(
     
          
    <div className="container">
      <h4>Your Balance</h4>
      <h1>${sum}</h1>
          </div>
     )
}

export default Balance;