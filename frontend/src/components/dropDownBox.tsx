export const Dropdown=()=>{
    return (
        <>
            <button id="dropdownOffsetButton" data-dropdown-toggle="dropdownDistance" data-dropdown-offset-distance="35" data-dropdown-offset-skidding="0" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Choose Category 
                <svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
            </button>
            <div id="dropdownDistance" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Food</div>
                    </li>
                    <li>
                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rent</div>
                    </li>
                    <li>
                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Study</div>
                    </li>
                    <li>
                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Travel</div>
                    </li>
                    <li>
                        <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Other</div>
                    </li>
                </ul>
            </div>
        </>
    );
    
}