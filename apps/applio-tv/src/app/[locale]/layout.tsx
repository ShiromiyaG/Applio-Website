import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

// Runtime for cloudflare, comment for local dev mode.
export const runtime = 'edge';

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Applio TV",
  description: "Listen music created with artificial intelligence.",
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
