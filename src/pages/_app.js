import { ApolloProvider } from "@apollo/client";
import Header from "@components/Header";
import "@styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { client } from "src/graphql";
import { persistor, store } from "src/store";
import LoadingBar from "react-top-loading-bar";
import { Toaster } from "react-hot-toast";
import PersistWrapper from "src/wrapper/PersistWrapper";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const ref = useRef(null);

  useEffect(() => {
    const start = () => {
      ref.current.continuousStart();
    };

    const end = () => {
      ref.current.complete();
    };

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeError", end);
    router.events.on("routeChangeComplete", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router.events]);

  // if (typeof window === "undefined") {
  //   return (
  //     <ApolloProvider client={client}>
  //       <Provider store={store}>
  //         <Toaster position="top-center" reverseOrder={false} />
  //         <Header />
  //         <LoadingBar
  //           color="#1E90FF"
  //           height={4}
  //           shadow={false}
  //           ref={ref}
  //           waitingTime={700}
  //         />
  //         <Component {...pageProps} />
  //       </Provider>
  //     </ApolloProvider>
  //   );
  // }

  // if (typeof window !== "undefined") {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        <LoadingBar
          color="#1E90FF"
          height={4}
          shadow={false}
          ref={ref}
          waitingTime={700}
        />
        <PersistWrapper>
          <Component {...pageProps} />
        </PersistWrapper>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
