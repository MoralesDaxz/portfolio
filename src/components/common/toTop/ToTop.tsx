"use client";
import { useControlDisplay } from "@/context/ControlDisplay";
import { RxDoubleArrowUp } from "react-icons/rx";
import { useScrollY } from "../../../../hooks/ControlDisplay/useScrollY";
const ToTop = () => {
  const windowScroll = useScrollY();

  return (
    <>
      {windowScroll > 750 && (
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
            });
          }}
          className="fixed bottom-2 right-2 z-30 opacity-40 flex flex-col items-center text-xs cursor-pointer hover:opacity-95"
        >
          <RxDoubleArrowUp title="Top" />
          <p>Top</p>
        </div>
      )}
    </>
  );
};

export default ToTop;
