import { includes } from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook, removeBook } from "src/store/compareSlice";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import Image from "next/image";

/**
 * @parent components/BookLisiting
 *
 * This is a single card component that is mapped from the BookListing component
 *
 * @param {Object} item  This is and object that represents the data of each single book that is represented over here and the types for it are defined below
 *
 * @dispatch addBook : It add the book Id to the state that is persisted in the localStorage
 *
 * @dispatch removeBook : It removes the book Id from the state that is persisted in the localStorage
 *
 * @returns the html for each indivitual book card
 */
const BookCard = ({ item, index }) => {
  const { compare } = useSelector((state) => state.compareReducer);
  const dispatch = useDispatch();

  return (
    <div key={item.id} className="p-4 md:w-1/2 lg:w-1/3 ">
      <div className="relative h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
        <div
          className="w-fit absolute  font-bold px-1 bg-blue-700 text-white text-sm right-0 top-0 z-40"
          style={{
            background:
              item?.saleInfo?.saleability === "NOT_FOR_SALE"
                ? "#990f02"
                : "green",
          }}
        >
          {item?.saleInfo?.saleability === "FOR_SALE"
            ? "FOR SALE"
            : "NOT FOR SALE"}
        </div>
        <div className="  w-full flex justify-center">
          <Image
            width={"130%"}
            height={"auto"} // 16:10 aspect ratio
            objectFit="cover"
            src={
              item?.volumeInfo?.imageLinks?.thumbnail
                ? item?.volumeInfo?.imageLinks?.thumbnail
                : "https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-image-vector-illustration-isolated-png-image_4979075.jpg"
            }
            alt="Can't get the image"
          />
        </div>
        <div className="p-6">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {item?.volumeInfo?.title.length > 20
              ? item?.volumeInfo?.title.slice(0, 20) + "..."
              : item?.volumeInfo?.title}
          </h1>
          <p
            className="leading-relaxed mb-3"
            dangerouslySetInnerHTML={{
              __html:
                item?.volumeInfo?.description?.length >= 150
                  ? item?.volumeInfo?.description.slice(0, 120) + "..."
                  : null,
            }}
          />
          <div className="flex items-center flex-wrap ">
            <button
              aria-label="comapre-button"
              className="bg-white p-2 rounded shadow-sm border"
              onClick={
                includes(compare, item.id)
                  ? () => {
                      dispatch(removeBook(item.id));
                      toast.success("Book removed..!!", { duration: 1000 });
                    }
                  : () => {
                      dispatch(addBook(item.id));
                      toast.success("Book added..!!", { duration: 1000 });
                    }
              }
            >
              <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                {includes(compare, item.id) ? "remove from compare" : "compare"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

BookCard.proptypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    volumeInfo: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
    }).isRequired,
    saleInfo: PropTypes.shape({
      saleability: PropTypes.oneOf(["FOR_SALE", "NOT_FOR_SALE"]),
    }).isRequired,
  }),
};

export default BookCard;
