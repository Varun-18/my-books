import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

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
  const [active, setActive] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (active * 10 !== parseInt(router.query.pageID)) {
      if (!router.query.pageID) {
        setActive(1);
      } else {
        setActive(parseInt(router.query.pageID) / 10);
      }
    }
  }, [router.query]);

  const next = () => {
    if (active === 10) return;

    if (filter) {
      router.push({
        query: { search: name, pageID: (active + 1) * 10, filter },
      });
    } else {
      router.push({ query: { search: name, pageID: (active + 1) * 10 } });
    }
    setActive(active + 1);
  };

  const prev = () => {
    if (active - 1 > 0) {
      if (filter) {
        router.push({
          query: { search: name, pageID: (active - 1) * 10, filter },
        });
      } else {
        router.push({ query: { search: name, pageID: (active - 1) * 10 } });
      }
      setActive(active - 1);
    } else {
      if (filter) {
        router.push({ query: { search: name, pageID: 1, filter } });
      } else {
        router.push({ query: { search: name, pageID: 1 } });
      }
      if (active === 1) return;
    }
  };

  return (
    <div className="flex items-center gap-8">
      <button
        size="sm"
        variant="outlined"
        color="blue-gray"
        onClick={prev}
        disabled={active === 1}
      >
        <svg
          //   enableBackground="new 0 0 500 500"
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
            // stroke-miterlimit="10"
          />
          <circle
            cx="249.9"
            cy="250.4"
            fill="#FFFFFF"
            r="181.8"
            stroke="#000000"
            stroke-miterlimit="10"
          />
          <polyline
            fill="none"
            points="  289.7,317.4 198,249 198,249 198,249 198,249 289.6,180.5 "
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="22"
          />
        </svg>
      </button>
      <Typography color="gray" className="font-normal">
        Page <strong className="text-blue-gray-900">{active}</strong> of{" "}
        <strong className="text-blue-gray-900">10</strong>
      </Typography>
      <button
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
}

Pagination.proptypes = {
  props: PropTypes.shape({
    name: PropTypes.string,
    filter: PropTypes.string,
  }),
};

export default Pagination;
