// import "tailwindcss/tailwind.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/globals.scss";
import "swiper/swiper.min.css";
import NProgress from "../components/nprogress";
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css



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
