import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/IQ WITH INR.png" />
        <link rel="shortcut icon" type="image/png" href="/IQ WITH INR.png" />
      </head>
      <body className="min-h-screen bg-green-50 text-green-900">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
