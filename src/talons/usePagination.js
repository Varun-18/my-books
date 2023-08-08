import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * This is a custom hook for the pagination component
 *
 * @param {String} name The name of the book searched by the user and this value is retrived from the query params
 *
 * @param {String} filter The filter that is applied by the end user and this filter must have a value that is supported by the google books API
 *
 * @returns the active, next and prev for the pagination
 */
const usePagination = ({ name, filter }) => {
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
  }, [router.query, active]);

  const next = () => {
    if (active === 10) return;

    router.push({
      query: {
        search: name,
        pageID: (active + 1) * 10,
        filter: filter ? filter : null,
      },
    });

    setActive(active + 1);
  };

  const prev = () => {
    if (active - 1 > 0) {
      router.push({
        query: {
          search: name,
          pageID: (active - 1) * 10,
          filter: filter ? filter : null,
        },
      });
      setActive(active - 1);
    } else {
      router.push({
        query: { search: name, pageID: 1, filter: filter ? filter : null },
      });

      if (active === 1) return;
    }
  };

  return {
    active,
    next,
    prev,
  };
};

export default usePagination;
