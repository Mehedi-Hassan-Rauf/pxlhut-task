"use client"

import { useFormContext } from "react-hook-form"
import { FormField } from "@/components/ui/form-field"

export function AccountSetup() {
  const { control } = useFormContext()

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Account Setup</h2>
      <p className="text-muted-foreground">Create your account credentials.</p>

      <div className="space-y-4">
        <FormField control={control} name="username" label="Username" placeholder="johndoe" />

        <FormField control={control} name="password" label="Password" type="password" placeholder="••••••" />

        <FormField
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          placeholder="••••••"
        />
      </div>
    </div>
  )
}
