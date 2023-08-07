import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Search from "./Search";

/**
 * @parent pages/_app.js
 *
 * @description This component simply is a part of the layout
 *
 * @returns The ui for the header component
 */
const Header = () => {
  

  return (
    <div className="bg-[whitesmoke] shadow-lg">
      <div className="max-w-[1400px] flex sm:flex-row flex-col gap-2 p-3 items-center justify-between mx-auto">
        <div className="flex w-full sm:justify-normal justify-between items-center gap-3 order-1">
          <div className="flex items-center gap-3 px-3 text-[#444]">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
            </svg>
            <Link href={"/"}>
              <span className="uppercase text-lg font-bold cursor-pointer">
                Books
              </span>
            </Link>
          </div>
          <div className="text-[#777] uppercase">
            <ul>
              <li>
                <Link href={"/compare"}>compare</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" w-full order-2">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
