import Search from "@components/Search";
import Head from "next/head";
import Link from "next/link";
import { client } from "src/graphql";
import { GET_ALL_BOOKS } from "src/graphql/query";
import BookListing from "@components/BookListing";
import Pagination from "@components/Pagination";

function Home({ books, name, filter }) {
  return (
    <div>
      <Head>
        <title>Books App</title>
        <meta name="description" content="Google Books API next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[whitesmoke] shadow-lg">
        <div className="max-w-[1400px] flex sm:flex-row flex-col gap-2 p-3 items-center justify-between mx-auto">
          <div className="flex items-center gap-3 ">
            <div className="flex items-center gap-3 px-3 text-[#444]">
              <svg
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.012 18H21V4a2 2 0 0 0-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1zM8 6h9v2H8V6z" />
              </svg>
              <Link href={"/"}>
                <span className="uppercase text-lg font-bold cursor-pointer">
                  Books
                </span>
              </Link>
            </div>
          </div>
          <div className=" w-full">
            <Search />
          </div>
        </div>
      </div>
      <div>
        <BookListing books={books} />
      </div>
      <div className="flex items-center justify-center mb-10">
        <Pagination name={name} filter={filter} />
      </div>
    </div>
  );
}

/**
 * Here we have used the getServerSideProps because we want the benifits of the serverSide rendering but we cant afford to serve the stale data to the user because we cant return any page other than the user have requested
 * @param context : It returns the query and repquest related parameters
 * @returns props for the main component
 */
export const getServerSideProps = async (context) => {
  const { search, pageID, filter } = context.query;
  // console.log(search, "*** context.query ***");

  if (!search) {
    const { data } = await client.query({
      query: GET_ALL_BOOKS,
      variables: {
        input: "life",
        pageID: 10,
      },
    });

    return {
      props: {
        books: data.books,
        name: "life",
        filter: filter ? filter : null,
      },
    };
  } else {
    if (!pageID) {
      const { data } = await client.query({
        query: GET_ALL_BOOKS,
        variables: {
          input: search,
          pageID: 10,
          filter: filter ? filter : null,
        },
      });

      return {
        props: {
          books: data.books,
          name: search,
          filter: filter ? filter : null,
        },
      };
    } else {
      const { data } = await client.query({
        query: GET_ALL_BOOKS,
        variables: {
          input: search,
          pageID: parseInt(pageID),
          filter: filter ? filter : null,
        },
      });

      return {
        props: {
          books: data.books,
          name: search,
          filter: filter ? filter : null,
        },
      };
    }
  }

  return {
    props: {
      books: [],
    },
  };
};

export default Home;
