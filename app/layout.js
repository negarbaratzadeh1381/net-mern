import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clancer",
  description: "Find your freelancer here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-neutral-800 ${inter.className}`}>
        <header>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between px-4 sm:px-6 md:px-12 py-8">
            <div>
              <h1 className=" text-neutral-200 text-3xl items-center">Clancer</h1>
            </div>
            <div className="flex  gap-3">
            <button className=" bg-emerald-300 px-6 md:px-12 py-3 lg:py-2    rounded-2xl text-emerald-600    hover:bg-neutral-200  ">Start working</button>
            <button className=" bg-emerald-200 px-6 md:px-10 py-3   lg:py-2 rounded-2xl text-emerald-600    hover:bg-neutral-200 ">List of freelancers</button>
        
            </div>

          </div>

        </header>

        <main className="w-full flex justify-center mt-12">
          {children}

        </main>
      </body>
    </html>
  );
}
