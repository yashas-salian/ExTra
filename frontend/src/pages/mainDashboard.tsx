import { Spinner } from "@/components/spinner"
import { BudgetCard } from "../components/moneyCard"
import { Navbar } from "../components/navBar"
import { Spendcard } from "../components/spendCard"
import { useExpense } from '../hooks'
import { DashboardCard } from "@/components/dashboardCard"
import { BarGraph } from "@/components/chart"
import { useState } from 'react';
import axios from 'axios'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { BACKEND_URL } from '@/config';
import { CalendarComponent } from "@/components/calenderComponent"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"


  interface data {
    "food"?: string;
    "rent"?: string;
    "travel"?: string
    "study"?: string
    "other"?: string
    "total"?: string
  }
export const Maindashboard = () => {
    const [expenses, setExpenses] = useState<data>({
        'food': '0',
        'travel': '0',
        'rent': '0',
        'study': '0',
        'other': '0',
      });

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
            <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 px-6">
                <div className="">
                    <BudgetCard label="Users" amount={100} />
                </div>
                <div className="">
                    <BudgetCard label="Budget" amount={expense?.budget ?? 0} total={expense?.budget?? 0}/>
                </div>
                <div className="">
                    <BudgetCard label="Spent" amount={expense?.total ?? 0} total={expense?.budget?? 0}/>
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
                <Dialog>
                <DialogTrigger>{mmddyyyy}</DialogTrigger>
                <DialogContent className="bg-black text-cyan-500">
                  <DialogHeader>
                    <CalendarComponent/>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </div>
            <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 px-6">
                <div className="">
                    <BudgetCard label="Users" amount={100} />
                </div>
                <div className="">
                    <BudgetCard label="Budget" amount={expense?.budget ?? 0} total={expense?.budget?? 0}/>
                </div>
                <div className="">
                    <BudgetCard label="Spent" amount={expense?.total ?? 0} total={expense?.budget?? 0}/>
                </div>
                <div className="">
                    <BudgetCard label="Balance" amount={(expense?.balance) ?? 0} total={expense?.budget?? 0}/>
                </div>
            </div>
            <div className="  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6 flex gap-24 pb-4">
                <div className="pt-10">
                    <BarGraph />
                </div>
                <div className="pt-10">
                    <Spendcard />
                    <div className="pl-2 mt-4 flex justify-center">
                <Drawer >
                      <DrawerTrigger  className="pr-2 pl-2 pt-1 w-11/12 h-10 font-bold flex justify-center bg-cyan-500 border border-cyan-500 rounded-full transition-all duration-200 hover:bg-cyan-600 hover:scale-105">Add expense</DrawerTrigger>
                            <DrawerContent className="bg-stone-900">
                                  <DrawerHeader>
                                        <DrawerTitle className="flex justify-center font-bold text-2xl text-cyan-500">Welcome to ExTra – Where managing your expenses becomes effortless!</DrawerTitle>
                                        {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
                                  </DrawerHeader>
                                  <DrawerFooter>
                                    <div className='flex justify-center pt-4 gap-4'>
                                    <label className="block mb-2 text-lg font-medium text-white">Food</label>
                                    <input
                                          type="text"
                                          className="bg-stone-700 text-white border border-stone-600 text-green-900 p-2 w-1/3  rounded-lg"
                                          onChange={(e)=>{
                                            setExpenses(c=>({
                                              ...c,
                                              food: e.target.value
                                            }))
                                          }}/>
                                        </div>
                                        <div className='flex justify-center pt-4 gap-4'>
                                    <label className="block mb-2 text-lg font-medium text-white">Rent</label>
                                    <input
                                          type="text"
                                          className="bg-stone-700 text-white border border-stone-600 text-green-900 p-2 w-1/3 rounded-lg"
                                          onChange={(e)=>{
                                            setExpenses(c=>({
                                              ...c,
                                              rent: e.target.value
                                            }))
                                          }}/>
                                          </div>
                                          <div className='flex justify-center pt-4 gap-4'>
                                    <label className="block mb-2 text-lg font-medium text-white">Travel</label>
                                    <input
                                          type="text"
                                          className="bg-stone-700 text-white border border-stone-600 text-green-900 p-2 w-1/3 rounded-lg"
                                          onChange={(e)=>{
                                            setExpenses(c=>({
                                              ...c,
                                              travel: e.target.value
                                            }))
                                          }}/>
                                          </div>
                                          <div className='flex justify-center pt-4 gap-4'>
                                    <label className="block mb-2 text-lg font-medium text-white">Study</label>
                                    <input
                                          type="text"
                                          className="bg-stone-700  text-white border border-stone-600 text-green-900 p-2 w-1/3 rounded-lg"
                                          onChange={(e)=>{
                                            setExpenses(c=>({
                                              ...c,
                                              study: e.target.value
                                            }))
                                          }}/>
                                          </div>
                                          <div className='flex justify-center pt-4 gap-4'>
                                    <label className="block mb-2 text-lg font-medium text-white">Other</label>
                                    <input
                                          type="text"
                                          className="bg-stone-700 text-white border border-stone-600 text-green-900 p-2 w-1/3 rounded-lg"
                                          onChange={(e)=>{
                                            setExpenses(c=>({
                                              ...c,
                                              other: e.target.value
                                            }))
                                          }}/>
                                      </div>
                                    <button className="text-cyan-500 pt-2" onClick={async ()=>{
                                      const response = await axios.post(`${BACKEND_URL}/api/v1/expenses/updateExpense`,{
                                        food:Number(expenses?.food ?? 0),
                                        travel:Number(expenses?.travel ?? 0),
                                        rent:Number(expenses?.rent ?? 0),
                                        study:Number(expenses?.study ?? 0),
                                        other:Number(expenses?.other ?? 0),
                                      },
                                      {
                                        headers:
                                        {
                                            Authorization: localStorage.getItem("token")
                                        }
                                    })
                                    if (response.data.id){
                                        window.location.reload()
                                    }
                                    }}>Submit</button>
                                      <DrawerClose>
                                        <button className="text-cyan-500 pt-2">Cancel</button>
                                      </DrawerClose>
                                  </DrawerFooter>
                      </DrawerContent>
            </Drawer>
                </div>
                </div>
                
            </div>
        </div>
    }


}
