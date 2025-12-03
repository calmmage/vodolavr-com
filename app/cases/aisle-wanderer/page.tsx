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
              <p className="text-xl text-muted-foreground mb-6">Autonomous Substitution Engine</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">E-commerce</Badge>
                <Badge variant="secondary">Smart Search</Badge>
                <Badge variant="secondary">LLM</Badge>
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
                Standard search engines tolerate noise; if a user searches for "honey" and sees "honey shampoo" in the mix, they just ignore it. But for automatic cart substitution, precision is binary.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The "Repeat Cart" engine - intended to be a key driver for recurring revenue - was backfiring. Because existing algorithms matched keywords without understanding context, they frequently substituted fresh lemons with lemon-scented dish soap. This forced users to manually audit every single automated choice, defeating the entire purpose of convenience and causing them to abandon the workflow entirely.
              </p>

              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We moved beyond keyword matching by building a Dynamic Taxonomy Engine. While retail giants spend millions on manual data tagging, we automated this using LLMs to generate deep, context-aware tag clouds for millions of SKUs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This system introduced "common sense" to the inventory - parsing the difference between an item's descriptive tags and its actual utility, automatically filtering out matches that are technically similar but practically irrelevant.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li><strong>94% User Acceptance Rate</strong> on automated substitutions (vs. 70% industry baseline).</li>
                <li><strong>Revitalized the "Repeat Order" feature</strong>, turning a broken touchpoint into a reliable revenue driver.</li>
                <li><strong>Automated Taxonomy:</strong> Achieved enterprise-grade categorization depth without the manual labor costs usually required to maintain it.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
