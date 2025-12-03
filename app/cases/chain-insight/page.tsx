import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function ChainInsightCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Chain Insight</h1>
              <p className="text-xl text-muted-foreground mb-6">Automated Research Analyst</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">LLM</Badge>
                <Badge variant="secondary">Web3</Badge>
                <Badge variant="secondary">RAG</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/images/design-mode/telegram-cloud-photo-size-2-5195277267301956973-y.jpg"
                alt="Chain Insight"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The "Signal-to-Noise" ratio in Web3 is notoriously poor. Users were paralyzed by a feed containing dense whitepapers alongside low-quality hype. Building a unified search for this required handling a "data soup" where a 20-page PDF and a 280-character announcement had to be weighed on the same scale of relevance.
              </p>

              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We engineered a Multi-Stage Ranking System. Instead of simple keyword matching, we implemented a waterfall logic: first retrieving broad chunks, then re-ranking them based on freshness, semantic relevance, and source credibility. This allowed the system to answer "What is this new token?" with a precise summary of its whitepaper, ignoring the speculative noise surrounding it.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li><strong>+15% Retention</strong> in the novice onboarding funnel by removing the need to Google complex terms.</li>
                <li><strong>Intent Discovery:</strong> Analyzed user queries to reveal real-time product interests, replacing "guesswork" analytics with direct voice-of-customer data.</li>
                <li><strong>Ecosystem Lock-in:</strong> Shifted user behavior, making the tool their primary "window to the web".</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
