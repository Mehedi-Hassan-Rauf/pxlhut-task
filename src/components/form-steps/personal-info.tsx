"use client"

import { useFormContext } from "react-hook-form"
import { FormField } from "@/components/ui/form-field"

export function PersonalInfo() {
  const { control } = useFormContext()

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Personal Information</h2>
      <p className="text-muted-foreground">Please provide your personal details.</p>

      <div className="space-y-4">
        <FormField control={control} name="fullName" label="Full Name" placeholder="John Doe" />

        <FormField control={control} name="email" label="Email" placeholder="john.doe@example.com" type="email" />

        <FormField control={control} name="phoneNumber" label="Phone Number" placeholder="1234567890" />
      </div>
    </div>
  )
}
