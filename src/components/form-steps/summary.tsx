"use client"

import { useFormContext } from "react-hook-form"
import { Card, CardContent } from "@/components/ui/card"

export function Summary() {
  const { watch } = useFormContext()

  const formValues = watch()

  const sections = [
    {
      title: "Personal Information",
      fields: [
        { label: "Full Name", value: formValues.fullName },
        { label: "Email", value: formValues.email },
        { label: "Phone Number", value: formValues.phoneNumber },
      ],
    },
    {
      title: "Address Details",
      fields: [
        { label: "Street Address", value: formValues.streetAddress },
        { label: "City", value: formValues.city },
        { label: "Zip Code", value: formValues.zipCode },
      ],
    },
    {
      title: "Account Setup",
      fields: [
        { label: "Username", value: formValues.username },
        { label: "Password", value: "••••••" },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Summary</h2>
      <p className="text-muted-foreground mb-6">
        Please review your information below and click "Submit Form" when you're ready.
      </p>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg mb-3">{section.title}</h3>
              <dl className="space-y-2">
                {section.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="grid grid-cols-3 gap-4">
                    <dt className="text-muted-foreground">{field.label}:</dt>
                    <dd className="col-span-2 font-medium">{field.value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <svg
              className="h-5 w-5 text-amber-600 dark:text-amber-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-amber-800 dark:text-amber-300">Important</h3>
            <div className="mt-2 text-sm text-amber-700 dark:text-amber-400">
              <p>
                Please verify all information is correct before submitting. Click the "Submit Form" button below when
                you're ready to complete your submission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
