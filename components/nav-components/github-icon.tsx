import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function GithubIcon() {
  return (
    <Link href="https://github.com/jdubba1">
      <Button variant="ghost" size="icon" className="h-[24px]">
        <Github className="absolute w-[1.2rem]" />
      </Button>
    </Link>
  );
}

export function LinkedinIcon() {
  return (
    <Link href="www.linkedin.com/in/james-wissemann-39b607166">
      <Button variant="ghost" size="icon" className="h-[24px]">
        <Linkedin className="absolute w-[1.2rem]" />
      </Button>
    </Link>
  );
}
