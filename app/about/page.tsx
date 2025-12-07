import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: "About Us - VodoLavr AI Consulting",
  description: "Meet the team behind VodoLavr. Ex-Google and Ex-Yandex engineers helping companies integrate AI and LLMs into their operations.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us - VodoLavr AI Consulting',
    description: 'Meet the team behind VodoLavr. Ex-Google and Ex-Yandex engineers helping companies integrate AI and LLMs into their operations.',
    url: 'https://vodolavr.com/about',
  },
}

// Person JSON-LD schemas for E-E-A-T
const personSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Petr Lavrov",
    "jobTitle": "Staff LLM Engineer",
    "description": "Staff LLM Engineer with experience at Google and Yandex. Specializes in large language model integration and AI system architecture.",
    "worksFor": {
      "@type": "Organization",
      "name": "VodoLavr"
    },
    "alumniOf": [
      { "@type": "Organization", "name": "Google" },
      { "@type": "Organization", "name": "Yandex" }
    ],
    "knowsAbout": ["Large Language Models", "Machine Learning", "AI Engineering", "Prompt Engineering", "RAG Systems"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mikhail Vodolagin",
    "jobTitle": "Chief Data Officer & CEO",
    "description": "CDO and CEO with expertise in scaling businesses and implementing AI transformation strategies.",
    "worksFor": {
      "@type": "Organization",
      "name": "VodoLavr"
    },
    "knowsAbout": ["Business Strategy", "AI Transformation", "Startup Scaling", "Technology Leadership"]
  }
]

// AboutPage JSON-LD
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About VodoLavr",
  "description": "Learn about VodoLavr's mission, team, and approach to AI consulting",
  "url": "https://vodolavr.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "VodoLavr",
    "foundingDate": "2024",
    "description": "AI Transformation & LLM Consulting firm helping companies integrate AI into their operations"
  },
  "dateModified": "2025-12-07"
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemas[0]) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemas[1]) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              About VodoLavr
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We bring <strong>enterprise AI expertise</strong> from leading tech companies to help businesses integrate <strong>large language models</strong> effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 lg:px-8 bg-accent/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              VodoLavr helps companies integrate <strong>AI</strong> and <strong>LLMs</strong> into their operations without the buzzwords.
              We focus on practical solutions that deliver measurable results.
            </p>
            <p>
              Our approach combines deep technical expertise with business strategy.
              We've worked with technologies from{" "}
              <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                OpenAI<ExternalLink className="h-3 w-3" />
              </a>,{" "}
              <a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Google Cloud AI<ExternalLink className="h-3 w-3" />
              </a>, and{" "}
              <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                Anthropic<ExternalLink className="h-3 w-3" />
              </a>{" "}
              to build production-ready AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                  <img
                    src="/images/design-mode/BE7F89FE-C10F-43D8-A3B8-E8D28F8D4650_1_105_c.jpeg"
                    alt="Petr Lavrov - Staff LLM Engineer at VodoLavr"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Petr Lavrov</h3>
                <p className="text-primary font-medium mb-4">Staff LLM Engineer</p>
                <p className="text-muted-foreground mb-4">
                  Ex-<a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google</a>,
                  Ex-<a href="https://yandex.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Yandex</a>
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Petr brings years of experience from leading tech companies.
                    He specializes in <strong>LLM integration</strong>, <strong>RAG systems</strong>, and <strong>AI architecture</strong>.
                  </p>
                  <p><strong>Expertise:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Large Language Model Engineering</li>
                    <li>Prompt Engineering & Optimization</li>
                    <li>RAG (Retrieval-Augmented Generation)</li>
                    <li>AI System Architecture</li>
                    <li>Production ML Systems</li>
                  </ul>
                </div>
                <a href="https://calendly.com/petr-vodolavr" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full gap-2 mt-6">
                    <Calendar className="h-4 w-4" />
                    Book a Call with Petr
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                  <img
                    src="/images/design-mode/telegram-peer-photo-size-2-1752051781949564841-1-0-0.jpg"
                    alt="Mikhail Vodolagin - CEO at VodoLavr"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Mikhail Vodolagin</h3>
                <p className="text-primary font-medium mb-4">CDO, CEO</p>
                <p className="text-muted-foreground mb-4">Startup & Enterprise Leadership</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>
                    Mikhail is an expert in scaling businesses and implementing <strong>AI transformation</strong> strategies.
                    He bridges the gap between technology and business value.
                  </p>
                  <p><strong>Expertise:</strong></p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>AI Strategy & Roadmapping</li>
                    <li>Business Transformation</li>
                    <li>Startup Scaling</li>
                    <li>Technology Leadership</li>
                    <li>Product Development</li>
                  </ul>
                </div>
                <a href="https://calendly.com/mikhail-vodolavr" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full gap-2 mt-6">
                    <Calendar className="h-4 w-4" />
                    Book a Call with Mikhail
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-6 lg:px-8 bg-accent/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Technologies We Work With</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">LLM Platforms</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <a href="https://openai.com/api" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    OpenAI GPT-4 & GPT-4 Turbo
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <a href="https://www.anthropic.com/claude" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    Anthropic Claude
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <a href="https://cloud.google.com/vertex-ai/docs/generative-ai/model-reference/gemini" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    Google Gemini
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Open-source models (Llama, Mistral)
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Frameworks & Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <a href="https://www.langchain.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    LangChain
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <a href="https://n8n.io" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    n8n Workflow Automation
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Vector databases (Pinecone, Weaviate)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Cloud infrastructure (AWS, GCP, Azure)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help your business leverage AI effectively.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" className="gap-2">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/#services">
              <Button size="lg" variant="outline" className="bg-transparent">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 VodoLavr. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
