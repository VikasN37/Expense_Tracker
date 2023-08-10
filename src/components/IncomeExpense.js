function IncomeExpense({listData})
{
  const array = listData.map((auto)=>auto.amount);
  let x = array.map((x)=>{
    return parseInt(x,10);
  })


  const positive = x.filter((auto)=>auto>0);
  const income =positive.reduce((acc,a)=>acc+a,0); 

  const negative = x.filter((auto)=>auto<0);
  const expense =negative.reduce((acc,a)=>acc+a,0); 


     return(

          <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p  className="money plus">+${income}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p className="money minus">-${Math.abs(expense)}</p>
          </div>
        </div>
     )
}

export default IncomeExpense;