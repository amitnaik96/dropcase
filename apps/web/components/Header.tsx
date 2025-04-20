import { Button } from "@/components/ui/button"
import { Box } from 'lucide-react';

export const Header = () => {
    return <div className="flex justify-center">
        <div className="w-300 flex justify-between p-7">
        <div className="flex gap-1">
            <Box className="mt-1 text-blue-900"/>
            <div className="text-xl font-bold">DropCase</div>
        </div>
        <div className="flex gap-5">
            <div className="flex flex-col justify-center font-semibold">Login</div>
            <Button className="rounded-sm bg-blue-800">Sign Up</Button>
        </div>
        </div>
    </div>
}