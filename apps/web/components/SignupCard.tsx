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
import axios from 'axios';

export const SignupCard = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function signup() {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signup`, {
                name,
                email,
                password
            });
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

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
              <Label>Name</Label>
              <Input onChange={(e:any) => setName(e.target.value)} placeholder="Enter your name." />
            </div>
          </div>
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
        <CardFooter className="flex justify-between">
          <Button onClick={signup} className="rounded-sm bg-blue-800">Sign Up</Button>
        </CardFooter>
      </Card>
    );
  };
  