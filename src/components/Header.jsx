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
  const [show, setShow] = useState();
  const router = useRouter();

  const applyFilter = (filter) => {
    router.push({
      query: {
        search: router.query.search ? router.query.search : "life",
        pageID: 10,
        filter,
      },
    });
    setShow(false);
  };

  const clearFilter = () => {
    router.push({
      query: {
        search: router.query.search ? router.query.search : "life",
        pageID: 10,
      },
    });
    setShow(false);
  };

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
        <div className="sm:order-3 order-2">
          <div className="relative ">
            <button
              className=" border-2  rounded-md p-2 right-0 top-1"
              onClick={() => setShow(!show)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000"
              >
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M20 5h-1.17a3.001 3.001 0 0 0-5.66 0H4a1 1 0 0 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2zm-4 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM3 12a1 1 0 0 1 1-1h1.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-9.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 0 1-1-1zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-4 4a1 1 0 1 0 0 2h9.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-1.17a3.001 3.001 0 0 0-5.66 0H4zm13 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {show ? (
              <ul className=" absolute z-10 bg-white rounded-lg right-0  border-2 px-2  ">
                <li
                  className="w-[100px] py-2 text-center cursor-pointer"
                  onClick={() => applyFilter("paid-ebooks")}
                  value={"paid-ebooks"}
                >
                  paid ebooks
                </li>
                <hr />
                <li
                  className="w-[100px] py-2 text-center cursor-pointer"
                  onClick={() => applyFilter("free-ebooks")}
                  value={"free-ebooks"}
                >
                  free ebooks
                </li>
                <hr />
                <li
                  className="w-[100px] py-2 text-center cursor-pointer"
                  onClick={() => clearFilter()}
                >
                  clear filter
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
