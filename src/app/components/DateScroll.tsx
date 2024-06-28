"use client";
import React, { useEffect, useState } from "react";
import getCurrentDate from "./CurrentDate";

type DateScrollProps = {
  imageDesign: number;
  setImageDesign: React.Dispatch<React.SetStateAction<number>>;
  handleDateSelect: () => void;
};

export default function DateScroll(props: DateScrollProps) {
  const { imageDesign, setImageDesign, handleDateSelect } = props;

  // The current date object
  const currentDate = getCurrentDate();

  // This state will store the current month's number of days
  const [daysOfMonth, setDaysOfMonth] = useState(currentDate.daysInMonth);

  // And this array will create individual "days" that can be used for mapping
  const daysArray = [];

  // Here we use a loop to populate our days array with the amount of days
  // that daysOfMonth contains
  for (let i = 0; i < daysOfMonth; i++) {
    daysArray.push(i + 1);
  }

  // Styles for selected and plain display dates
  const [selectedStyle, setSelectedStyle] = useState({
    selectedDiv:
      "cursor-pointer select-none flex justify-center items-center bg-[#A7D9F4] w-[1px] h-[1px] p-[1.15%] rounded-full",
    selectedtext: "inter-1 text-white text-[1.1rem]",
    plainDiv:
      "cursor-pointer select-none flex justify-center items-center bg-transparent w-[1px] h-[1px] p-[1.15%] rounded-full",
    plainText: "inter-1 text-[#A7D9F4] text-[1.1rem]",
  });

  // The current date
  const [selectedDate, setSelectedDate] = useState(currentDate.date);

  // useEffect to perform some kind of action whenever a date is clicked on
  useEffect(() => {
    // We'll want to put the logic for switching the image design in here.
    // solution #1 that I'm thinking of involves making the main page a client
    // component, then creating states that can be prop drilled into other
    // components. One such state could be the one responsible for choosing
    // which image design to show. If we go this route, you'll need to refactor your
    // imageDesign component accordingly...
    //
    if (imageDesign === 1) {
      setImageDesign(2);
    } else if (imageDesign === 2) {
      setImageDesign(1);
    }
  }, [selectedDate]);

  // In the return we check to see if the currently selected date matches with the date
  // that the user clicks on. If so, we change the styles of the div and text of the
  // selected date accordingly
  return (
    <>
      <div className="flex gap-5 z-[-1]">
        {daysArray.map((day, dayIndex) => (
          <div
            onClick={() => {
              setSelectedDate(day);
              handleDateSelect();
            }}
            className={`${
              selectedDate === day
                ? selectedStyle.selectedDiv
                : selectedStyle.plainDiv
            }`}
            key={dayIndex}
          >
            <p
              className={`${
                selectedDate === day
                  ? selectedStyle.selectedtext
                  : selectedStyle.plainText
              }`}
              id={day.toString()}
            >
              {`${day}`}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
