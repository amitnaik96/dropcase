import { Box } from 'lucide-react';

export const HeaderFile = () => {
    return <div className="flex justify-center">
        <div className="w-300 flex justify-between p-7">
        <div className="flex gap-1">
            <Box className="mt-[2px] text-blue-900"/>
            <div className="text-xl font-bold">DropCase</div>
        </div>
        </div>
    </div>
}