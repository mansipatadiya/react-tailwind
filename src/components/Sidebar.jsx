import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Logo from "@/assets/logo.svg?react";

export default function Sidebar() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6H21M3 12H21M3 18H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SheetTrigger>
        <SheetContent className="border-none">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription>
              <div className="pt-8 text-[#F5F5F7] space-y-4">
                <a className="text-lg block">Askitect AI</a>
                <a className="text-lg block">Solutions</a>
                <a className="text-lg block">Pricing</a>
                <a className="text-lg block">About Us</a>
                <a className="text-lg block">Contact Us</a>
                <Button className="w-full block rounded-full">Log in</Button>
                <Button
                  className="w-full block rounded-full border border-[#BFBCDD]"
                  variant="outline"
                >
                  Sign up
                </Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
