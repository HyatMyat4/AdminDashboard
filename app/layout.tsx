import "../styles/globals.css";
import Providers from "./Providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        id="root"
        className="transition-all w-[100%]  bg-[#eee] dark:bg-[black] relative scroll-smooth    "
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
