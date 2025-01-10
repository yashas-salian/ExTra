
export const BudgetCard=({label,amount,total}:any)=>{
    return <div className="bg-stone-800 justify-center border border-gray-700 block max-w-lg w-80 h-28 bg-none rounded-lg shadow transition-all duration-200 hover:bg-stone-900 hover:border-cyan-300 hover:shadow-cyan-400 hover:-translate-y-1 cursor-pointer">
                <p className="pt-6 text-center font-normal text-white text-2xl font-extrabold  transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                    {label}
                </p>
                {label === "Users" ? (
                    <h5 className="text-center text-gray-300">
                    {amount}
                    </h5>
                ):<h5 className="text-center text-gray-300">
                &#8377;{amount}
                </h5>}
                
                {label === "Spent" && (
        <div className="text-center text-gray-400">
          {(amount / total) * 100 || 0} % Spent
        </div>
      )}
      {label === "Balance" && (
        <div className="text-center text-gray-400">
          {(amount / total) * 100 || 0} % remaining
        </div>
      )}
      {label === "Users" && (
        <div className="text-center text-gray-400">
          Active users
        </div>
      )}
            </div>
            
    
}

