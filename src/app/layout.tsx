import type { Metadata } from "next";
import { ChakraProviders } from "./providers";

export const metadata: Metadata = {
  title: "Sofisticada",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
