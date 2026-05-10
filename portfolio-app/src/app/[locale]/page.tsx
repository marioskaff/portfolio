import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = useTranslations();
  return (
    <main style={{ padding: 32 }}>
      <h1>{t("greeting")}</h1>
      <p>{t("welcome")}</p>
    </main>
  );
}
