import { useRouter } from "next/router";

/**
 *  This is the talon that contains all the business logic related to searching and sorting and filtering
 *
 * @useRouter : The default nextjs router
 * 1) The replace method is used to replace the existing url with new query parameters in this code while keeping the old parameter(constrains) intact
 *
 * @returns Sets the url query parameter based on the searched keyword
 */
const useSearch = () => {
  const router = useRouter();

  /**
   * @param {*} search  input form the searchbar (String)
   * @returns sets the search query
   */
  const onSubmit = async ({ search }) => {
    router.replace({ query: { ...router.query, search } });
  };

  return {
    onSubmit,
  };
};

export default useSearch;
