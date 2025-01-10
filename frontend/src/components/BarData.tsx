import { useExpense } from "@/hooks";
export const Bardata=()=>{
    const{expense}=useExpense() 
    return{
    labels:["Food", "Rent" , "Travel","Study","Other"],
    datasets:[{
        label:"Expenses",
        data:[expense?.food ?? 0,expense?.rent ?? 0,expense?.travel ?? 0,expense?.study ?? 0,expense?.other ?? 0],
        backgroundColor: ["rgba(6, 182, 212,1)", "rgba(6, 182, 212,1)", "rgba(6, 182, 212,1)", "rgba(6, 182, 212,1)", "rgba(6, 182, 212,1)"],
        // borderColor: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 1)"],
        borderWidth: 1,
    }]}
}