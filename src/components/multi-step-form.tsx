"use client"

import { useState } from "react"
import type { z } from "zod"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { PersonalInfo } from "@/components/form-steps/personal-info"
import { AddressDetails } from "@/components/form-steps/address-details"
import { AccountSetup } from "@/components/form-steps/account-setup"
import { Summary } from "@/components/form-steps/summary"
import { StepIndicator } from "@/components/step-indicator"
import { Button } from "@/components/ui/button"
import { formSchema } from "@/lib/schema"
import { useToast } from "@/hooks/use-toast"

type FormData = z.infer<typeof formSchema>

const steps = [
  { id: "personal", label: "Personal Information" },
  { id: "address", label: "Address Details" },
  { id: "account", label: "Account Setup" },
  { id: "summary", label: "Summary" },
]

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      zipCode: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  })

  const { trigger, getValues, reset } = methods

  const goToNextStep = async () => {
    let fieldsToValidate: string[] = []

    switch (currentStep) {
      case 0:
        fieldsToValidate = ["fullName", "email", "phoneNumber"]
        break
      case 1:
        fieldsToValidate = ["streetAddress", "city", "zipCode"]
        break
      case 2:
        fieldsToValidate = ["username", "password", "confirmPassword"]
        break
      default:
        fieldsToValidate = []
    }

    const isStepValid = await trigger(fieldsToValidate as any)

    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
    }
  }

  const goToPreviousStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmitForm = async () => {
    setIsSubmitting(true)

    // Get all form data
    const data = getValues()

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Log the submitted data to console
    console.log("Form submitted successfully:", data)

    setIsSubmitting(false)

    // Show success toast
    toast({
      title: "Form Submitted Successfully!",
      description: "Thank you for your submission.",
      variant: "success",
    })

    // Reset form and go back to first step
    reset()
    setCurrentStep(0)
  }

  return (
    <FormProvider {...methods}>
      <div>
        <StepIndicator steps={steps} currentStep={currentStep} />

        <div className="mt-8">
          {currentStep === 0 && <PersonalInfo />}
          {currentStep === 1 && <AddressDetails />}
          {currentStep === 2 && <AccountSetup />}
          {currentStep === 3 && <Summary />}
        </div>

        <div className="mt-8 flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={goToPreviousStep}
            disabled={currentStep === 0 || isSubmitting}
          >
            Previous
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={goToNextStep} disabled={isSubmitting}>
              Next
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleSubmitForm}
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700"
            >
              {isSubmitting ? "Submitting..." : "Submit Form"}
            </Button>
          )}
        </div>
      </div>
    </FormProvider>
  )
}
