import type { Metadata } from "next";
import { ChakraProviders } from "./providers";
import { Navbar } from "@src/components/Navbar/Navbar";

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
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body>
        <ChakraProviders>
          <Navbar />
          {children}
        </ChakraProviders>
      </body>
    </html>
  );
}
