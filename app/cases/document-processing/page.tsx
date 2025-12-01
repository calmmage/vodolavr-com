import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

export default function DocumentProcessingCase() {
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
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Document Processing Pipeline</h1>
              <p className="text-xl text-muted-foreground mb-6">Automated contract analysis and data extraction</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">n8n</Badge>
                <Badge variant="secondary">data workflow</Badge>
                <Badge variant="secondary">automation</Badge>
              </div>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src="/document-analysis-dashboard.jpg"
                alt="Document Processing"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A legal firm was processing hundreds of contracts monthly, with attorneys spending countless hours manually extracting key terms, dates, and clauses. This manual process was prone to errors and created significant bottlenecks in the workflow.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We built an automated document processing pipeline using n8n to orchestrate the workflow and LLMs for intelligent extraction. The system automatically ingests contracts, identifies key information, extracts relevant data points, and populates structured databases.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The pipeline includes validation steps, anomaly detection, and human-in-the-loop review for edge cases, ensuring high accuracy while maintaining efficiency.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>95% reduction in manual document processing time</li>
                <li>99.2% accuracy in data extraction across standard contract types</li>
                <li>Attorneys freed to focus on high-value legal analysis</li>
                <li>Scalable system capable of handling 10x volume without additional staff</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
