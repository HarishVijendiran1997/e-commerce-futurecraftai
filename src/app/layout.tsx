import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { ReactNode } from "react";
import ReactQueryProvider from "@/lib/reactQuery";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <ReactQueryProvider>
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <main className="p-4 overflow-y-auto">{children}</main>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
