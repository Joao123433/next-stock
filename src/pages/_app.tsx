import "@/styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "@/components/RootLayout";
import { ItemProvider } from "@/contexts/ItemContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <ItemProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </ItemProvider>
    </RootLayout>
  )
}
