import useSearch from "@talons/useSearch";
import { useForm } from "react-hook-form";

/**
 * @parent components/Header
 *
 * This component handles the searching of the books
 *
 * As it is an user interactive component we have splited it
 * as per the next guidelines the each and every interactive components must be seprate
 *
 * @returns sets the url search params of the searched book
 */
const Search = () => {
  const { onSubmit } = useSearch();
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex  justify-end mx-auto"
    >
      <input
        type={"text"}
        {...register("search")}
        className="sm:p-1 px-2 border rounded-l rounded-r-none shadow-lg flex-1 sm:max-w-[400px] max-w-full"
        placeholder="search"
      />
      <button
        aria-label="search-button"
        type="submit"
        className="bg-black text-white rounded-r p-2 text-sm shadow-lg "
      >
        <svg
          enableBackground="new 0 0 32 32"
          id="Glyph"
          version="1.1"
          viewBox="0 0 32 32"
          height={"20px"}
          width={"20px"}
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
            id="XMLID_223_"
          />
        </svg>
      </button>
    </form>
  );
};

export default Search;
