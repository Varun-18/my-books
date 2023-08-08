import { useDispatch } from "react-redux";
import { removeBook } from "src/store/compareSlice";
import PropTypes from "prop-types";
import Image from "next/image";
import { toast } from "react-hot-toast";

/**
 *  This component is splitted because is is reused and also for better understanding
 *
 * @param {object} item  this is the object that contains the products data that has to be mapped in the row format
 *
 * @returns a Table row
 */
const Row = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">
        <Image
          src={item?.volumeInfo?.imageLinks?.thumbnail}
          height={45}
          width={45}
          alt="raw-img"
          className="mx-auto"
        />
      </td>
      <td className="px-6 py-4">{item?.volumeInfo?.title}</td>
      <td className="px-6 py-4">
        {item.volumeInfo.authors[0] ? item.volumeInfo.authors[0] : "NA"}
      </td>
      <td className="px-6 py-4">
        {item.volumeInfo.publishedDate
          ? new Date(item.volumeInfo.publishedDate).toLocaleDateString()
          : "NA"}
      </td>
      <td className="px-6 py-4">
        {item.volumeInfo.pageCount ? item.volumeInfo.pageCount : "NA"}
      </td>
      <td className="px-6 py-4">
        {item.saleInfo.retailPrice ? item.saleInfo.retailPrice.amount : "NA"}
      </td>
      <td className="px-6 py-4">
        {item.volumeInfo.averageRating ? item.volumeInfo.averageRating : "NA"}
      </td>
      <td className="px-6 py-4">
        <button
        aria-label="remove-item-button"
          className="border-2 p-1.5 rounded shadow-sm"
          onClick={() => {
            dispatch(removeBook(item.id));
            toast.success("Book removed", { duration: 1000 });
          }}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

Row.proptyoes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    volumeInfo: PropTypes.shape({
      authors: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string,
      publishedDate: PropTypes.string,
      averageRating: PropTypes.number,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string,
      }),
    }).isRequired,
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number,
      }),
    }).isRequired,
  }),
};

export default Row;
