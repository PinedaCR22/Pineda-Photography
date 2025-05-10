import React, { useState, useEffect } from 'react';
import DatePicker, {
  registerLocale,
  ReactDatePickerCustomHeaderProps
} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

// Registrar locale española para que arranque en lunes
registerLocale('es', es);

export interface CalendarProps {
  selectedDate: Date | null;
  onDateConfirm: (date: Date | null) => void;
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateConfirm
}) => {
  const [tempDate, setTempDate] = useState<Date | null>(selectedDate);

  useEffect(() => {
    setTempDate(selectedDate);
  }, [selectedDate]);

  return (
    <div className="w-full">
      <DatePicker
        inline
        locale="es"
        selected={tempDate}
        onChange={date => setTempDate(date)}
        minDate={new Date()}                
        calendarClassName="bg-white border border-gray-200 rounded-lg shadow-lg w-full p-3"
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth
        }: ReactDatePickerCustomHeaderProps) => (
          <div className="flex items-center justify-between mb-2 px-1">
            <button onClick={decreaseMonth} type="button" className="p-1 hover:bg-gray-100 rounded">
              <FaChevronLeft className="text-gray-800" />
            </button>
            <span className="text-base font-semibold text-gray-900 uppercase">
              {format(date, 'MMMM yyyy', { locale: es })}
            </span>
            <button onClick={increaseMonth} type="button" className="p-1 hover:bg-gray-100 rounded">
              <FaChevronRight className="text-gray-800" />
            </button>
          </div>
        )}
        weekDayClassName={() =>
          'w-8 text-xs font-semibold text-gray-600 uppercase text-center'
        }
        dayClassName={date => {
          const isSelected =
            tempDate && date.toDateString() === tempDate.toDateString();
          return `
            w-8 h-8 flex items-center justify-center m-0.5 rounded transition
            ${isSelected ? 'bg-yellow-600 text-white' : 'hover:bg-yellow-100'}
          `;
        }}
      />

      <div className="flex justify-end space-x-3 mt-3">
        <button
          onClick={() => {
            setTempDate(null);
            onDateConfirm(null);
          }}
          className="px-3 py-1 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition"
        >
          Cancelar
        </button>
        <button onClick={() => tempDate && onDateConfirm(tempDate)}
   className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition" >  Seleccionar</button>
      </div>
    </div>
  );
};
