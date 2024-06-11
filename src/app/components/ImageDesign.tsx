"use client";
import { useState } from "react";

type ImageDesignProps = {
  imageDesign: number;
};

export default function ImageDesign(props: ImageDesignProps) {
  const { imageDesign } = props;

  // This state will store clip path patterns that'll be reused for
  // the different image designs
  const [clipPathPattern, setclipPathPattern] = useState({
    pattern1: [
      "inset(0% 90% 0% 0%)",
      "inset(0% 50% 0% 11%)",
      "inset(0% 47% 0% 51%)",
      "inset(0% 45% 0% 54%)",
      "inset(0% 23% 0% 56%)",
      "inset(0% 0% 0% 78%)",
    ],
    pattern2: [
      "inset(0% 86% 0% 0%)",
      "inset(0% 45% 0% 15%)",
      "inset(0% 0% 0% 56%)",
    ],
  });

  //state for transition hover effect duration
  // const [duration, setduration] = useState("5000ms"); // doesn't work for some reason...

  function renderDesign(designNum: number) {
    let renderedDesign;

    switch (designNum) {
      case 1:
        renderedDesign = (
          <div className="select-none flex relative w-full h-full">
            <div
              style={{ clipPath: clipPathPattern.pattern1[0] }}
              className={`fade1 absolute duration-[5000ms] z-[5] w-full h-full bg-[#4088DC]/[0.3] hover:bg-transparent`}
            ></div>
            <img
              style={{ clipPath: clipPathPattern.pattern1[0] }}
              className="fade1 absolute w-full h-full z-[1]"
              src={"/images/1.png"}
              alt="cover image"
            />
            {/* // */}
            <div
              style={{ clipPath: clipPathPattern.pattern1[1] }}
              className={`fade2 absolute duration-[5000ms] z-[5] w-full h-full bg-[#4088DC]/[0.3] hover:bg-transparent`}
            ></div>
            <img
              style={{ clipPath: clipPathPattern.pattern1[1] }}
              className="fade2 absolute w-full h-full z-[1]"
              src={"/images/1.png"}
              alt="cover image"
            />
            {/* // */}
            <div
              style={{ clipPath: clipPathPattern.pattern1[2] }}
              className={`fade3 absolute duration-[5000ms] z-[5] w-full h-full bg-[#4088DC]/[0.3] hover:bg-transparent`}
            ></div>
            <img
              style={{ clipPath: clipPathPattern.pattern1[2] }}
              className="fade3 absolute w-full h-full z-[1]"
              src={"/images/1.png"}
              alt="cover image"
            />
            {/* // */}
            <div
              style={{ clipPath: clipPathPattern.pattern1[3] }}
              className={`fade4 absolute duration-[5000ms] z-[5] w-full h-full bg-[#4088DC]/[0.3] hover:bg-transparent`}
            ></div>
            <img
              style={{ clipPath: clipPathPattern.pattern1[3] }}
              className="fade4 absolute w-full h-full z-[1]"
              src={"/images/1.png"}
              alt="cover image"
            />
            {/* // */}
            <div
              style={{ clipPath: clipPathPattern.pattern1[4] }}
              className={`fade5 absolute duration-[5000ms] z-[5] w-full h-full bg-[#4088DC]/[0.3] hover:bg-transparent`}
            ></div>
            <img
              style={{ clipPath: clipPathPattern.pattern1[4] }}
              className="fade5 absolute w-full h-full z-[1]"
              src={"/images/1.png"}
              alt="cover image"
            />
            {/* // */}
            <div
              style={{ clipPath: clipPathPattern.pattern1[5] }}
              className={`fade6 absolute duration-[5000ms] z-[5] w-full h-full bg-[#4088DC]/[0.3] hover:bg-transparent`}
            ></div>
            <img
              style={{ clipPath: clipPathPattern.pattern1[5] }}
              className="fade6 absolute w-full h-full z-[1]"
              src={"/images/1.png"}
              alt="cover image"
            />
          </div>
        );
        break;
      case 2:
        renderedDesign = (
          <div className="flex relative w-full h-full">
            <div
              style={{ clipPath: clipPathPattern.pattern2[0] }}
              className={`fade1 absolute duration-[5000ms] z-[5] w-full h-full bg-[#4088DC]/[0.3] hover:bg-transparent`}
            ></div>
            <img
              style={{ clipPath: clipPathPattern.pattern2[0] }}
              className="fade1 absolute w-full h-full z-[1]"
              src={"/images/2.png"}
              alt="cover image"
            />
            {/* // */}
            <div
              style={{ clipPath: clipPathPattern.pattern2[1] }}
              className={`fade2 absolute duration-[5000ms] z-[5] w-full h-full bg-[#4088DC]/[0.3] hover:bg-transparent`}
            ></div>
            <img
              style={{ clipPath: clipPathPattern.pattern2[1] }}
              className="fade2 absolute w-full h-full z-[1]"
              src={"/images/2.png"}
              alt="cover image"
            />
            {/* // */}
            <div
              style={{ clipPath: clipPathPattern.pattern2[2] }}
              className={`fade3 absolute duration-[5000ms] z-[5] w-full h-full bg-[#4088DC]/[0.3] hover:bg-transparent`}
            ></div>
            <img
              style={{ clipPath: clipPathPattern.pattern2[2] }}
              className="fade3 absolute w-full h-full z-[1]"
              src={"/images/2.png"}
              alt="cover image"
            />
          </div>
        );
        break;
    }

    return renderedDesign;
  }

  return <>{renderDesign(imageDesign)}</>;
}
