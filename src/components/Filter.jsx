import { useRouter } from "next/router";
import React, { useState } from "react";

/**
 * This is component that applies the filter on the products that are fetch by the API
 *
 * @router This is used for setting the query parameters on the basis of which the products will be fetched
 *
 * @returns A filter component
 */
const Filter = () => {
  const [show, setShow] = useState(); // For toggle button
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
    <div className="sm:order-3 order-2">
      <div className="relative ">
        <button
          name="filter-button"
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
  );
};

export default Filter;
