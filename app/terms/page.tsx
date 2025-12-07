import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"

export const metadata: Metadata = {
  title: "Terms of Service - VodoLavr",
  description: "Terms of Service for VodoLavr AI Consulting services. Read our terms and conditions for consulting engagements.",
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service - VodoLavr',
    description: 'Terms of Service for VodoLavr AI Consulting services.',
    url: 'https://vodolavr.com/terms',
  },
}

const termsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Service",
  "description": "Terms of Service for VodoLavr AI Consulting",
  "url": "https://vodolavr.com/terms",
  "dateModified": "2025-12-07",
  "publisher": {
    "@type": "Organization",
    "name": "VodoLavr"
  }
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <ParticleBackground />
      <Navbar />

      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: December 7, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using VodoLavr's services, you agree to these Terms of Service.
                If you disagree with any part, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                VodoLavr provides AI consulting services including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>AI Strategy Consulting</li>
                <li>LLM Integration</li>
                <li>Prompt Engineering</li>
                <li>Infrastructure Setup</li>
                <li>Team Training</li>
                <li>Continuous Improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Consulting Engagements</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our standard consulting rate is $1,200 per hour.
                Specific terms for each engagement will be outlined in a separate agreement.
                All engagements require a signed statement of work before commencement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless otherwise specified in a separate agreement:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
                <li>Deliverables created specifically for clients belong to the client</li>
                <li>VodoLavr retains rights to pre-existing tools and methodologies</li>
                <li>General knowledge gained during engagements remains with VodoLavr</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We treat all client information as confidential.
                We do not share client data with third parties without explicit consent.
                Confidentiality obligations survive the termination of any engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                VodoLavr provides consulting services on an "as is" basis.
                We are not liable for indirect, incidental, or consequential damages.
                Our total liability is limited to the fees paid for the specific engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate an engagement with 30 days written notice.
                Client is responsible for payment of services rendered through termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time.
                Continued use of our services constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, contact us at{" "}
                <a href="mailto:hello@vodolavr.com" className="text-primary hover:underline">
                  hello@vodolavr.com
                </a>
              </p>
            </section>
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
