export default function NewsletterReader({ file }: { file: string }) {
  return (
    <div className="border rounded p-4 bg-white">
      <iframe src={file} width="100%" height="800px" title="Newsletter"></iframe>
    </div>
  );
}

