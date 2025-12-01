import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function RecommendationEngineCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Content Recommendation Engine</h1>
              <p className="text-xl text-muted-foreground mb-6">Personalized content discovery system</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">fine-tuning</Badge>
                <Badge variant="secondary">ai transformation</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/data-visualization-patterns.jpg"
                alt="Content Recommendation Engine"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A digital media platform was struggling with low user engagement and content discovery. Their existing recommendation system used simple collaborative filtering, which resulted in repetitive suggestions and missed opportunities to surface relevant but less popular content.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We fine-tuned a language model on the platform's content catalog and user interaction data to create a sophisticated recommendation engine. The model understands content semantics, user preferences, and contextual factors to make highly personalized suggestions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The system balances exploration and exploitation, introducing users to new content while still serving familiar favorites, creating a dynamic discovery experience.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>3x increase in user engagement with recommended content</li>
                <li>45% improvement in content discovery metrics</li>
                <li>Reduced content churn rate by 28%</li>
                <li>Increased user session duration by 60%</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
