import { useRouter } from "next/router";
import PropTypes from "prop-types";
import BookCard from "./BookCard";
import Filter from "./Filter";

/**
 *  @parent : pages/index.js
 *
 *  This component  recives the data in the form of array of objects and then maps them
 *
 * @param  books : Array of objects that contains the multiple books data that are mapped
 *
 * @returns A Book Lisiting Block
 */
const BookListing = ({ books }) => {
  return (
    <div>
      <div className="text-right px-3 max-w-[1400px] pt-4">
        <Filter />
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-3 pb-5 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {books.map((item,index) => (
              <BookCard item={item} index={index} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

BookListing.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
};

export default BookListing;
