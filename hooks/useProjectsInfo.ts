import { ProjectCardType } from "@/views/Projects/ProjectCard";

export const useProjectsInfo = (): ProjectCardType[] => {
  return [
    {
      mainImageUrl: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
      title: "Project One",
      description: "This is the first project",
    },
    {
      mainImageUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      title: "Project Two",
      description: "This is the second project",
    },
    {
      mainImageUrl: "",
      title: "Project Three",
      description: "This is the third project",
    },
    {
      mainImageUrl: "",
      title: "Project Four",
      description: "This is the fourth project",
    },
    {
      mainImageUrl: "",
      title: "Project Five",
      description: "This is the fifth project",
    },
    {
      mainImageUrl: "",
      title: "Project Six",
      description: "This is the sixth project",
    },
    // {
    //   mainImageUrl: "",
    //   title: "Project Seven",
    //   description: "This is the fifth project",
    // },
    // {
    //   mainImageUrl: "",
    //   title: "Project Eight",
    //   description: "This is the sixth project",
    // },
  ];
};
