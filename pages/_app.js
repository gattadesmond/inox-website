// import "tailwindcss/tailwind.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/globals.scss";
import NProgress from "../components/nprogress";


import useSWR, { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          shouldRetryOnError: false,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
      <NProgress />
    </>
  );
}

export default MyApp;
