import { Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";
import usePagination from "@talons/usePagination";

/**
 * @parent pages/index.js
 *
 * @param {String} name The name of the book searched by the user and this value is retrived from the query params
 *
 * @param {String} filter The filter that is applied by the end user and this filter must have a value that is supported by the google books API
 *
 * @returns The pagination UI
 */
const Pagination = ({ name, filter }) => {
  const { active, next, prev } = usePagination({ name, filter });

  return (
    <div className="flex items-center gap-8">
      <button
        aria-label="prev-page-button"
        size="sm"
        variant="outlined"
        color="blue-gray"
        onClick={prev}
        disabled={active === 1}
      >
        <svg
          id="Layer_1"
          version="1.1"
          viewBox="0 0 500 500"
          height={"30px"}
          width={"30px"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="249.9"
            cy="250.4"
            r="204.7"
            stroke="#000000"
          />
          <circle
            cx="249.9"
            cy="250.4"
            fill="#FFFFFF"
            r="181.8"
            stroke="#000000"
            strokeMiterlimit="10"
          />
          <polyline
            fill="none"
            points="  289.7,317.4 198,249 198,249 198,249 198,249 289.6,180.5 "
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="22"
          />
        </svg>
      </button>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-blue-gray-900">{active}</strong> of{" "}
        <strong className="text-blue-gray-900">10</strong>
      </Typography>
      <button
        aria-label="next-page-button"
        size="sm"
        variant="outlined"
        color="blue-gray"
        onClick={next}
        disabled={active === 10}
      >
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          height={"25px"}
          width={"25px"}
        >
          <title />
          <g data-name="Layer 2" id="Layer_2">
            <path d="M1,16A15,15,0,1,1,16,31,15,15,0,0,1,1,16Zm28,0A13,13,0,1,0,16,29,13,13,0,0,0,29,16Z" />
            <path d="M12.13,21.59,17.71,16l-5.58-5.59a1,1,0,0,1,0-1.41h0a1,1,0,0,1,1.41,0l6.36,6.36a.91.91,0,0,1,0,1.28L13.54,23a1,1,0,0,1-1.41,0h0A1,1,0,0,1,12.13,21.59Z" />
          </g>
        </svg>
      </button>
    </div>
  );
};

Pagination.proptypes = {
  props: PropTypes.shape({
    name: PropTypes.string,
    filter: PropTypes.string,
  }),
};

export default Pagination;
