import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { GET_BOOKS_BY_ID } from "src/graphql/query";

/**
 * This component returns the state and the gql data for the compare page
 *
 * @compare contains the array of ids of the books which the user wants to compare
 *
 * @returns The talon for compare comoponent
 */
const useCompare = () => {
  const router = useRouter();

  const { compare } = useSelector((state) => state.compareReducer);

  const { data, loading, error } = useQuery(GET_BOOKS_BY_ID, {
    variables: {
      ids: compare,
    },
  });
  return {
    router,
    compare,
    data,
    loading,
    error,
  };
};

export default useCompare;
