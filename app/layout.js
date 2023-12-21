import "./globals.css";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Next Level Meals",
  description: "The best receipes for your next meal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
