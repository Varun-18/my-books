import { useRouter } from "next/router";
import PropTypes from "prop-types";

/**
 *  This component  recives the data in the form of array of objects and then maps them
 * 
 * @param  books : Array of objects that contains the multiple books data that are mapped
 * 
 * @returns A Book Lisiting Block
 */
const BookListing = ({ books }) => {
  const router = useRouter();
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {books.map((item) => (
            <div key={item.id} className="p-4 md:w-1/2 lg:w-1/3 ">
              <div className="relative h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
                <div
                  className="w-fit absolute  font-bold px-1 bg-blue-700 text-white text-sm right-0 top-0"
                  style={{
                    background:
                      item?.saleInfo?.saleability === "NOT_FOR_SALE"
                        ? "red"
                        : "green",
                  }}
                >
                  {item?.saleInfo?.saleability === "FOR_SALE"
                    ? "FOR SALE"
                    : "NOT FOR SALE"}
                </div>
                <img
                  className="lg:h-[225px] md:h-[175px] sm:h-[auto] w-auto sm:w-[150px]  object-cover object-center mx-auto"
                  src={
                    item?.volumeInfo?.imageLinks?.thumbnail
                      ? item?.volumeInfo?.imageLinks?.thumbnail
                      : "https://png.pngtree.com/png-clipart/20190925/original/pngtree-no-image-vector-illustration-isolated-png-image_4979075.jpg"
                  }
                  alt="Can't get the image"
                />
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
                      className="bg-white p-2 rounded shadow-sm border"
                      onClick={() => console.log("button clicked")}
                    >
                      <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Compare
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
