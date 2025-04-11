"use client"

import { useFormContext } from "react-hook-form"
import { FormField } from "@/components/ui/form-field"

export function AddressDetails() {
  const { control } = useFormContext()

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Address Details</h2>
      <p className="text-muted-foreground">Please provide your address information.</p>

      <div className="space-y-4">
        <FormField control={control} name="streetAddress" label="Street Address" placeholder="123 Main St" />

        <FormField control={control} name="city" label="City" placeholder="New York" />

        <FormField control={control} name="zipCode" label="Zip Code" placeholder="10001" />
      </div>
    </div>
  )
}
