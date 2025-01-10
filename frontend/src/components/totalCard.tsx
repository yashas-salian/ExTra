import { useExpense } from '../hooks';
export const TotalCard=()=>{
    const{expense}=useExpense()
    return <div className='mt-10 pl-20 w-full max-w-md flex flex-cols gap-4'>
                <div className=" pl-20 pr-20 ml-5 block max-w-s p-6 bg-stone-800 border border-stone-600 rounded-lg shadow hover:bg-stone-900">
                    <p className="font-normal text-gray-300 text-lg">
                           Total: {expense?.total ?? 0}
                    </p>
                </div>
            </div>
}