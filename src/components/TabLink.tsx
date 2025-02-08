'use client'
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
type Props = { url: string; title: string; srcImg: string; active: boolean };
const TabLink: FC<Props> = ({ url, title, active, srcImg }) => {
  const defaultTab = "group-hover/track:pl-1 transition-all duration-300 font-medium";
  const openTab = `${defaultTab} w-fit max-w-[350px] opacity-100`;
  const closeTab = `${defaultTab} w-[0px] opacity-0 `;
  return (
    <>
      <Link href={url} className="w-fit group/track flex items-center gap-1">
        <Image
          alt={title}
          src={srcImg}
          width={50}
          height={50}
          className="w-[25px] h-[25px] rounded-sm text-center"
        />

        <p className={active ? openTab : closeTab}>{title}</p>
      </Link>
    </>
  );
};

export default TabLink;
