import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GithubIcon() {
  return (
    <>
    <Button variant="ghost" size="icon">
      <Github className="absolute h-[1.2rem] w-[1.2rem]" />
    </Button>

    </>
  )
}