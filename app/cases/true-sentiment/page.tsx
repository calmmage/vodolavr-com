import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function TrueSentimentCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">True Sentiment</h1>
              <p className="text-xl text-muted-foreground mb-6">Deep-Context Influencer Auditing</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Sentiment Analysis</Badge>
                <Badge variant="secondary">LLM</Badge>
                <Badge variant="secondary">Marketing</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/sentiment-heatmap-visualization.jpg"
                alt="True Sentiment"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Standard sentiment analysis tools are notoriously bad at context. If a fan comments "I love you!" on a sponsored post, legacy tools count that as a win for the brand. In reality, that affection is directed at the creator, not the product. Our client was drowning in false positives, unable to distinguish between an audience that loved the influencer and an audience that actually wanted to buy the product.
              </p>

              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We built a Multi-Vector Sentiment Engine. Instead of a binary "Positive/Negative" score, we parsed comments into three distinct streams: Creator Sentiment ("I love this guy"), Product Sentiment ("This drink looks gross"), and Narrative Sentiment ("This ad was actually funny"). This allowed us to mathematically isolate the brand's performance from the influencer's popularity.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li><strong>Automated the identification of low-effort content</strong> that technically met guidelines but failed to deliver value.</li>
                <li><strong>Allowed the client to enforce content guidelines intelligently</strong> - offering leeway to high-performing evangelists.</li>
                <li><strong>Mapped specific product lines to creator niches.</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
