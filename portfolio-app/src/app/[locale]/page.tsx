import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();
  return (
    <main style={{ padding: 32 }}>
      <h1>{t("greeting")}</h1>
      <p>{t("welcome")}</p>
    </main>
  );
}
