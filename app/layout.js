import './globals.css';

export const metadata = {
  title: 'NexusEvent - Webflow HTML website template',
  description: 'Static conversion to Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta content="NexusEvent - Webflow HTML website template" property="og:title" />
        <meta content="NexusEvent - Webflow HTML website template" property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .main-wrapper { opacity: 1 !important; }
          [data-w-id] { transform: none !important; opacity: 1 !important; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
