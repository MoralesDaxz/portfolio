"use client";
import React from "react";
import { useControlDisplay } from "@/context/ControlDisplay";
import { RxDoubleArrowUp } from "react-icons/rx";
const ToTop = () => {
  const { windowScroll, windowWidth } = useControlDisplay();
  return (
    <>
      {windowScroll > 500 && windowWidth < 640 ? (
        <div
          onClick={() =>
            window.scrollTo({
              top: 0,
            })
          }
          className="fixed bottom-2 right-2 z-30 opacity-60 flex flex-col"
        >
          <RxDoubleArrowUp size={"1.5rem"} title="Top" />
          <p>Top</p>
        </div>
      ) : null}
    </>
  );
};

export default ToTop;
