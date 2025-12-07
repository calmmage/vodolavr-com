import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ParticleBackground } from "@/components/particle-background"

export const metadata: Metadata = {
  title: "Privacy Policy - VodoLavr",
  description: "Privacy Policy for VodoLavr AI Consulting. Learn how we collect, use, and protect your data.",
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - VodoLavr',
    description: 'Privacy Policy for VodoLavr AI Consulting. Learn how we collect, use, and protect your data.',
    url: 'https://vodolavr.com/privacy',
  },
}

const privacySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy",
  "description": "Privacy Policy for VodoLavr AI Consulting",
  "url": "https://vodolavr.com/privacy",
  "dateModified": "2025-12-07",
  "publisher": {
    "@type": "Organization",
    "name": "VodoLavr"
  }
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <ParticleBackground />
      <Navbar />

      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: December 7, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                VodoLavr ("we", "our", "us") respects your privacy.
                This policy explains how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Contact information:</strong> Name, email, company name</li>
                <li><strong>Communication data:</strong> Messages sent through our contact form</li>
                <li><strong>Business information:</strong> Project details shared during consultations</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We automatically collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Usage data:</strong> Pages visited, time spent on site</li>
                <li><strong>Device information:</strong> Browser type, operating system</li>
                <li><strong>Analytics data:</strong> Via Vercel Analytics (anonymized)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>To respond to your inquiries and requests</li>
                <li>To provide consulting services</li>
                <li>To improve our website and services</li>
                <li>To send relevant updates (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information.
                We may share data with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
                <li><strong>Service providers:</strong> Hosting (Vercel), analytics, scheduling (Calendly)</li>
                <li><strong>Legal requirements:</strong> When required by law or legal process</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your data.
                This includes encryption, secure hosting, and access controls.
                However, no internet transmission is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use essential cookies to ensure our website functions properly.
                Analytics cookies help us understand site usage (Vercel Analytics).
                You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal data only as long as necessary for stated purposes.
                Business records may be kept longer for legal compliance.
                You can request deletion of your data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically.
                We will notify you of significant changes via email or website notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related questions or requests, contact us at{" "}
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
