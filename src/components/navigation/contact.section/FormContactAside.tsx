"use client";

import { CustomButton } from "@/components/ui";
import { contactFormTexts } from "@/data";
import { MotionDiv, MotionP } from "@/lib";
import { ValidationError, useForm } from "@formspree/react";
import { MotionValue } from "framer-motion";
import { CheckCircle2, RocketIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

export const FormContactAside = ({
  rightSkew,
}: {
  rightSkew: MotionValue<number>;
}) => {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [state, handleSubmit] = useForm("mpwrngnz");
  const formRef = useRef<HTMLFormElement>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    let isValid = true;

    contactFormTexts.forEach((field) => {
      const input = formRef.current?.elements.namedItem(field.id) as
        | HTMLInputElement
        | HTMLTextAreaElement;
      if (!input?.value.trim()) {
        errors[field.id] = `${field.label} is required`;
        isValid = false;
      }
    });

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      await handleSubmit(e);
      setShowSuccess(true);
    }
  };

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
      setShowSuccess(false);
      setFormErrors({});
      router.push("/contact");
    }
  };

  const handleInputChange = (fieldId: string) => {
    if (formErrors[fieldId]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldId];
        return newErrors;
      });
    }
  };

  if (state.succeeded && showSuccess) {
    return (
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-center p-6 bg-gray-50 rounded-lg"
      >
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-xl font-medium mb-3">Message Received!</h3>
        <MotionP
          className="text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Thanks for reaching out. I typically respond within 30 minutes. So
          hang on.
        </MotionP>
        <CustomButton onClick={resetForm} variant="default" size="md">
          Send Another Message
        </CustomButton>
      </MotionDiv>
    );
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ transformPerspective: 1000, skewY: rightSkew }}
      className="space-y-4"
    >
      <form
        ref={formRef}
        onSubmit={handleFormSubmit}
        className="space-y-4"
        noValidate
      >
        {contactFormTexts.map((field, index) => (
          <MotionDiv
            key={field.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <>
                <textarea
                  id={field.id}
                  name={field.id}
                  rows={5}
                  className={`text-sm w-full px-4 py-3 border ${
                    formErrors[field.id] ? "border-red-300" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none focus:ring-gray-300`}
                  placeholder={field.placeholder}
                  required
                  onChange={() => handleInputChange(field.id)}
                />
                {formErrors[field.id] && (
                  <p className="text-xs text-red-500 mt-1">
                    {formErrors[field.id]}
                  </p>
                )}
                <ValidationError
                  prefix={field.label}
                  field={field.id}
                  errors={state.errors}
                  className="text-xs text-red-500 mt-1"
                />
              </>
            ) : (
              <>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  className={`text-sm w-full px-4 py-3 border ${
                    formErrors[field.id] ? "border-red-300" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:border-transparent focus:ring-gray-300 transition-all duration-200`}
                  placeholder={field.placeholder}
                  required
                  onChange={() => handleInputChange(field.id)}
                />
                {formErrors[field.id] && (
                  <p className="text-xs text-red-500 mt-1">
                    {formErrors[field.id]}
                  </p>
                )}
                <ValidationError
                  prefix={field.label}
                  field={field.id}
                  errors={state.errors}
                  className="text-xs text-red-500 mt-1"
                />
              </>
            )}
          </MotionDiv>
        ))}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <CustomButton
            type="submit"
            variant="default"
            size="md"
            fullWidth
            icon={<RocketIcon className="w-5 h-5" />}
            iconPosition="left"
            disabled={state.submitting}
            whileHover={!state.submitting ? { scale: 1.02 } : {}}
          >
            {state.submitting ? (
              <span className="flex items-center gap-2">
                <span className="inline-block animate-pulse">Sending...</span>
              </span>
            ) : (
              "Send Message"
            )}
          </CustomButton>
        </MotionDiv>
      </form>
    </MotionDiv>
  );
};
