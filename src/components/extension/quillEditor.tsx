"use client";
import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";

interface QuillEditorProps {
  value: string;
  onChange: (content: string) => void;
  className?: string;
  onFocus?: (content: string) => void;
  onBlur?: (content: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({
  value,
  onChange,
  className,
  onFocus,
  onBlur,
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillInstance = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      // Initialize Quill editor
      quillInstance.current = new Quill(editorRef.current, {
        theme: "bubble",
        placeholder: "Write Here...",
        bounds: editorRef.current,
      });

      // Set initial content using Quill's API
      if (value) {
        quillInstance.current.setText(value);
      }

      // Listen for text changes
      quillInstance.current.on("text-change", () => {
        const currentContent = quillInstance.current?.root.innerHTML || "";
        if (currentContent !== value) {
          onChange(currentContent);
        }
      });
    }

    return () => {
      if (quillInstance.current) {
        quillInstance.current.off("text-change");
        quillInstance.current.off("selection-change");
      }
    };
  }, []);

  // Update editor content when `value` prop changes using Quill's API
  useEffect(() => {
    if (
      quillInstance.current &&
      quillInstance.current.root.innerHTML !== value
    ) {
      quillInstance.current.setText(value);
    }
  }, [value]);

  return <div ref={editorRef} className={className} />;
};

export default QuillEditor;
