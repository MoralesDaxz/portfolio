import { useControlDisplay } from "@/context/ControlDisplay";

export const Separation = () => {
  const { windowScroll } = useControlDisplay();
  if (windowScroll > 10) return;

  return (
    <>
      <div className="w-full relative mt-[6rem] transition-all duration-500">
        <div className="custom-shape-divider-bottom-1779098290 ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};
