"use client";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

interface File {
  id: string;
  uploaderId: string;
  fileName: string;
  fileSize: number;
  fileUrl: string;
  createdAt: string;
}

export const YourFiles = () => {
  const [files, setFiles] = useState<File[]>([]);
  const session: any = useSession();

  useEffect(() => {
    try {
      async function init() {
        if (session?.data?.user.id) {
          console.log(session);
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/files/${session.data.user.id}`
          );
          setFiles(res.data);
          console.log(files);
        }
      }
      init();
    } catch (err) {
      console.log(err);
    }
  }, [session, files]);

  return (
    <div className="flex justify-center">
      <div className="w-300 flex justify-center">
        <div className="w-250 h-80 flex flex-col border mb-10 border-gray-300 rounded-2xl shadow">
          <div className="text-xl m-5 font-semibold">Your Files</div>
          <div className="flex text-sm text-gray-700 w-225 justify-center mx-auto mb-3 border-b border-gray-200">
            <div className="flex w-full justify-around  mb-2">
              <div>Name</div>
              <div>Size</div>
              <div>Upload Date</div>
              <div>Actions</div>
            </div>
          </div>
          <div className="overflow-y-auto max-h-64">
            {files.map((file: File) => (
              <File
                key={file.fileName + Math.random()}
                name={file.fileName}
                size={file.fileSize}
                date={file.createdAt}
                url={file.fileUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const File = ({ name, size, date, url }: any) => {
  return (
    <div className="flex text-sm  w-225 justify-center mt-3 mx-auto border-b border-gray-200">
      <div className="flex w-full justify-around mb-2">
        <div className="flex flex-col justify-center">{`${name.slice(0, 10)}...`}</div>
        <div className="flex flex-col justify-center">{`${(size / 1024 / 1024).toFixed(2)}mb`}</div>
        <div className="flex flex-col justify-center">{date.slice(0, 10)}</div>
        <a href={url} download={name}>
          <Button className="p-2">
            {" "}
            <FileDown />
            Download
          </Button>
        </a>
      </div>
    </div>
  );
};
