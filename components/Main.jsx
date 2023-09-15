import Footer from './Footer';
export default function Main({ title, children }) {
  return (
    <>
      <head>
        <title>{title ? title : 'Tell Your Secret'}</title>
        {/* Meta tags */}
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <main>{children ? children : ''}</main>
      <Footer />
    </>
  );
}
