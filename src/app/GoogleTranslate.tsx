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
    if (!document.getElementById("google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      addScript.id = "google-translate-script"; // Ensure it's unique
      addScript.async = true;
      document.body.appendChild(addScript);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // Default language
            includedLanguages: "en,ar", // Only show English and Arabic
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  return <div id="google_translate_element" />;
};

export default GoogleTranslate;
