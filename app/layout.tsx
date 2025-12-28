import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-green-50 text-green-900">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
