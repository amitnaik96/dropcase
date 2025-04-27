"use client";
import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Avatar } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";
import { Label } from "@/components/ui/label";

export const Header = () => {
  const session: any = useSession();
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="w-300 flex justify-between p-7">
        <div className="flex gap-1">
          <Box className="mt-[2px] text-blue-900" />
          <div className="text-xl font-bold">DropCase</div>
        </div>
        {!session.data ? (
          <div className="flex gap-5">
            <div
              onClick={() => signIn()}
              className="flex flex-col justify-center font-semibold cursor-pointer"
            >
              Login
            </div>
            <Button
              onClick={() => router.push("/auth/signup")}
              className="rounded-sm bg-blue-800 hover:bg-blue-900 cursor-pointer"
            >
              Sign Up
            </Button>
          </div>
        ) : (
          <div className="flex gap-5">
            <Button onClick={() => router.push('/files')} className="bg-blue-900 hover:bg-blue-700">My Files</Button>
            <div className="flex flex-col justify-center">

            <Popover>
              <PopoverTrigger>
                <Avatar className="cursor-pointer bg-slate-100 flex flex-col justify-center">
                  <div className="ml-1">
                    <User className="hover:text-blue-900" />
                  </div>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 font-[family-name:var(--font-geist-sans)]">
                <div className="grid gap-2 text-sm">
                  <div className="grid grid-cols-2 items-center ">
                    <Label>Name</Label>
                    <div>{session?.data?.user?.name || "Not available"}</div>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-2">
                    <Label>Email</Label>
                    <div>{session?.data?.user?.email || "Not available"}</div>
                  </div>
                  <div>
                    <Button onClick={() => signOut()} className="w-full">Log out</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
