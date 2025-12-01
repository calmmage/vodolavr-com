import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function SignalCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Signal</h1>
              <p className="text-xl text-muted-foreground mb-6">an intelligent research assistant</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">langchain</Badge>
                <Badge variant="secondary">ai transformation</Badge>
                <Badge variant="secondary">data workflow</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/images/design-mode/telegram-cloud-photo-size-2-5195277267301956973-y.jpg"
                alt="Signal"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The core task was to synthesize insights from a chaotic mix of sources: fast-moving news feeds, in-depth research reports, and some internal knowledge. Each source has unique characteristics, and a system that treats them all the same is bound to fail.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We designed a solution based on an enhanced LLM and RAG architecture. We knew from the start that a simple retrieval system would be insufficient. The majority of the engineering effort was therefore focused on developing a series of custom enhancements, with advanced filtering logic and tag-based similarity.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Intelligent synthesis of insights from diverse information sources</li>
                <li>Advanced filtering and relevance ranking for accurate results</li>
                <li>Scalable architecture handling high-volume data streams</li>
                <li>Significantly reduced research time for analysts</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
