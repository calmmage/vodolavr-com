import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function RetailAIAssistantCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Retail AI Assistant</h1>
              <p className="text-xl text-muted-foreground mb-6">Intelligent customer support automation</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">langchain</Badge>
                <Badge variant="secondary">ai transformation</Badge>
                <Badge variant="secondary">automation</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/ecommerce-shopping-interface.jpg"
                alt="Retail AI Assistant"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A growing e-commerce retailer was overwhelmed by customer support requests, with response times increasing and customer satisfaction declining. The support team was spending most of their time on repetitive questions about order status, product information, and return policies.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We developed an intelligent AI assistant powered by LLMs that could understand and respond to customer queries in natural language. The system was integrated with the company's product database, order management system, and knowledge base to provide accurate, contextual responses.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The assistant handles everything from product recommendations to order tracking, while seamlessly escalating complex issues to human agents with full context.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>80% of customer queries resolved automatically without human intervention</li>
                <li>Average response time reduced from 4 hours to under 30 seconds</li>
                <li>Customer satisfaction scores increased by 35%</li>
                <li>Support team freed to focus on complex, high-value interactions</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
