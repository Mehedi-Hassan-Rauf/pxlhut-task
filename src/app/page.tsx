import { MultiStepForm } from "@/components/multi-step-form"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Toaster } from "@/components/toaster"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <main className="min-h-screen p-4 md:p-8 lg:p-12">
        <div className="container mx-auto max-w-3xl">
          <div className="flex justify-end mb-4">
            <ModeToggle />
          </div>
          <div className="bg-card rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Multi-Step Form</h1>
            <MultiStepForm />
          </div>
        </div>
      </main>
      <Toaster />
    </ThemeProvider>
  )
}
