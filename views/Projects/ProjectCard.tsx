import Image from "@/components/Image/Image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type ProjectCardType = {
  mainImageUrl: string;
  title: string;
  description?: string;
};

const ProjectCard: React.FC<ProjectCardType> = ({
  mainImageUrl,
  title,
  description,
}) => {
  return (
    <div className="md:shadow-lg grid-element">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image
            width={180}
            height={180}
            src={
              mainImageUrl || "https://playwright.dev/img/playwright-logo.svg"
            }
            alt={title}
            className="object-cover w-full h-40"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
