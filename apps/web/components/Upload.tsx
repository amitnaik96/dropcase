import { CloudUpload } from 'lucide-react';
  
  export const Upload = () => {
    return <div className="flex justify-center">
                <div className="w-300 flex justify-center">
                    <div>
                        <div className="w-150 h-110 flex flex-col justify-center border mb-10 border-gray-300 rounded-2xl shadow">
                            <div className="m-auto">
                                <div className="text-2xl mt-3 mb-2 font-semibold flex justify-center">Upload a file</div>
                                <div className="border-3 border-dashed rounded-lg w-80 h-80 flex justify-center hover:border-blue-300">
                                    <div className="flex flex-col justify-center items-center">
                                        <CloudUpload size={70} className="text-gray-400"/>
                                        <div className="text-sm">Drag and drop your file here or</div>
                                        <div className="text-sm text-blue-700 hover:underline cursor-pointer">browse</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}