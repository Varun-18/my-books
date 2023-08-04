import Head from "next/head";
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
 *
 * @param context : It returns the query and request related parameters
 *
 * @returns props for the main component
 */
export const getServerSideProps = async (context) => {
  const { search, pageID, filter } = context.query;

  console.log(filter, "from getServerSideProps");
  const { data } = await client.query({
    query: GET_ALL_BOOKS,
    variables: {
      input: search ? search : "life",
      pageID: pageID ? parseInt(pageID) : 10,
      filterParam: filter ? filter : undefined,
    },
  });

  return {
    props: {
      books: data.books,
      name: search ? search : "life",
      filter: filter ? filter : null,
    },
  };
};

export default Home;
