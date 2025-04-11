import { Check } from "lucide-react"

interface Step {
  id: string
  label: string
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex justify-between items-center">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep
        const isCurrent = index === currentStep

        return (
          <div key={step.id} className="flex flex-col items-center flex-1">
            <div className="flex items-center w-full">
              <div
                className={`flex-1 h-1 ${index === 0 ? "hidden" : ""} ${isCompleted ? "bg-primary" : "bg-muted"}`}
              ></div>
              <div
                className={`
                  flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium
                  ${
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isCurrent
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                  }
                `}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              <div
                className={`flex-1 h-1 ${index === steps.length - 1 ? "hidden" : ""} ${isCompleted ? "bg-primary" : "bg-muted"}`}
              ></div>
            </div>
            <span className={`mt-2 text-xs ${isCurrent ? "text-primary font-medium" : "text-muted-foreground"}`}>
              {step.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
