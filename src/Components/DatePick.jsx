import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, format, subDays } from "date-fns";
import Moment from "react-moment";

const DatePick = ({ upDate, startDate }) => {
  const onChange = (date) => {
    upDate(date);

    console.log(date);
    console.log(format(new Date("2022-03-04T00:00:00"), "MM-dd-yyyy"));
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        highlightDates={[
          subDays(startDate, 1),
          subDays(startDate, 2),
          addDays(startDate, 1),
        ]}
        excludeDates={[
          // addDays(startDate, -4),
          addDays(startDate, 6),
          addDays(new Date(), 5),
          new Date("2022-03-25T00:00:00"),
        ]}
        inline
        // dateFormat="MM-DD-YYYY"
        minDate={new Date()}
        maxDate={addDays(new Date(), 21)}
      />
    </>
  );
};

export default DatePick;
