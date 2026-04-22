import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fridge Feast - Simple Recipe Maker',
  description: 'Generate creative recipes based on what is in your fridge using AI.',
};

// Increase the timeout for all routes and actions in this layout to 60 seconds.
// This is the correct place for this configuration in Next.js 15.
export const maxDuration = 60;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
