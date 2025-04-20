import { CloudUpload } from 'lucide-react';

export const Hero = () => {
    return <div className="flex justify-center">
                <div className="w-300 flex justify-center gap-50 mt-15">
                    <div className="text-5xl font-bold flex flex-col justify-center">
                        <div><span className="text-blue-900">Simple.</span> Secure</div>
                        <div><span className="text-blue-900">Share</span> files</div>
                        <div>instantly.</div>
                    </div>
                    <div>
                        <div className="border-4 border-dashed rounded-lg w-80 h-80 flex justify-center hover:border-blue-300">
                            <div className="flex flex-col justify-center">
                                <CloudUpload size={70} className="text-blue-900"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}