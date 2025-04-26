import { UploadFile } from "./UploadFile";

export const Files = () => {
  return (
    <div className="flex justify-center">
      <div className="w-300 flex justify-center gap-50 mt-10">
        <UploadFile/>
      </div>
    </div>
  );
};
