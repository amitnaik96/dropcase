"use client"
import { Box } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useSession } from "next-auth/react";

export const HeaderFile = () => {
    const session = useSession();
  return (
    <div className="flex justify-center">
      <div className="w-300 flex justify-between p-7">
        <div className="flex gap-1">
          <Box className="mt-[2px] text-blue-900" />
          <div className="text-xl font-bold">DropCase</div>
        </div>
        <div>
          <Popover>
            <PopoverTrigger>
              <Avatar className="cursor-pointer bg-slate-100 flex flex-col justify-center">
                <div className="ml-1">
                  <User className="hover:text-blue-900"/>
                </div>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-60">
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-2">
                    <Label>Name</Label>
                    <div>{session?.data?.user?.name || "Not available"}</div>
                </div>
                <div className="grid grid-cols-3 items-center gap-2">
                  <Label>Email</Label>
                    <div>{session?.data?.user?.email || "Not available"}</div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
