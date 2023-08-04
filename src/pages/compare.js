import { useQuery } from "@apollo/client";
import Row from "@components/Row";
import { useSelector } from "react-redux";
import { GET_BOOKS_BY_ID } from "src/graphql/query";

/**
 * The main purpose of this components is to fetch the producst that are addedby the user to compare and to show a table of the products
 *
 * @returns Table that show the products that are added  for comparision by the end user
 */
const Compare = () => {
  const { compare } = useSelector((state) => state.compareReducer);
  const { data, loading, error } = useQuery(GET_BOOKS_BY_ID, {
    variables: {
      ids: compare,
    },
  });

  if (loading) {
    return <div>Loading....!!!!!</div>;
  }
  return (
    <>
      {data.bookById.length === 0 ? (
        <div className="text-2xl font-semibold uppercase text-center p-8">
          No books added for comparision
        </div>
      ) : (
        <div>
          <div className="text-center p-5">
            <span className="text-2xl font-semibold uppercase text-center">
              Comparision Table
            </span>
          </div>
          <div class="relative overflow-x-auto max-w-[1300px] mx-auto border-2 rounded shadow-sm p-2">
            <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Image
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Book name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Author
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Published Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Page Count
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Rating
                  </th>
                  <th scope="col" class="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {data.bookById.map((item) => {
                  return <Row item={item} key={item.id} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Compare;
