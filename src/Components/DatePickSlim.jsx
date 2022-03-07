import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import subDays from "date-fns/subDays";

import React, { useState } from "react";

const DatePick = ({ DateOut }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  //   DateOut(start, end);
  // };

  const onChange = (date) => {
    setStartDate(date);
  };

  return (
    <>
      {/* <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        excludeDates={[
          addDays(new Date(), -1),
          addDays(new Date(), -2),
          addDays(new Date(), 2),
        ]}
        selectsRange
        selectsDisabledDaysInRange
        inline
        disabledKeyboardNavigation
      /> */}

      <DatePicker
        selected={startDate}
        onChange={onChange}
        highlightDates={[
          subDays(startDate, 1),
          subDays(startDate, 2),
          addDays(startDate, 1),
        ]}
        excludeDates={[
          addDays(startDate, -4),
          addDays(startDate, -3),
          addDays(new Date(), 5),
        ]}
      />
    </>
  );
};

export default DatePick;
