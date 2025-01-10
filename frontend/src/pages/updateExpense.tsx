import { InputBox } from "../components/inputBoxes"

export const UpdateExpense=()=>{
    return <div className=" pt-20 bg-stone-900 min-h-screen">
        <div className="flex justify-center pb-2 font-extrabold text-3xl text-cyan-600">
            Add your new expenses
        </div>
        <div>
        <InputBox/>
        </div>
    </div>
}