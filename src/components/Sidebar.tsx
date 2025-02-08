"use client";

import React, { FC, useState } from "react";
import TabLink from "./TabLink";
import { infoTab } from "../utils/examples";
type Props = {
  children: React.ReactNode;
};
const SideBar: FC<Props> = ({ children }) => {
  const [active, isActive] = useState(false);
  const defaultSide =
    "min-h-screen bg-[#383737] transition-all duration-500 ease-out p-2";
  const openSide = `${defaultSide} w-[300px] max-w-[350px]`;
  const closeSide = `${defaultSide} w-[50px]`;

  return (
    <section className="w-full min-h-[350px] bg-[#383737] text-white flex justify-between">
      <section
        className={active ? openSide : closeSide}
        onMouseEnter={() => isActive(true)}
        onMouseLeave={() => isActive(false)}
      >
        <section className="flex flex-col gap-3 pt-10">
          {infoTab.map((tab, i) => {
            return (
              <TabLink
                active={active}
                url={tab.url}
                title={tab.title}
                srcImg={tab.img}
                key={i}
              />
            );
          })}
        </section>
      </section>
      <section className="w-full min-h-full bg-[black] rounded-s-2xl">
        {children}
      </section>
    </section>
  );
};

export default SideBar;
