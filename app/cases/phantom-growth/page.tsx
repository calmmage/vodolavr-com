import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function PhantomGrowthCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Phantom Growth</h1>
              <p className="text-xl text-muted-foreground mb-6">The Mismatch Between Growth Metrics and Actual Revenue</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Fraud Prevention</Badge>
                <Badge variant="secondary">Unit Economics</Badge>
                <Badge variant="secondary">ML</Badge>
                <Badge variant="secondary">Gaming</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/placeholder.svg"
                alt="Phantom Growth"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The client's user acquisition metrics were breaking records, but revenue per user was crashing. An internal audit triggered by industry rumors revealed the cause: the "new users" were mostly emulators. A network of bonus hunters was exploiting the sign-up incentives, costing the company roughly $2M per month in wasted marketing spend.
              </p>

              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We implemented a pragmatic identity layer to filter out non-human behavior. Instead of training complex AI models, we focused on "good enough" friction: blocking known emulator fingerprints, mapping affiliate payout chains, and flagging identical device configurations. We didn't need to stop 100% of the attacks; we just needed to make the cost of faking a user higher than the sign-up bonus.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li><strong>Monthly losses dropped from ~$2M to ~$0.5M</strong> within months.</li>
                <li><strong>Recalibrated marketing data</strong> to show real user growth, eliminating the phantom spikes caused by bot farms.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
