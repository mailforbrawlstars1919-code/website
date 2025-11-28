export const metadata = {
  title: 'Key & Blacklist Viewer',
  description: 'Discord bot ile eklenen key ve blacklistleri gösterir.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{ background: '#18181b', color: '#fff', fontFamily: 'sans-serif' }}>{children}</body>
    </html>
  );
}
