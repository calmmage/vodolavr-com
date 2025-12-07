import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from 'lucide-react'

interface CaseStudy {
  title: string
  description: string
  tags: string[]
  challenge: string
  solution: string
  results: string[]
}

const casesData: Record<string, CaseStudy> = {
  "retail-ai-assistant": {
    title: "Retail AI Assistant",
    description: "Built an intelligent customer support system that handles 80% of queries automatically",
    tags: ["langchain", "ai transformation", "automation"],
    challenge:
      "A major retail company was overwhelmed with customer support requests, leading to long wait times and customer dissatisfaction.",
    solution:
      "We implemented a sophisticated AI assistant using LangChain that understands context, retrieves relevant product information, and handles complex multi-turn conversations.",
    results: [
      "80% of customer queries resolved automatically",
      "Average response time reduced from 4 hours to 30 seconds",
      "Customer satisfaction score improved by 35%",
      "Support team capacity freed up for complex cases",
    ],
  },
  "document-processing": {
    title: "Document Processing Pipeline",
    description: "Automated contract analysis and data extraction for legal firm",
    tags: ["n8n", "data workflow", "automation"],
    challenge:
      "A legal firm spent countless hours manually reviewing and extracting data from contracts and legal documents.",
    solution:
      "We built an automated workflow using n8n that processes documents, extracts key clauses, identifies risks, and generates structured summaries.",
    results: [
      "Document processing time reduced by 75%",
      "99% accuracy in data extraction",
      "Standardized output format across all document types",
      "Automated risk flagging saved 100+ hours monthly",
    ],
  },
  "recommendation-engine": {
    title: "Content Recommendation Engine",
    description: "Fine-tuned model for personalized content suggestions with 3x engagement",
    tags: ["fine-tuning", "ai transformation"],
    challenge:
      "A media platform struggled with low user engagement and generic content recommendations that didn't match user preferences.",
    solution:
      "We fine-tuned a recommendation model on user behavior data, creating a system that learns individual preferences and suggests highly relevant content.",
    results: [
      "3x increase in user engagement metrics",
      "45% longer average session duration",
      "Content click-through rate improved by 60%",
      "Personalized recommendations for 1M+ users",
    ],
  },
  "supply-chain-optimization": {
    title: "Supply Chain Optimization",
    description: "ML-powered demand forecasting reducing inventory costs by 25%",
    tags: ["ai transformation", "data workflow"],
    challenge:
      "A manufacturing company faced inventory challenges with frequent stockouts and excess inventory leading to waste and lost revenue.",
    solution:
      "We developed an ML-powered forecasting system that analyzes historical data, market trends, and external factors to predict demand accurately.",
    results: [
      "Inventory costs reduced by 25%",
      "Stockouts decreased by 60%",
      "Forecasting accuracy improved to 92%",
      "Optimized reorder points across 500+ SKUs",
    ],
  },
  "customer-sentiment-analysis": {
    title: "Customer Sentiment Analysis",
    description: "Real-time sentiment tracking across social media and support channels",
    tags: ["langchain", "automation", "data workflow"],
    challenge:
      "A consumer brand needed to monitor customer sentiment across multiple channels but lacked real-time insights and actionable intelligence.",
    solution:
      "We created a sentiment analysis pipeline that processes social media, reviews, and support tickets in real-time, identifying trends and alerting teams to issues.",
    results: [
      "Real-time sentiment tracking across 10+ channels",
      "Issue detection and escalation within minutes",
      "Sentiment trends dashboard for executive team",
      "Proactive response reduced negative sentiment by 40%",
    ],
  },
  "workflow-automation": {
    title: "Enterprise Workflow Automation",
    description: "Connected 15+ tools with intelligent routing and decision-making",
    tags: ["n8n", "automation", "ai transformation"],
    challenge:
      "An enterprise company had fragmented workflows across multiple tools, leading to inefficiency, data silos, and manual handoffs.",
    solution:
      "We built a comprehensive automation system using n8n that connects all tools, intelligently routes requests, and makes decisions based on business rules.",
    results: [
      "15+ tools integrated into unified workflow",
      "Manual processes reduced by 70%",
      "Data consistency improved across systems",
      "Employee productivity increased by 40%",
    ],
  },
}

// Generate metadata for each case study page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const caseStudy = casesData[id]

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found - VodoLavr',
    }
  }

  return {
    title: `${caseStudy.title} - Case Study | VodoLavr`,
    description: caseStudy.description,
    openGraph: {
      title: `${caseStudy.title} - Case Study | VodoLavr`,
      description: caseStudy.description,
      type: 'article',
      url: `https://vodolavr.com/cases/${id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} - Case Study | VodoLavr`,
      description: caseStudy.description,
    },
    alternates: {
      canonical: `/cases/${id}`,
    },
  }
}

// Generate Article JSON-LD schema for case study
function generateArticleSchema(id: string, caseStudy: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.description,
    "url": `https://vodolavr.com/cases/${id}`,
    "author": {
      "@type": "Organization",
      "name": "VodoLavr",
      "url": "https://vodolavr.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "VodoLavr",
      "url": "https://vodolavr.com"
    },
    "articleSection": "Case Study",
    "keywords": caseStudy.tags.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://vodolavr.com/cases/${id}`
    }
  }
}

export default async function CasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const caseStudy = casesData[id]

  if (!caseStudy) {
    return <div className="min-h-screen pt-32 px-6">Case not found</div>
  }

  const articleSchema = generateArticleSchema(id, caseStudy)

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Link href="/#cases">
            <Button variant="ghost" className="gap-2 mb-8 -ml-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Cases
            </Button>
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{caseStudy.title}</h1>
          <p className="text-xl text-muted-foreground text-balance">{caseStudy.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl space-y-12">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Results</h2>
              <ul className="space-y-4">
                {caseStudy.results.map((result: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-1">✓</span>
                    <span className="text-muted-foreground leading-relaxed">{result}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-accent/30 border-border">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
              <p className="text-muted-foreground mb-8">Let's discuss how we can help your business</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg">Book a Call</Button>
                </a>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="bg-transparent">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Vodolav. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { id: "retail-ai-assistant" },
    { id: "document-processing" },
    { id: "recommendation-engine" },
    { id: "supply-chain-optimization" },
    { id: "customer-sentiment-analysis" },
    { id: "workflow-automation" },
  ]
}
