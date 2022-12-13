import "./globals.css";

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
