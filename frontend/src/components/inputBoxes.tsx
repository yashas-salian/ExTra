import axios from 'axios'
import { BACKEND_URL } from '../config';
import { data } from 'react-router-dom';
import {  useState } from 'react';
interface data {
  "food"?: string;
  "rent"?: string;
  "travel"?: string
  "study"?: string
  "other"?: string
}
export const InputBox = () => {
  const [expense, setExpense] = useState<data>({
    'food': '0',
    'travel': '0',
    'rent': '0',
    'study': '0',
    'other': '0',
  });

    return (
      <div>
      <div className="max-w-xl mx-auto p-6 bg-stone-800 border border-stone-600 rounded-lg shadow-md hover:bg-stone-900">
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-white">Food</label>
          <input
            type="text"
            className="bg-stone-400 border border-stone-600 text-green-900 p-2 w-full rounded-lg"
            onChange={(e)=>{
              setExpense(c=>({
                ...c,
                food: e.target.value
              }))
            }}/>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-white">Rent</label>
          <input
            type="text"
            className="bg-stone-400 border border-stone-600 text-green-900 p-2 w-full rounded-lg"
            onChange={(e)=>{
              setExpense(c=>({
                ...c,
                rent: e.target.value
              }))
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-white">Travel</label>
          <input
            type="text"
            className="bg-stone-400 border border-stone-600 text-green-900 p-2 w-full rounded-lg"
            onChange={(e)=>{
              setExpense(c=>({
                ...c,
                travel: e.target.value
              }))
            }}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-lg font-medium text-white">Study</label>
          <input
            type="text"
            className="bg-stone-400 border border-stone-600 text-green-900 p-2 w-full rounded-lg"
            onChange={(e)=>{
              setExpense(c=>({
                ...c,
                study: e.target.value
              }))
            }}
          />
        </div>
        <div>
          <label className="block mb-2 text-lg font-medium text-white">Other</label>
          <input
            type="text"
            className="bg-stone-400 border border-stone-600 text-green-900 p-2 w-full rounded-lg"
            onChange={(e)=>{
              setExpense(c=>({
                ...c,
                other: e.target.value
              }))
            }}
          />
        </div>
      </div>
      <div className="pt-3 flex justify-center">
        <button type="button" className="text-white bg-cyan-600 hover:bg-cyan-700 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center me-2 mb-2" onClick={()=>{
            axios.post(`${BACKEND_URL}/api/v1/expenses/updateExpense`,{
              food:Number(expense?.food ?? 0),
              travel:Number(expense?.travel ?? 0),
              rent:Number(expense?.rent ?? 0),
              study:Number(expense?.study ?? 0),
              other:Number(expense?.other ?? 0),
            }
           ,
            {headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        }}>
    <svg aria-hidden="true" className=" pl-6 w-20 h-6 me-2 -ms-1" viewBox="0 0 128 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z" fill="white"/></svg>
      Add expenses
    </button>
      </div>
      </div>
    );
  };
  