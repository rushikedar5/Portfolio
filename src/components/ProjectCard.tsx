import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col justify-between hover:border-foreground/30 transition-colors">
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Link href={project.githubUrl} target="_blank">
          <Button size="sm" variant="outline">GitHub</Button>
        </Link>
        {project.liveUrl && (
          <Link href={project.liveUrl} target="_blank">
            <Button size="sm">Live Demo</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}