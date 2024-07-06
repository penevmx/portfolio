import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProjectsInfo } from "@/hooks/useProjectsInfo";
import React from "react";
import styles from "./Hero.module.scss";
import { Button } from "@/components/ui/button";

type HeroType = {};

export const Hero: React.FC<HeroType> = () => {
  const projectsInfo = useProjectsInfo();

  return (
    <div
      className="py-12 flex flex-col gap-10 items-center text-center"
      id="Hero"
    >
      <Avatar className={`h-40 w-40 animate-bounce`}>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <p className="p-0 text-2xl font-semibold">hi im the frog</p>
      <h1 className="text-4xl font-bold">Заглавие тука</h1>
      <p className="text-xl text-muted-foreground">
        Тука пише некав текст-измисли си го после
      </p>
      <div className="flex gap-6 py-6 items-center justify-center">
        <Button>Start Now</Button>
        <Button variant="ghost">Learn Now</Button>
      </div>
    </div>
  );
};

export default Hero;
