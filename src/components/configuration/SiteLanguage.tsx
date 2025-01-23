import React, { useState, useEffect } from "react";
import { LuLanguages } from "react-icons/lu";
import { MdClose } from "react-icons/md";
interface LanguageType {
  id: number;
  lang: string;
}
const SiteLanguage = () => {
  const [openLanguageModal, setOpenLanguageModal] = useState<boolean>(false);
  const [languageSelected, setLanguageSelected] = useState<string>("Engilish");
  const openLanguageModalFunc: React.MouseEventHandler = () => {
    setOpenLanguageModal(!openLanguageModal);
  };
  const languages: LanguageType[] = [
    { id: 1, lang: "English" },
    { id: 2, lang: "Bahasa Indonesia" },
    { id: 3, lang: "Bahasa Malaysia" },
    { id: 4, lang: "Čeština" },
    { id: 5, lang: "Dansk" },
    { id: 6, lang: "Deutsch" },
    { id: 7, lang: "Español" },
    { id: 8, lang: "Français" },
    { id: 9, lang: "Italiano" },
    { id: 10, lang: "Magyar" },
    { id: 11, lang: "Nederlands" },
    { id: 12, lang: "Norsk" },
    { id: 13, lang: "Polski" },
    { id: 14, lang: "Português" },
    { id: 15, lang: "Română" },
    { id: 16, lang: "Suomi" },
    { id: 17, lang: "Svenska" },
    { id: 18, lang: "Tiếng Việt" },
    { id: 19, lang: "Türkçe" },
    { id: 20, lang: "Ελληνικά" },
    { id: 21, lang: "Русский" },
    { id: 22, lang: "Українська" },
    { id: 23, lang: "বাংলা" },
    { id: 24, lang: "தமிழ்" },
    { id: 25, lang: "മലയാളം" },
    { id: 26, lang: "ภาษาไทย" },
    { id: 27, lang: "한국어" },
    { id: 28, lang: "中文" },
    { id: 29, lang: "日本語" },
    { id: 30, lang: "繁體中文" },
    { id: 31, lang: "فارسی" },
  ];

  const setCookie = (name: string, value: string, days: number) => {
    let expires: string = "";
    if (days) {
      const today = new Date();
      today.setTime(today.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + today.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  };
  const getCookie = (name): string | null => {
    const value: string = `; ${document.cookie}`;
    const parts: string[] = value.split(`; ${name}=`);
    if (parts.length === 2 && parts.length !== undefined) {
      const cookieValue = parts.pop();
      if (cookieValue) {
        return cookieValue.split(";").shift() || null;
      }
    }
    return null;
  };

  const SetSelectLang: React.MouseEventHandler = (value: string) => {
    setLanguageSelected(value);
    setCookie("language", value, 7);
  };
  useEffect(() => {
    const storedLanguage = getCookie("language");
    if (storedLanguage) {
      setLanguageSelected(storedLanguage);
    }
  }, []);
  return (
    <div className="flex items-center justify-center gap-5 ">
      {/* change language item  */}
      <div
        className="relative flex items-center justify-center rounded-full   border-[2px] border-slate-200 border-solid w-[50px]  h-[40px] cursor-pointer hover:opacity-80"
        onClick={openLanguageModalFunc}
      >
        {openLanguageModal ? <MdClose /> : <LuLanguages />}
      </div>
      {openLanguageModal && (
        // languages list
        <div className="absolute top-18 right-16 rounded-xs border-solid border-slate-800 border-[2px] px-4  w-[200px] h-[400px] bg-zinc-900 overflow-y-auto ">
          {/* language item */}
          {languages.map((lang) => (
            <button
              key={lang.id}
              className="text-center border-b-[2px] border-solid  border-slate-800 py-3  cursor-pointer bg-none border-t-none border-l-none border-r-none w-full hover:text-white"
              onClick={() => SetSelectLang(lang.lang)}
            >
              {/* mapping language data  */}
              {lang.lang}
            </button>
          ))}
        </div>
      )}
      <div className="">{languageSelected}</div>
    </div>
  );
};

export default SiteLanguage;
