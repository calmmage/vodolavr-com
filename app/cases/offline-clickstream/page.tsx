import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function OfflineClickstreamCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Offline Clickstream</h1>
              <p className="text-xl text-muted-foreground mb-6">Narrowing the Gap Between Digital and Physical Intelligence</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Retail</Badge>
                <Badge variant="secondary">Audio</Badge>
                <Badge variant="secondary">LLM</Badge>
                <Badge variant="secondary">Offline Data</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/images/design-mode/telegram-cloud-photo-size-2-5195277267301956972-y.jpg"
                alt="Offline Clickstream"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While e-commerce managers have god-mode visibility into every click and bounce, physical retail remains a black box. Our client, a high-end fashion retailer, rolled out a new sales strategy but had no way to measure it beyond revenue totals. They were flying blind, relying on anecdotal reports from floor managers rather than objective data.
              </p>

              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We engineered a pipeline to digitize the sales floor. Using badge-mounted microphones, we captured hours of raw audio, but the real challenge was the environment: loud background music with lyrics constantly bled into the transcription. We built a custom LLM post-processing layer to scrub the "store noise," separate the consultant from the customer, and map the remaining dialogue against the corporate framework.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li><strong>Captured unlogged demand</strong> by tracking verbal requests of the customers.</li>
                <li><strong>Identified the unique, non-scripted phrases</strong> used by top sellers and codified them into the official training materials for the rest of the team.</li>
                <li><strong>Replaced expensive manual auditing</strong> with an automated, always-on AI loop.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
