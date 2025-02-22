import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Incident Vault - Anonymous Crime Reporting",
  description: "Securely and anonymously report crimes to law enforcement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <Providers>
        <div>
          <Navbar />
          {children}
          <Footer />
          <div className='flex justify-center items-center p-4 border  from-blue-500 via-white to-yellow-300 border-solid border-blue-200 m-4'>
            <h3 className=' bg-gradient-to-r bg-clip-text  to-blue-600 via-white from-yellow-400 text-transparent'>Created :- SECONDLIFE TECH (David Bako)</h3>
          </div>
        </div>
        </Providers>
      </body>
      
    </html>
  );
}
