import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Navbar from "@/app/navbar";



export const metadata: Metadata = {
  title: "Nabin Yadav",
  description: "Full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Navbar />
          {children}
        </AppRouterCacheProvider>

      </body>
    </html>
  );
}
