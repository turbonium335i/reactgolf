import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, format, subDays } from "date-fns";
import { useEffect, useState } from "react";

const DatePick = ({ upDate, startDate, items, currentItem }) => {
  const [exDate, setExDate] = useState([]);

  // console.log(startDate);
  const onChange = (date) => {
    upDate(date);

    // console.log(date);
    // console.log(format(new Date("2022-03-04T00:00:00"), "MM-dd-yyyy"));
  };

  useEffect(() => {
    var blockDates = [];
    var block = [];

    for (let i = 0; i < items.length; i++) {
      if (items[i].id == currentItem) {
        if (typeof items[i]["rsvJson"] === "string") {
          var b = items[i]["rsvJson"].replace(/'/g, '"');
          var c = JSON.parse(b);
          blockDates = c["outDates"];
        }
      }
    }

    for (let d = 0; d < blockDates.length; d++) {
      // console.log(blockDates[d] + "T00:00:00");
      block.push(
        new Date(
          blockDates[d].slice(-4) +
            "-" +
            blockDates[d].slice(0, 2) +
            "-" +
            blockDates[d].slice(3, 5) +
            "T00:00:00"
        )
      );
    }
    setExDate(block);
    // console.log(exDate);
  }, []);

  // console.log(new Date("2022-03-30T00:00:00"));

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
        // excludeDates={
        //   [
        //   // add exclude days from item here
        //   // addDays(startDate, -4),
        //   // addDays(startDate, 7),
        //   // addDays(startDate, 8),
        //   // addDays(new Date(), 5),
        //   // new Date("2022-03-25T00:00:00"),
        // ]}

        // excludeDates={[new Date("2022-03-30T00:00:00")]}
        excludeDates={exDate}
        inline
        // dateFormat="MM-DD-YYYY"
        minDate={new Date()}
        maxDate={addDays(new Date(), 21)}
      />
    </>
  );
};

export default DatePick;
