"use client";
import { CloudUpload } from "lucide-react";
import { useRef } from "react";
import axios from 'axios';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const UploadFile = () => {
  const session:any = useSession();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const uploadFile = async (file: File, userId: string) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);
      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/upload`, formData,{
          headers: {
            "Content-Type": "multipart/form-data", 
          }});
        console.log(res);

        if (inputRef.current) {
          inputRef.current.value = '';
          router.push('/files');
        }
        } catch (err) {
        console.log(err);
      }
  }

  const handleBrowseClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    console.log(file);
    console.log(session);
    if (file && session?.data) {
      uploadFile(file, session.data.user.id);
    }
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && session?.data) {
      uploadFile(file, session.data.user.id);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center">
      <div className="w-300 flex justify-center">
        <div className="w-250 h-80 flex flex-col justify-center border mb-10 border-gray-300 rounded-2xl shadow">
          <div className="m-auto">
            <div
              className="border-3 border-dashed rounded-lg w-225 h-60 flex justify-center hover:border-blue-300"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className="flex flex-col justify-center items-center">
                <CloudUpload size={70} className="text-gray-400" />
                <div className="text-sm">Drag and drop your file here or</div>
                <div
                  className="text-sm text-blue-700 hover:underline cursor-pointer"
                  onClick={handleBrowseClick}
                >
                  browse
                </div>
                <input
                  type="file"
                  ref={inputRef}
                  className="hidden"
                  onChange={handleFileChange}
                  multiple
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
