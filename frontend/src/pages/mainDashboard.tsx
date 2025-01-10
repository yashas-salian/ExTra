import { Spinner } from "@/components/spinner"
import { BudgetCard } from "../components/moneyCard"
import { Navbar } from "../components/navBar"
import { Spendcard } from "../components/spendCard"
import { useExpense } from '../hooks'
import { DashboardCard } from "@/components/dashboardCard"
import { BarGraph } from "@/components/chart"
export const Maindashboard = () => {

    const date = new Date().toISOString().slice(0, 10)
    const [year, month, day] = date.split("-")
    const mmddyyyy = `${month}-${day}-${year}`
    const { error, isLoading,expense } = useExpense()


    if (isLoading) {
        return <div className="bg-stone-900 min-h-screen w-full w-max-md">
            <div className="flex justify-center items-center h-screen">
                <Spinner/>
            </div>
        </div>
    }

    else if (error) {
        return <div className="bg-stone-900 min-h-screen w-full w-max-md">
            <div>
                <Navbar />
            </div>
            <div className="pl-24 absolute top-20 text-3xl font-bold text-white">
                Dashboard
            </div>
            <div className="absolute top-20 right-24 w-fit p-2 border border-gray-500 rounded font-bold text-white transition-all duration-200 hover:text-cyan-500 hover:border-cyan-600 hover:translate-x-1">
                {mmddyyyy}
            </div>
            <div className="pt-20 flex justify-evenly ">
                <div className="">
                    <BudgetCard label="Users" amount={100} />
                </div>
                <div className="">
                    <BudgetCard label="Budget" amount={expense?.budget ?? 0} total={expense?.budget?? 0}/>
                </div>
                <div className="">
                    <BudgetCard label="Spent" amount={expense?.spent ?? 0} total={expense?.budget?? 0}/>
                </div>
                <div className="">
                    <BudgetCard label="Balance" amount={expense?.balance ?? 0} total={expense?.budget?? 0}/>
                </div>
            </div>
            <div className="flex justify-center pt-16">
                <DashboardCard />
            </div>
        </div>
    } else {
        return <div className="bg-stone-900 min-h-screen w-full w-max-md">
            <div>
                <Navbar />
            </div>
            <div className="pl-24 absolute top-20 text-3xl font-bold text-white">
                Dashboard
            </div>
            <div className="absolute top-20 right-24 w-fit p-2 border border-gray-500 rounded font-bold text-white transition-all duration-200 hover:text-cyan-500 hover:border-cyan-600 hover:translate-x-1">
                {mmddyyyy}
            </div>
            <div className="pt-20 flex justify-evenly ">
                <div className="">
                    <BudgetCard label="Users" amount={100} />
                </div>
                <div className="">
                    <BudgetCard label="Budget" amount={expense?.budget ?? 0} total={expense?.budget?? 0}/>
                </div>
                <div className="">
                    <BudgetCard label="Spent" amount={expense?.spent ?? 0} total={expense?.budget?? 0}/>
                </div>
                <div className="">
                    <BudgetCard label="Balance" amount={expense?.balance ?? 0} total={expense?.budget?? 0}/>
                </div>
            </div>
            <div className="flex gap-24">
                <div className="w-2/4 pt-16 pl-24 mb-10">
                    <BarGraph />
                </div>
                <div className="w-2/5 pt-16 mb-10">
                    <Spendcard />
                </div>
            </div>
        </div>
    }


}
