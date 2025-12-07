import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vodolavr.com'
  const lastModified = new Date()

  // Case study IDs
  const caseStudies = [
    'retail-ai-assistant',
    'aisle-wanderer',
    'document-processing',
    'ai-quality-control',
    'recommendation-engine',
    'signal',
    'supply-chain-optimization',
    'customer-sentiment-analysis',
    'workflow-automation',
  ]

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Case study pages
    ...caseStudies.map((id) => ({
      url: `${baseUrl}/cases/${id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
