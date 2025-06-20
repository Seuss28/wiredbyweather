import PodcastCard from '@/components/ui/PodcastCard'

export default function PodcastPage() {
  const episodes = [
    {
      title: "Episode 1 – The Climate Signal",
      videoUrl: "/podcasts/episode1.mp4",
      transcript: "In this episode, we explore...",
      keywords: ["climate", "education", "ocean"]
    }
  ]

  return (
    <div className="p-6 bg-background text-foreground space-y-6">
      <h1 className="text-3xl font-bold">Podcast Archive</h1>
      {episodes.map((ep, idx) => (
        <PodcastCard key={idx} {...ep} />
      ))}
    </div>
  )
}