import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function WorkflowAutomationCase() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/#home" className="text-xl font-bold hover:text-primary transition-colors">
              VodoLavr
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link href="/#cases">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Cases
            </Button>
          </Link>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Enterprise Workflow Automation</h1>
              <p className="text-xl text-muted-foreground mb-6">Intelligent tool integration and routing</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">n8n</Badge>
                <Badge variant="secondary">automation</Badge>
                <Badge variant="secondary">ai transformation</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/workflow-automation-dashboard.jpg"
                alt="Enterprise Workflow Automation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A fast-growing company was drowning in manual work connecting their 15+ business tools. Sales data needed to flow to CRM, trigger marketing automation, update spreadsheets, and alert teams - all manually. This created bottlenecks, errors, and frustrated employees.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We built a comprehensive automation platform using n8n that connects all their tools with intelligent routing and decision-making. The system uses AI to classify requests, route data to the appropriate systems, and handle exceptions gracefully.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Complex workflows that previously required multiple people and hours of work now run automatically, with AI making intelligent decisions about routing, prioritization, and escalation.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Connected 15+ tools with 40+ automated workflows</li>
                <li>Eliminated 80+ hours of manual work per week</li>
                <li>Reduced data entry errors by 95%</li>
                <li>Enabled team to scale operations by 3x without additional headcount</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
