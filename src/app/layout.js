
import "./globals.css"
import Header from "./components/Header";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">{children}</div>
        
      </body>
    </html>
  );
}