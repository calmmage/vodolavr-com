import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function CustomerSentimentAnalysisCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Customer Sentiment Analysis</h1>
              <p className="text-xl text-muted-foreground mb-6">Real-time sentiment tracking system</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">langchain</Badge>
                <Badge variant="secondary">automation</Badge>
                <Badge variant="secondary">data workflow</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/sentiment-heatmap-visualization.jpg"
                alt="Customer Sentiment Analysis"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A consumer brand was struggling to understand customer sentiment across dozens of channels - social media, support tickets, reviews, and forums. Manual monitoring was slow and inconsistent, causing them to miss emerging issues until they became crises.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We built a comprehensive sentiment analysis system that monitors and analyzes customer feedback in real-time across all channels. Using LLMs and custom classification models, the system identifies sentiment trends, emerging issues, and critical feedback that requires immediate attention.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The platform includes automated alerts for negative sentiment spikes, topic clustering to identify common themes, and executive dashboards for strategic oversight.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Real-time monitoring of 50,000+ customer interactions daily</li>
                <li>72% faster response time to negative sentiment trends</li>
                <li>Identified and resolved 3 potential PR crises before escalation</li>
                <li>Improved Net Promoter Score by 15 points in 6 months</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
