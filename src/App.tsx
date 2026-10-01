import { toast } from "sonner"

import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    spdt?: (event: string, params?: Record<string, unknown>) => void
  }
}

function trackLead() {
  window.spdt?.("lead", { event_id: crypto.randomUUID() })
  toast("Lead sent")
}

function trackPurchase() {
  window.spdt?.("purchase", {
    value: 1.0,
    currency: "USD",
    event_id: crypto.randomUUID(),
  })
  toast("Purchase sent")
}

export function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-medium tracking-tight">Pixel test</h1>
      <div className="flex gap-3">
        <Button onClick={trackLead}>Test lead</Button>
        <Button variant="outline" onClick={trackPurchase}>
          Test purchase
        </Button>
      </div>
    </main>
  )
}

export default App
