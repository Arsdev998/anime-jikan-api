import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from "@/components/layouts/Navbar";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar/>
      <Component {...pageProps} />;
    </QueryClientProvider>
  ) 
}
