import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-medium tracking-tight">Pixel test</h1>
      <div className="flex gap-3">
        <Button onClick={() => toast("Lead clicked")}>Test lead</Button>
        <Button variant="outline" onClick={() => toast("Purchase clicked")}>
          Test purchase
        </Button>
      </div>
    </main>
  )
}

export default App
