import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vehiql - AI Car Marketplace",
  description: "Find the best cars for you!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Header />

          <main className="min-h-screen">{children}</main>

          <footer className="bg-blue-500 py-12">
            <div className="container mx-auto text-center">
              <p>Made with ❤️ by Rahul Tangsali</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
