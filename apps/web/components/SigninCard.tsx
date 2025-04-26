"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Box } from "lucide-react";
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export const SigninCard = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const router = useRouter();

    return (
      <Card className="w-100">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            <div className="flex gap-1">
              <Box className="mt-[2px] text-blue-900" />
              <div className="text-xl font-bold">DropCase</div>
            </div>
          </CardTitle>
          <CardDescription>
         
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4 mb-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Email</Label>
              <Input onChange={(e:any) => setEmail(e.target.value)} placeholder="Enter your email." />
            </div>
          </div>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label>Password</Label>
              <Input onChange={(e:any) => setPassword(e.target.value)} type="password" placeholder="Enter your password." />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
            <Button 
                onClick={() => signIn("credentials", {
                    email,
                    password,
                    redirect: true,
                    callbackUrl: '/'
                })}
                className="rounded-sm w-full bg-blue-800">Sign in with Credentials</Button>
            <div className="border-t border-gray-300 w-full"></div>
            <Button 
                onClick={async () => { 
                    const res = signIn("google", { redirect: false }); 
                }} 
                className="rounded-sm w-full"
            >
                <GoogleIcon />
                Sign in with Google
                </Button>
            </CardFooter>
      </Card>
    );
};

const GoogleIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" fill="white"/></svg>
}
  