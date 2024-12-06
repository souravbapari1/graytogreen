"use client";
import { useEffect } from "react";

// At the top of the file, outside of any function or class
declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ar", // Default language
          includedLanguages: "en,ar", // Only show English and Arabic
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element" />;
};

export default GoogleTranslate;
