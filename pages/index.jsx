
import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

export default function ArmorSRTUpload() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [translatedURL, setTranslatedURL] = useState("");

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleUpload = async () => {
    if (!file) return;
    setProgress(5);

    const formData = new FormData();
    formData.append("srt", file);

    setProgress(20);
    setTimeout(() => {
      setProgress(60);
      setTimeout(() => {
        setProgress(100);
        setTranslatedURL("/downloads/translated_file.srt");
      }, 1500);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">ARMOR SRT Орчуулга</h1>
      <Card className="w-full max-w-xl">
        <CardContent className="flex flex-col gap-4">
          <input type="file" accept=".srt" onChange={handleFileChange} />
          <Button onClick={handleUpload} disabled={!file}>
            Орчуулга эхлүүлэх
          </Button>
          <Progress value={progress} className="h-2" />
          {translatedURL && (
            <a
              href={translatedURL}
              className="text-blue-600 underline text-center"
              download
            >
              Орчуулсан SRT татах
            </a>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
