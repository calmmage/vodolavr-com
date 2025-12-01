import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function AIQualityControlCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">AI Quality Control for Sales Floor</h1>
              <p className="text-xl text-muted-foreground mb-6">Automated conversation monitoring and analysis</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">ai transformation</Badge>
                <Badge variant="secondary">automation</Badge>
                <Badge variant="secondary">langchain</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/images/design-mode/telegram-cloud-photo-size-2-5195277267301956972-y.jpg"
                alt="AI Quality Control"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A fashion retailer invested heavily in a brand-aligned sales script, but salespeople ignored it, reverting to old habits that negatively impacted sales. The company had no way to monitor or enforce its own strategy.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We built an automated system to provide full visibility into sales floor conversations. Name badges were fitted with high-quality mics to capture interactions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We then used LLMs to transcribe and analyze these conversations, automatically checking them against the official sales guidelines. The system generated targeted feedback for employees and summary reports for supervisors, creating a scalable loop for quality assurance.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Complete visibility into sales floor interactions</li>
                <li>Automated quality assurance without manual monitoring</li>
                <li>Real-time feedback loop for continuous improvement</li>
                <li>Increased adherence to brand-aligned sales strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
