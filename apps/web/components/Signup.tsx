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

export const Signup = () => {
  return (
    <div className="flex justify-center">
        <div className="flex justify-center gap-20 mt-40">
            <div className="text-4xl font-bold flex flex-col justify-center">
                        <div>Your <span className="text-blue-900">files,</span></div>
                        <div>Your <span className="text-blue-900">control.</span></div>
                        <div>Join <span className="text-blue-900">DropCase</span> now.</div>
            </div>
            <SignupCard />
        </div>
    </div>
  );
};

// Your files, your control. Join DropCase now.
const SignupCard = () => {
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
            <Input placeholder="Enter your name." />
          </div>
        </div>
        <div className="grid w-full items-center gap-4 mb-4">
          <div className="flex flex-col space-y-1.5">
            <Label>Email</Label>
            <Input placeholder="Enter your email." />
          </div>
        </div>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password." />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="rounded-sm bg-blue-800">Sign Up</Button>
      </CardFooter>
    </Card>
  );
};
