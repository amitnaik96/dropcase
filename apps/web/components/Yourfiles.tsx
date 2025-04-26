import { Button } from "@/components/ui/button";

export const Yourfiles = () => {
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
          <File name={"document.pdf"} size={"2.5 MB"} date={"2024-04-26"} />
        </div>
      </div>
    </div>
  );
};

const File = ({ name, size, date }: any) => {
  return (
    <div className="flex text-sm  w-225 justify-center mt-3 mx-auto border-b border-gray-200">
      <div className="flex w-full justify-around mb-2">
        <div className="flex flex-col justify-center ml-[-20px]">{name}</div>
        <div className="flex flex-col justify-center">{size}</div>
        <div className="flex flex-col justify-center">{date}</div>
        <Button className="p-2">Download</Button>
      </div>
    </div>
  );
};
