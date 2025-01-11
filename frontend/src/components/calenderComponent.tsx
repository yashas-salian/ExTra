import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

export const CalendarComponent = ({ events }: any) => {
  const localizer = momentLocalizer(moment);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleOpen = () => setIsCalendarOpen(true);
  const handleClose = () => setIsCalendarOpen(false);

  return (
    <>
      <button onClick={handleOpen} className='text-lg cursor-pointer'>
        📅 Open Calendar
      </button>

      {isCalendarOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center'>
          <div className=' bg-black p-2 border rounded-lg w-4/5 max-w-4xl shadow'>
            <button onClick={handleClose} className='bg-black border-0 cursor-pointer float-right text-sm'>
              ❌
            </button>

            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 ,backgroundColor: '#000', color: '#0ff'}}
            //   className='h-5/6 bg-stone-900 text-cyan-500'
            />
          </div>
        </div>
      )}
    </>
  );
};
