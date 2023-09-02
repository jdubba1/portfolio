import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GithubIcon() {
  return (
    <Link href='https://github.com/jdubba1'>
      <Button variant="ghost" size="icon">
        <Github className="absolute h-[1.2rem] w-[1.2rem]" />
      </Button>
    </Link>
  )
}