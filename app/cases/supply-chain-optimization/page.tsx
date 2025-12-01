import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function SupplyChainOptimizationCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Supply Chain Optimization</h1>
              <p className="text-xl text-muted-foreground mb-6">ML-powered demand forecasting system</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">ai transformation</Badge>
                <Badge variant="secondary">data workflow</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/logistics-analytics-display.jpg"
                alt="Supply Chain Optimization"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A manufacturing company was facing significant inventory challenges - overstocking slow-moving items while frequently running out of popular products. Their rule-based forecasting system couldn't adapt to market changes or seasonal patterns, resulting in millions in tied-up capital and lost sales.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We developed an ML-powered demand forecasting system that analyzes historical sales data, market trends, seasonal patterns, and external factors to predict future demand with high accuracy. The system continuously learns and adapts to changing conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The solution integrates with their ERP system to automatically adjust reorder points and quantities, optimizing inventory levels across their entire product catalog.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>25% reduction in overall inventory costs</li>
                <li>40% decrease in stockout incidents</li>
                <li>18% improvement in forecast accuracy</li>
                <li>Freed up $2.3M in working capital within 6 months</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
