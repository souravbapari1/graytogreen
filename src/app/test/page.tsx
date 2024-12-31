"use client";

import React, { useState } from "react";

const formConfig = {
  form: {
    title: "Dynamic Form",
    description: "This is a customizable form for various purposes.",
    fields: [
      {
        label: "Name",
        name: "name",
        type: "text",
        required: true,
        placeholder: "Enter your name",
        validation: {
          minLength: 2,
          maxLength: 50,
        },
      },
      {
        label: "Country",
        name: "country",
        type: "select",
        required: true,
        options: [
          { label: "United States", value: "us" },
          { label: "Canada", value: "ca" },
          { label: "India", value: "in" },
        ],
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "Enter your email",
        validation: {
          regex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
          errorMessage: "Enter a valid email address",
        },
      },
      {
        label: "Password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "Enter your password",
        validation: {
          minLength: 8,
          errorMessage: "Password must be at least 8 characters long",
        },
      },
      {
        label: "Date of Birth",
        name: "dob",
        type: "date",
        required: true,
      },
      {
        group: [
          {
            label: "Gender",
            name: "gender",
            type: "radio",
            required: true,
            options: [
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ],
          },
          {
            label: "Age",
            name: "age",
            type: "number",
            required: true,
            placeholder: "Enter your age",
            validation: {
              min: 1,
              max: 120,
            },
          },
        ],
      },
      {
        repeatable: true,
        title: "Enter Child's Details",
        max: 3,
        min: 1,
        name: "children",
        fields: [
          {
            label: "Child Name",
            name: "child_name",
            type: "text",
            required: true,
          },
          {
            label: "Country",
            name: "country",
            type: "select",
            required: true,
            options: [
              { label: "United States", value: "us" },
              { label: "Canada", value: "ca" },
              { label: "India", value: "in" },
            ],
          },
          {
            label: "Child Age",
            name: "child_age",
            type: "number",
            required: true,
            validation: {
              min: 1,
              max: 18,
            },
          },
        ],
      },
      {
        label: "Profile Picture",
        name: "profile_picture",
        type: "file",
        required: false,
        accept: ["image/jpeg", "image/png"],
      },
      {
        label: "Terms and Conditions",
        name: "terms",
        type: "checkbox",
        required: true,
        options: [
          { label: "I agree to the terms and conditions", value: "agree" },
        ],
      },
    ],
    submission: {
      method: "POST",
      endpoint: "/submit-form",
      successMessage: "Form submitted successfully!",
      errorMessage: "There was an error submitting the form. Please try again.",
    },
  },
};

const FormBuilder = () => {
  const [formData, setFormData] = useState<any>({});
  const [files, setFiles] = useState<{ [key: string]: File | null }>({});
  const [repeatableFields, setRepeatableFields] = useState<any>({
    children: [{}], // Default state for repeatable fields
  });

  const handleChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleRepeatableChange = (
    fieldName: string,
    index: number,
    name: string,
    value: any
  ) => {
    const updated = [...repeatableFields[fieldName]];
    updated[index] = { ...updated[index], [name]: value };
    setRepeatableFields({ ...repeatableFields, [fieldName]: updated });
  };

  const renderField = (field: any) => {
    const { type, name, label, placeholder, required, options, repeatable } =
      field;

    if (repeatable) {
      return renderRepeatableFields(field);
    }

    if (type === "select") {
      return (
        <div key={name}>
          <label>{label}</label>
          <select
            name={name}
            required={required}
            onChange={(e) => handleChange(name, e.target.value)}
          >
            <option value="">-- Select --</option>
            {options.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    }

    if (type === "file") {
      return (
        <div key={name}>
          <label>{label}</label>
          <input
            type="file"
            name={name}
            required={required}
            onChange={(e) =>
              setFiles({
                ...files,
                [name]: e.target.files ? e.target.files[0] : null,
              })
            }
          />
        </div>
      );
    }

    return (
      <div key={name}>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={(e) => handleChange(name, e.target.value)}
        />
      </div>
    );
  };

  const renderRepeatableFields = (field: any) => {
    const { name, title, max, min, fields } = field;
    const entries = repeatableFields[name];

    return (
      <div key={name}>
        <h3>{title}</h3>
        {entries.map((entry: any, index: number) => (
          <div
            key={index}
            style={{
              marginBottom: "1rem",
              border: "1px solid #ddd",
              padding: "1rem",
            }}
          >
            {fields.map((subField: any) => renderField(subField))}
            {entries.length > min && (
              <button
                type="button"
                onClick={() => handleRepeatableRemove(name, index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        {entries.length < max && (
          <button type="button" onClick={() => handleRepeatableAdd(name)}>
            Add {title}
          </button>
        )}
      </div>
    );
  };

  const handleRepeatableAdd = (fieldName: string) => {
    setRepeatableFields({
      ...repeatableFields,
      [fieldName]: [...repeatableFields[fieldName], {}],
    });
  };

  const handleRepeatableRemove = (fieldName: string, index: number) => {
    const updated = [...repeatableFields[fieldName]];
    if (updated.length > 1) {
      updated.splice(index, 1);
      setRepeatableFields({ ...repeatableFields, [fieldName]: updated });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData, files, repeatableFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{formConfig.form.title}</h1>
      <p>{formConfig.form.description}</p>
      {formConfig.form.fields.map((field: any) => renderField(field))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormBuilder;
