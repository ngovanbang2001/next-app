import { store } from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import NotistackProvider from "@/components/NotistackProvider";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ReduxProvider store={store}>
      <NotistackProvider>
        {getLayout(<Component {...pageProps} />)}
      </NotistackProvider>
    </ReduxProvider>
  );
}

export default MyApp;
