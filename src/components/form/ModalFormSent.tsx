import React, { FC } from "react";
type Props = {
  registered: boolean;
};
const FormSent: FC<Props> = ({ registered }) => {
  return (
    <div
      className={`w-[80%] sm:w-[60%] md:w-[40%] absolute flex flex-col items-center ${
        registered ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <p className="font-medium text-center text-[1.2rem] sm:text-[1.3rem] lg:text-[1.4rem] text-bondiBlue-50">
        ¡Genial tengo tu mensaje!
      </p>
      <p className="font-medium text-center text-[1.2rem] sm:text-[1.3rem] lg:text-[1.4rem] text-bondiBlue-40">
        Le responderé con la mayor brevedad posible, en general, en un lapso de
        tiempo inferior a 24 horas.
      </p>
      <span className="loader mt-[4rem]"></span>

    </div>
  );
};

export default FormSent;
