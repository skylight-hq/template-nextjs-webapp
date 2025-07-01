"use client";

import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const Navigation: React.FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();

  const currentLocale = i18n.language;

  const handleChange = useCallback(
    (newLocale: string) => () => {
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "; expires=" + date.toUTCString();
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

      if (currentLocale === i18nConfig.defaultLocale) {
        router.push("/" + newLocale + currentPathname);
      } else {
        router.push(
          currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        );
      }

      router.refresh();
    },
    [currentLocale, currentPathname, router]
  );

  return (
    <nav>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleChange("en")}
      >
        English
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleChange("es")}
      >
        Espanol
      </button>
    </nav>
  );
};

export default Navigation;
