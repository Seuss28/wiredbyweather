export default function Home() {
  return (
i
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">WiredByWeather</h1>
      <p className="text-lg">
        Welcome to Wired by Weather: advancing science, education, and global unity.
 	<br />Website development in progress. 6/16/2025. 
	<br />Stay tuned.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-accent text-black rounded">Funds Donated</div>
        <div className="p-4 bg-accent text-black rounded">Countries Covered</div>
        <div className="p-4 bg-accent text-black rounded">Episodes Published</div>
        <div className="p-4 bg-accent text-black rounded">Comments Submitted</div>
      </div>

      <form className="space-y-2">
        <label htmlFor="comment">Share your vision for peace & science:</label>
        <textarea id="comment" className="w-full p-2 rounded border" rows={4}></textarea>
        <button className="px-4 py-2 bg-secondary text-white rounded">Submit</button>
      </form>
    </div>
  );
}

