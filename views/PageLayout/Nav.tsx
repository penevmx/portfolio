import React from "react";
import Image from "@/components/Image/Image";
import Link from "@/components/Link/Link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-mode";
import useScrollDirection from "@/hooks/useScrollDirection";

export const Nav = () => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`sticky top-0 z-50 bg-muted shadow transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center p-2 max-w-[1020px] mx-auto h-20 ">
        <Link href={"#Hero"}>
          <Image
            src={"https://github.com/shadcn.png"}
            width={48}
            height={48}
            alt="logo"
            className="flex-start rounded-3xl"
          />
        </Link>
        <nav className="flex-grow">
          <ul className="flex items-center justify-end space-x-4">
            <li>
              <Link href={"#Projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"#Contacts"}>Contact</Link>
            </li>
            <li>
              <Button className="rounded-3xl gap-1 variant-secondary">
                Resume
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
