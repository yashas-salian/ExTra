import { useNavigate } from "react-router-dom"

export const AddButton=()=>{
    const navigate = useNavigate()
    return <div className="pt-1">
        <button type="button" className="text-white bg-cyan-500 rounded-full hover:bg-cyan-600 font-medium  text-sm pl-4 pr-4 pt-3  pb-3 text-center inline-flex items-center " onClick={()=>{
            navigate("/addExpense")
        }}>
            +
        </button>
    </div>
}