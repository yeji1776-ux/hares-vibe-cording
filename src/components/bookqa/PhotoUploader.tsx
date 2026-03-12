import { useState, useRef } from 'react';
import { Camera, Upload } from 'lucide-react';

interface Props {
  onImageSelect: (dataUrl: string) => void;
}

function resizeImage(dataUrl: string, maxWidth: number): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ratio = Math.min(maxWidth / img.width, 1);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', 0.8));
    };
    img.src = dataUrl;
  });
}

export default function PhotoUploader({ onImageSelect }: Props) {
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      const resized = await resizeImage(dataUrl, 800);
      onImageSelect(resized);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div
      onDragOver={e => { e.preventDefault(); setDragOver(true); }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors cursor-pointer ${
        dragOver ? 'border-indigo-400 bg-indigo-50' : 'border-gray-300 bg-gray-50'
      }`}
      onClick={() => inputRef.current?.click()}
    >
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleChange} />
      <div className="flex flex-col items-center gap-2 text-gray-400">
        <div className="flex gap-2">
          <Camera size={24} />
          <Upload size={24} />
        </div>
        <p className="text-sm font-medium">사진을 드래그하거나 클릭해서 올려주세요</p>
        <p className="text-xs">책의 모르는 부분을 찍어서 올리면 돼요!</p>
      </div>
    </div>
  );
}
