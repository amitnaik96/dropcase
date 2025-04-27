"use client"
import { Button } from "@/components/ui/button"
import { Box } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react"

export const Header = () => {
    const router = useRouter();

    return <div className="flex justify-center">
        <div className="w-300 flex justify-between p-7">
        <div className="flex gap-1">
            <Box className="mt-[2px] text-blue-900"/>
            <div className="text-xl font-bold">DropCase</div>
        </div>
        <div className="flex gap-5">
            <div onClick={() => signIn()} className="flex flex-col justify-center font-semibold cursor-pointer">Login</div>
            <Button onClick={() => router.push('/auth/signup')} className="rounded-sm bg-blue-800 hover:bg-blue-900 cursor-pointer">Sign Up</Button>
        </div>
        </div>
    </div>
}