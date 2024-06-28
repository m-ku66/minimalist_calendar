"use client";
import React, { useState, useEffect } from "react";
import getCurrentDate from "./components/CurrentDate";
import DateScroll from "./components/DateScroll";
import ImageDesign from "./components/ImageDesign";
import generateRandomQuote from "./components/RandomQuotes";
import styles from "./styles/style.js";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const [quote, setQuote] = useState("");
  const [imageDesign, setimageDesign] = useState(1);
  const [resetSignal, setResetSignal] = useState(false); // State for reset signal

  // Function to handle date selection
  const handleDateSelect = () => {
    // Set the reset signal to true to trigger reset in ImageDesign component
    setResetSignal(true);

    // Reset the signal after a short delay to allow for animation reset
    setTimeout(() => {
      setResetSignal(false);
    }, 100);
  };

  // Set up an effect to update the current date every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Generate random quote on client side to prevent hydration errors upon initial
  // generation of random quote
  useEffect(() => {
    const randomQuote = generateRandomQuote();
    if (randomQuote !== null) {
      setQuote(randomQuote);
    }
  }, [resetSignal]);

  return (
    <>
      <div className="hidden lg:flex">
        <div className="flex flex-col gap-0 px-8 pt-2 container max-w-full h-screen bg-transparent">
          <div className="select-none flex flex-col bg-transparent">
            <h1
              className={`appear text-[#A7D9F4] mb-[1%] ${styles.lightTheme.text.big.small_light}`}
            >
              Minimalist Calendar
            </h1>
            <h2
              className={`appear6 text-[#4088DC] leading-[1] ${styles.lightTheme.text.title.small}`}
            >
              {currentDate.dayOfWeek}
            </h2>
          </div>

          <div className="flex flex-col gap-1">
            <div className="appear6 flex justify-end bg-transparent">
              <h1 className="select-none text-[#A7D9F4] inter-1 text-[1.5rem]">
                {`${currentDate.hour}:${
                  currentDate.minute < 10
                    ? "0" + currentDate.minute
                    : currentDate.minute
                }`}
              </h1>
            </div>

            <div className="appear3 relative flex w-full h-[55vh] bg-transparent justify-end items-end">
              <div className="appearLate absolute z-[10] flex bg-transparent">
                <p
                  className={
                    resetSignal
                      ? "hidden"
                      : "appearLate select-none quote text-[7rem] leading-[1.3]"
                  }
                >
                  {quote}
                </p>
              </div>
              <ImageDesign
                imageDesign={imageDesign}
                resetSignal={resetSignal}
              />
            </div>

            <div className="appearLate relative flex items-center w-full h-fit overflow-x-hidden bg-transparent mb-[0.5%] mt-[0.5%] pr-[10%]">
              <div className="dateScroll w-full h-fit overflow-x-scroll">
                <div className="w-full h-full flex justify-end">
                  <div
                    className="absolute w-[1%] h-full z-[1] bg-transparent"
                    style={{
                      background:
                        "linear-gradient(0.25turn, rgba(255,255,255,0), rgba(255,255,255,1))",
                    }}
                  ></div>
                </div>
                <DateScroll
                  imageDesign={imageDesign}
                  setImageDesign={setimageDesign}
                  handleDateSelect={handleDateSelect}
                />
              </div>
            </div>

            <div className="appear4 flex w-full h-fit gap-5 bg-transparent justify-between mb-[1.5%]">
              <p
                className={`fadeLate w-[60%] text-[#A7D9F4] ${styles.lightTheme.text.body.body_colored}`}
              >
                Minimalist Calendar is a design and programming project created
                in order to test how far I can push my play with type and my
                ability to transform visual designs into interactive experiences
              </p>

              <div className="flex justify-end w-[50%] h-fit bg-transparent">
                <h1
                  className={`appearLate select-none text-[#4088DC] leading-[1] ${styles.lightTheme.text.title.xSmall}`}
                >
                  {`${currentDate.month} ${currentDate.year}`}
                </h1>
              </div>
            </div>

            <div className="appearLate flex">
              <img
                className="w-[15%]"
                src="/copyright.png"
                alt="Created by Marc Miango"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * TO DOs:
 * 2. Add more image designs(MUST)
 * 3. Mobile display(MUST)
 * 4. Set up JP language compatibility, time-based color change(optional)
 *
 * Don't forget that we can shelf this project and come back to work on it later too!
 * If it's taking too much time e.g isn't done by the end of today(1 & 2), then just
 * get on to completing the next stage of your learning!
 */
