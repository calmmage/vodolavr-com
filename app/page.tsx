"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"
import { ArrowRight, Calendar } from 'lucide-react'
import { useState, useEffect, useRef } from "react"

const heroBadges = [
  { label: "AI", filter: "ai transformation" },
  { label: "ML", filter: "fine-tuning" },
  { label: "LLM", filter: "langchain" },
  { label: "Data", filter: "data workflow" },
  { label: "Auto", filter: "automation" },
]

const cases = [
  {
    id: "retail-ai-assistant",
    title: "Retail AI Assistant",
    description: "Built an intelligent customer support system that handles 80% of queries automatically",
    tags: ["langchain", "chat", "ai transformation", "automation"],
    image: "/ecommerce-shopping-interface.jpg",
  },
  {
    id: "aisle-wanderer",
    title: "Aisle Wanderer",
    description: "Product similarity engine using LLM-based taxonomy for accurate single-item grocery recommendations",
    tags: ["openai api", "ai transformation", "fine-tuning"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-cloud-photo-size-2-5195277267301956971-y-lzKKSpoUXoTFVgssFb1jYCWYeonFKe.jpg",
  },
  {
    id: "document-processing",
    title: "Document Processing Pipeline",
    description: "Automated contract analysis and data extraction for legal firm",
    tags: ["n8n", "data workflow", "automation"],
    image: "/document-analysis-dashboard.jpg",
  },
  {
    id: "ai-quality-control",
    title: "AI Quality Control for Sales Floor",
    description: "Automated system using LLMs to monitor and analyze sales conversations against brand guidelines",
    tags: ["ai transformation", "automation", "langchain", "voice"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-cloud-photo-size-2-5195277267301956972-y-Q0D1rfjZq5TNP4Ryn3HXjNAliFGn8r.jpg",
  },
  {
    id: "recommendation-engine",
    title: "Content Recommendation Engine",
    description: "Fine-tuned model for personalized content suggestions with 3x engagement",
    tags: ["fine-tuning", "ai transformation"],
    image: "/data-visualization-patterns.jpg",
  },
  {
    id: "signal",
    title: "Signal",
    description: "Intelligent research assistant using enhanced LLM and RAG to synthesize insights from diverse sources",
    tags: ["langchain", "chat", "ai transformation", "data workflow"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-cloud-photo-size-2-5195277267301956973-y-XDPFcNdTDWzLRmodIABL2aTapqdwfP.jpg",
  },
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization",
    description: "ML-powered demand forecasting reducing inventory costs by 25%",
    tags: ["ai transformation", "data workflow"],
    image: "/logistics-analytics-display.jpg",
  },
  {
    id: "customer-sentiment-analysis",
    title: "Customer Sentiment Analysis",
    description: "Real-time sentiment tracking across social media and support channels",
    tags: ["langchain", "automation", "data workflow"],
    image: "/sentiment-heatmap-visualization.jpg",
  },
  {
    id: "workflow-automation",
    title: "Enterprise Workflow Automation",
    description: "Connected 15+ tools with intelligent routing and decision-making",
    tags: ["n8n", "automation", "ai transformation"],
    image: "/workflow-automation-dashboard.jpg",
  },
]

const tagGroups = {
  Tech: ["n8n", "langchain", "openai api"],
  Modality: ["chat", "image generation", "voice"],
  Goal: ["ai transformation", "data workflow", "fine-tuning", "automation"],
}

// FAQ data for both schema and display
const faqData = [
  {
    question: "What AI consulting services does VodoLavr offer?",
    answer: "VodoLavr offers AI Strategy Consulting, LLM Integration, Prompt Engineering, Infrastructure Setup, Team Training, and Continuous Improvement services. We help companies integrate AI and large language models into their operations."
  },
  {
    question: "What is the consulting rate for VodoLavr?",
    answer: "Our consulting rate is $1,200 per hour. For simple cases, you can book a call directly. For complex projects, reach out via our contact form."
  },
  {
    question: "Who are the founders of VodoLavr?",
    answer: "VodoLavr was founded by Petr Lavrov (Staff LLM Engineer, Ex-Google, Ex-Yandex) and Mikhail Vodolagin (CDO, CEO with expertise in scaling businesses and implementing transformative technology strategies)."
  },
  {
    question: "What technologies does VodoLavr work with?",
    answer: "VodoLavr works with various AI technologies including LangChain, OpenAI API, n8n, RAG (Retrieval-Augmented Generation), fine-tuning, voice AI, and conversational AI systems."
  },
  {
    question: "What results can I expect from AI consulting?",
    answer: "Results vary by project but our case studies show outcomes like 80% automated query resolution, 75% reduction in processing time, 3x increase in user engagement, and 25% reduction in inventory costs through AI-powered solutions."
  }
]

// FAQ JSON-LD schema with dateModified
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2025-12-07",
  "mainEntity": faqData.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
}

// Services data for both schema and display
const servicesData = [
  {
    title: "AI Strategy Consulting",
    description: "We work with your team to identify high-impact AI opportunities and create actionable roadmaps.",
  },
  {
    title: "LLM Integration",
    description: "Deploy large language models tailored to your specific use cases and requirements.",
  },
  {
    title: "Prompt Engineering",
    description: "Design effective prompts and workflows to maximize AI system performance and reliability.",
  },
  {
    title: "Infrastructure Setup",
    description: "Build scalable, secure infrastructure for your AI applications from the ground up.",
  },
  {
    title: "Team Training",
    description: "Equip your team with the knowledge and skills to work effectively with AI technologies.",
  },
  {
    title: "Continuous Improvement",
    description: "Monitor, analyze, and optimize your AI systems for peak performance over time.",
  },
]

// Service schema for individual services
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Consulting",
  "provider": {
    "@type": "Organization",
    "name": "VodoLavr"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Consulting Services",
    "itemListElement": servicesData.map((service, index) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.description
      }
    }))
  }
}

export default function HomePage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [showAllCases, setShowAllCases] = useState(false)
  const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const casesRef = useRef<HTMLElement>(null)

  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  // Typewriter effect
  useEffect(() => {
    const currentLabel = heroBadges[currentBadgeIndex].label

    if (isTyping) {
      // Typing out
      if (displayedText.length < currentLabel.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentLabel.slice(0, displayedText.length + 1))
        }, 150)
        return () => clearTimeout(timeout)
      } else {
        // Done typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      // Deleting
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 75)
        return () => clearTimeout(timeout)
      } else {
        // Done deleting, move to next badge
        setCurrentBadgeIndex((prev) => (prev + 1) % heroBadges.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, isTyping, currentBadgeIndex])

  const handleBadgeClick = () => {
    const badge = heroBadges[currentBadgeIndex]
    setSelectedTag(badge.filter)
    casesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const filteredCases = selectedTag ? cases.filter((c) => c.tags.includes(selectedTag)) : cases

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight inline-flex items-center">
              <span>VodoLavr</span>
              <button
                onClick={handleBadgeClick}
                className="ml-4 w-[130px] lg:w-[180px] text-left bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient hover:opacity-80 transition-opacity cursor-pointer"
                title={`Click to see ${heroBadges[currentBadgeIndex].label} cases`}
              >
                <span>{displayedText}</span>
                <span className="text-white animate-blink">_</span>
              </button>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              We help companies integrate AI into their operations without the buzzwords
            </p>
            <div className="inline-block bg-accent/50 px-6 py-3 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Consulting Rate</p>
              <p className="text-2xl font-bold">$1,200 / hour</p>
            </div>
            <div className="flex items-center justify-center gap-4 pt-6">
              <a href="#contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" className="gap-2">
                  Our Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-8 bg-accent/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="aspect-square bg-muted rounded-lg mb-6 overflow-hidden">
                  <img
                    src="/images/design-mode/BE7F89FE-C10F-43D8-A3B8-E8D28F8D4650_1_105_c.jpeg"
                    alt="Petr Lavrov"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Petr Lavrov</h3>
                <p className="text-muted-foreground mb-4">Staff LLM Engineer, Ex-Google, Ex-Yandex</p>
                <p className="text-sm leading-relaxed mb-4">
                  Bringing years of experience from leading tech companies to solve complex AI challenges
                </p>
                <a href="https://calendly.com/petr-vodolavr" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full gap-2 mt-4">
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
                    alt="Mikhail Vodolagin"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Mikhail Vodolagin</h3>
                <p className="text-muted-foreground mb-4">CDO, CEO, Startups</p>
                <p className="text-sm leading-relaxed mb-4">
                  Expert in scaling businesses and implementing transformative technology strategies
                </p>
                <a href="https://calendly.com/mikhail-vodolavr" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="w-full gap-2 mt-4">
                    <Calendar className="h-4 w-4" />
                    Book a Call with Mikhail
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What We Help You With</h2>
            <p className="text-lg text-muted-foreground">
              Practical <strong>AI solutions</strong> for real business challenges
            </p>
          </div>

          {/* Services as semantic list */}
          <ul className="grid md:grid-cols-3 gap-6 mb-16 list-none p-0">
            {servicesData.map((item, i) => (
              <li key={i}>
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="bg-accent/30 rounded-lg p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the best way to work with us based on your needs
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  <Calendar className="h-5 w-5" />
                  Book a Call
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              For simple cases, book a call directly. For complex projects, reach out via our contact form.
            </p>
          </div>
        </div>
      </section>

      <section id="cases" ref={casesRef} className="py-20 px-6 lg:px-8 bg-accent/30">
        <div className="container mx-auto max-w-7xl">
          {/* Mobile and Tablet Layout */}
          <div className="block xl:hidden">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold mb-6">Case Studies</h2>
            </div>

            {/* Mobile/Tablet filter buttons */}
            <div className="space-y-3 mb-8">
              {Object.entries(tagGroups).map(([groupName, tags], index) => (
                <div key={groupName} className="flex flex-wrap items-center gap-2">
                  {index === 0 && (
                    <>
                      <Button
                        variant={selectedTag === null ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTag(null)}
                        className={selectedTag === null ? "" : "bg-transparent"}
                      >
                        All
                      </Button>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap">
                        {groupName}:
                      </span>
                    </>
                  )}
                  {index !== 0 && (
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap">
                      {groupName}:
                    </span>
                  )}
                  {tags.map((tag) => (
                    <Button
                      key={tag}
                      variant={selectedTag === tag ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTag(tag)}
                      className={selectedTag === tag ? "" : "bg-transparent"}
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(showAllCases ? filteredCases : filteredCases.slice(0, 3)).map((caseStudy) => (
                <Link key={caseStudy.id} href={`/cases/${caseStudy.id}`}>
                  <Card className="group bg-card border-border transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden bg-muted">
                        <img
                          src={caseStudy.image || "/placeholder.svg"}
                          alt={caseStudy.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {caseStudy.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {caseStudy.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {!showAllCases && filteredCases.length > 3 && (
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAllCases(true)}
                  className="bg-transparent"
                >
                  More Cases ({filteredCases.length - 3} more)
                </Button>
              </div>
            )}
          </div>

          {/* Desktop Layout - 4 column grid */}
          <div className="hidden xl:block relative">
            <div className="relative">
              {/* Title block positioned absolutely to span columns 2-3 */}
              <div className="absolute left-[25%] right-[25%] top-0 z-10 p-8 bg-background/95 backdrop-blur-sm rounded-lg border border-border">
                <h2 className="text-4xl font-bold mb-6 text-left">Case Studies</h2>
                
                {/* Filter buttons - inline groups */}
                <div className="space-y-3">
                  {Object.entries(tagGroups).map(([groupName, tags], index) => (
                    <div key={groupName} className="flex flex-wrap items-center gap-2">
                      {index === 0 && (
                        <>
                          <Button
                            variant={selectedTag === null ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTag(null)}
                            className={selectedTag === null ? "" : "bg-transparent text-xs px-3 py-1"}
                          >
                            All
                          </Button>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap">
                            {groupName}:
                          </span>
                        </>
                      )}
                      {index !== 0 && (
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide whitespace-nowrap">
                          {groupName}:
                        </span>
                      )}
                      {tags.map((tag) => (
                        <Button
                          key={tag}
                          variant={selectedTag === tag ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTag(tag)}
                          className={selectedTag === tag ? "" : "bg-transparent text-xs px-3 py-1"}
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-6" style={{ paddingTop: '0' }}>
                {/* Column 1 - starts at top */}
                <div className="space-y-6">
                  {[0, 4].map((idx) => {
                    const caseStudy = cases[idx]
                    if (!caseStudy) return null
                    const isHighlighted = !selectedTag || caseStudy.tags.includes(selectedTag)
                    return (
                      <Link key={caseStudy.id} href={`/cases/${caseStudy.id}`}>
                        <Card
                          className={`group bg-card border-border transition-all duration-300 hover:scale-[1.02] ${
                            isHighlighted ? "opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] border-white/40" : "opacity-30"
                          }`}
                        >
                          <CardContent className="p-0">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                              <img
                                src={caseStudy.image || "/placeholder.svg"}
                                alt={caseStudy.title}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                {caseStudy.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                {caseStudy.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {caseStudy.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  })}
                </div>

                {/* Column 2 - pushed down by title block */}
                <div className="space-y-6" style={{ marginTop: '380px' }}>
                  {[1, 7].map((idx) => {
                    const caseStudy = cases[idx]
                    if (!caseStudy) return null
                    const isHighlighted = !selectedTag || caseStudy.tags.includes(selectedTag)
                    return (
                      <Link key={caseStudy.id} href={`/cases/${caseStudy.id}`}>
                        <Card
                          className={`group bg-card border-border transition-all duration-300 hover:scale-[1.02] ${
                            isHighlighted ? "opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] border-white/40" : "opacity-30"
                          }`}
                        >
                          <CardContent className="p-0">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                              <img
                                src={caseStudy.image || "/placeholder.svg"}
                                alt={caseStudy.title}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                {caseStudy.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                {caseStudy.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {caseStudy.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  })}
                </div>

                {/* Column 3 - pushed down by title block */}
                <div className="space-y-6" style={{ marginTop: '380px' }}>
                  {[2, 6].map((idx) => {
                    const caseStudy = cases[idx]
                    if (!caseStudy) return null
                    const isHighlighted = !selectedTag || caseStudy.tags.includes(selectedTag)
                    return (
                      <Link key={caseStudy.id} href={`/cases/${caseStudy.id}`}>
                        <Card
                          className={`group bg-card border-border transition-all duration-300 hover:scale-[1.02] ${
                            isHighlighted ? "opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] border-white/40" : "opacity-30"
                          }`}
                        >
                          <CardContent className="p-0">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                              <img
                                src={caseStudy.image || "/placeholder.svg"}
                                alt={caseStudy.title}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                {caseStudy.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                {caseStudy.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {caseStudy.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  })}
                </div>

                {/* Column 4 - starts at top */}
                <div className="space-y-6">
                  {[3, 5, 8].map((idx) => {
                    const caseStudy = cases[idx]
                    if (!caseStudy) return null
                    const isHighlighted = !selectedTag || caseStudy.tags.includes(selectedTag)
                    return (
                      <Link key={caseStudy.id} href={`/cases/${caseStudy.id}`}>
                        <Card
                          className={`group bg-card border-border transition-all duration-300 hover:scale-[1.02] ${
                            isHighlighted ? "opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.3)] border-white/40" : "opacity-30"
                          }`}
                        >
                          <CardContent className="p-0">
                            <div className="relative aspect-video overflow-hidden bg-muted">
                              <img
                                src={caseStudy.image || "/placeholder.svg"}
                                alt={caseStudy.title}
                                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                {caseStudy.title}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                {caseStudy.description}
                              </p>
                              <div className="flex flex-wrap gap-1">
                                {caseStudy.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - visible for users and AI */}
      <section id="faq" className="py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our <strong>AI consulting</strong> services
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((item, i) => (
              <Card key={i} className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">Let's discuss how we can help transform your business with AI</p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    required
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">Or reach us directly at:</p>
                <a href="mailto:hello@vodolavr.com" className="text-foreground hover:text-primary transition-colors">
                  hello@vodolavr.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 VodoLavr. All rights reserved.</p>
            <div className="flex items-center flex-wrap justify-center gap-6">
              <a href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cases
              </a>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
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
