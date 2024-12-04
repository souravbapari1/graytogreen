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
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en", // Specify the default language
        autoDisplay: false, // Disable automatic pop-up
        includedLanguages: "en,ar",
      },
      "google_translate_element" // ID of the container for the widget
    );
  };

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    const timer = setTimeout(() => {
      document.body.appendChild(addScript);
      // Set the initialization function to the global window object
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, 100);

    return () => {
      clearTimeout(timer);
      addScript.remove();
    };
  }, []);

  return <div id="google_translate_element" />;
};

export default GoogleTranslate;
