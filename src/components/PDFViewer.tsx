export default function PDFViewer({ file }: { file: string }) {
  return (
    <div className="border rounded p-4">
      <iframe src={file} width="100%" height="600px" title="PDF Preview"></iframe>
    </div>
  );
}

