import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextIntlClientProvider } from "next-intl";
import PageLayout from "@/views/PageLayout/PageLayout";
import { ThemeProvider } from "@/components/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider locale="en" messages={require(`/locales/en.json`)}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
