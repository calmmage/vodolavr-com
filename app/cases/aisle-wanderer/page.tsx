import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function AisleWandererCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Aisle Wanderer</h1>
              <p className="text-xl text-muted-foreground mb-6">a product similarity engine</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">fine-tuning</Badge>
                <Badge variant="secondary">ai transformation</Badge>
                <Badge variant="secondary">langchain</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/images/design-mode/telegram-cloud-photo-size-2-5195277267301956971-y.jpg"
                alt="Aisle Wanderer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In e-commerce, showing a user ten similar items is standard practice. In groceries, it's a disaster. With 20+ items per cart, this approach creates massive cognitive load, causing users to abandon purchases and shrinking the transaction value.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The challenge was to get the first product suggestion right, every time.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We solved this by creating a dynamic, LLM-based taxonomy from the ground up. This system learned the deep attributes of several million grocery SKUs, allowing it to make highly accurate, single best-match recommendations that traditional ML models couldn't.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Single-item recommendation accuracy that outperformed traditional similarity engines</li>
                <li>Reduced cognitive load for users during the shopping experience</li>
                <li>Increased transaction values through more relevant product suggestions</li>
                <li>Scalable system handling millions of grocery SKUs</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
