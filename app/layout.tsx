export default function RootLayout({
  children,
}: {
  children: React.ReactMode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "item",
          }}
        >
          <p>Header</p>
        </header>
        {children}
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "item",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
