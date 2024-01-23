import type { Metadata } from "next";
import { ChakraProviders } from "./providers";
import { Navbar } from "@src/components/Navbar/Navbar";
// Import Swiper styles
import "swiper/css";
import { Footer } from "@src/components/Footer/Footer";
import AppContextProvider from "@src/context/AppContext";

export const metadata: Metadata = {
  title: "Sofisticada",
  description: "Tienda en Linea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <AppContextProvider>
          <ChakraProviders>
            <Navbar />
            {children}
            <Footer />
          </ChakraProviders>
        </AppContextProvider>
      </body>
    </html>
  );
}
