"use client";
import { useControlDisplay } from "@/context/ControlDisplay";
import React from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
const ToTop = () => {
  const { windowScroll } = useControlDisplay();
  return (
    <>
      {windowScroll > 750 && 
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
            });
          }}
          className="fixed bottom-2 right-2 z-30 opacity-40 flex flex-col items-center text-xs cursor-pointer hover:opacity-95"
        >
          <RxDoubleArrowUp  title="Top" />
          <p>Top</p>
        </div>
     }
    </>
  );
};

export default ToTop;