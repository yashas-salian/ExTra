import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useState } from 'react';
import { BACKEND_URL } from '@/config';

interface data {
  "budget"?: string;
}

export const DashboardCard=()=>{
  const [budget, setBudget] = useState<data>({
    "budget":"0"
  });
  const navigate = useNavigate()
    return <div className="relative flex flex-col my-6 bg-stone-800 shadow-sm border border-slate-200 rounded-lg w-2/5 transition-all duration-200 hover:border-cyan-600 hover:scale-105" >
              <div className="p-10">
                <h5 className="mb-2 text-white text-2xl font-bold">
                  Go ahead and add your expenses
                </h5>
                <p className="text-white leading-normal font-light">
                  Digitalize all your expense here using ExTra
                </p>
                <div className='flex justify-center'>
              <Drawer >
                      <DrawerTrigger  className="  mt-2 p-2 w-1/3 flex justify-center bg-cyan-500 border border-cyan-500 rounded-xl transition-all duration-200 hover:bg-cyan-600 hover:scale-105">+ Add</DrawerTrigger>
                            <DrawerContent className="bg-stone-900">
                                  <DrawerHeader>
                                        <DrawerTitle className="flex justify-center font-bold text-2xl text-white">Welcome to ExTra – Add your budget</DrawerTitle>
                                        {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
                                  </DrawerHeader>
                                  <DrawerFooter>
                                    <label className='flex justify-center text-xl font-medium text-white'>Budget</label >
                                    <div className='flex justify-center pt-2 gap-4'>
                                    <label className="block mb-2 text-lg font-medium text-white pt-1">&#8377;</label>
                                    <input
                                          type="text"
                                          className="bg-stone-700 border border-stone-600 text-green-900 p-2 w-1/3  rounded-lg"
                                          onChange={(e)=>{
                                            setBudget(c=>({
                                              ...c,
                                              budget: e.target.value
                                            }))
                                          }}/>
                                        </div>
                                    
                                    <button className="text-cyan-500 pt-2" onClick={async ()=>{
                                      const response = await axios.post(`${BACKEND_URL}/api/v1/expenses/addExpense`,{
                                        budget:Number(budget?.budget ?? 0)
                                      },
                                      {headers: {
                                        Authorization: localStorage.getItem("token")
                                    }
                                })
                                      if(response.data.id){
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
}