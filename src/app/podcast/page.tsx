import PodcastCard from "@/components/ui/PodcastCard"

export default function PodcastPage() {
  return (
    <div className="p-8 space-y-12">
      <PodcastCard
        title="Episode 1 – Ocean Currents"
        videoUrl="/podcasts/episode1.mp4"
        transcript="In this episode, we explore how global wind patterns drive the major ocean currents..."
        episodeId="1"
      />
      <PodcastCard
        title="Episode 2 – Atmospheric Pressure"
        videoUrl="/podcasts/episode2.mp4"
        transcript="In this episode, we talk about the importance of barometric pressure and weather prediction..."
        episodeId="2"
      />
    </div>
  )
}
