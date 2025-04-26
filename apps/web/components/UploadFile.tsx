import { CloudUpload } from 'lucide-react';
  
  export const UploadFile = () => {
    return <div className="flex justify-center">
                <div className="w-300 flex justify-center">
                        <div className="w-250 h-80 flex flex-col justify-center border mb-10 border-gray-300 rounded-2xl shadow">
                            <div className="m-auto">
                                <div className="border-3 border-dashed rounded-lg w-225 h-60 flex justify-center hover:border-blue-300">
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
}