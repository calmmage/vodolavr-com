import type React from "react"
import type { Metadata } from "next"
import { Geist } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VodoLavr - AI Transformation & LLM Consulting",
  description: "We help companies integrate AI and large language models into their operations",
  generator: "v0.app",
  metadataBase: new URL('https://vodolavr.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vodolavr.com',
    siteName: 'VodoLavr',
    title: 'VodoLavr - AI Transformation & LLM Consulting',
    description: 'We help companies integrate AI and large language models into their operations without the buzzwords.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VodoLavr - AI Transformation & LLM Consulting',
    description: 'We help companies integrate AI and large language models into their operations without the buzzwords.',
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

// Organization JSON-LD schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "VodoLavr",
  "description": "AI Transformation & LLM Consulting - We help companies integrate AI and large language models into their operations",
  "url": "https://vodolavr.com",
  "email": "hello@vodolavr.com",
  "priceRange": "$1,200/hour",
  "areaServed": "Worldwide",
  "serviceType": ["AI Consulting", "LLM Integration", "Machine Learning", "Automation"],
  "founder": [
    {
      "@type": "Person",
      "name": "Petr Lavrov",
      "jobTitle": "Staff LLM Engineer",
      "description": "Ex-Google, Ex-Yandex"
    },
    {
      "@type": "Person",
      "name": "Mikhail Vodolagin",
      "jobTitle": "CDO, CEO",
      "description": "Expert in scaling businesses and implementing transformative technology strategies"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AI Consulting Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Strategy Consulting",
          "description": "Identify high-impact AI opportunities and create actionable roadmaps"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LLM Integration",
          "description": "Deploy large language models tailored to your specific use cases"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Prompt Engineering",
          "description": "Design effective prompts and workflows to maximize AI system performance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Infrastructure Setup",
          "description": "Build scalable, secure infrastructure for AI applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Team Training",
          "description": "Equip your team with knowledge and skills for AI technologies"
        }
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
