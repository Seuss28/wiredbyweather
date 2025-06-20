import NewsletterSwiper from '@/components/ui/NewsletterSwiper'

export default function NewsletterPage() {
  const newsletters = [
    {
      title: "June 2025 Edition",
      pdfUrls: ["/newsletters/june-2025-p1.pdf", "/newsletters/june-2025-p2.pdf"]
    }
  ]

  return (
    <div className="p-6 bg-background text-foreground space-y-6">
      <h1 className="text-3xl font-bold">Monthly Newsletter</h1>
      <NewsletterSwiper newsletters={newsletters} />
    </div>
  )
}