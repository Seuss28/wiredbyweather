import LessonTree from '@/components/ui/LessonTree'

export default function PhysicsBytesPage() {
  const lessons = [
    {
      id: "1",
      title: "Lesson 1: Wave Basics",
      pdfUrl: "/lessons/wave-basics.pdf",
      children: [
        {
          id: "1.1",
          title: "Lesson 1.1: Frequency and Period",
          pdfUrl: "/lessons/frequency-period.pdf"
        }
      ]
    }
  ]

  return (
    <div className="p-6 bg-background text-foreground space-y-6">
      <h1 className="text-3xl font-bold">Physics Bytes</h1>
      <LessonTree lessons={lessons} />
    </div>
  )
}