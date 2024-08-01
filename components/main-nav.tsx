import Link from "next/link";
import { ModeToggle } from "./nav-components/mode-toggle";
import { GithubIcon, LinkedinIcon } from "./nav-components/github-icon";

export function MainNav() {
  return (
    <nav>
      <header className="container max-w-7xl">
        <div className="flex items-center justify-between py-4">
          {/* Name + Title */}
          <Link className="flex items-center space-x-2" href="/">
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">
                James Wissemann
              </h4>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer
              </p>
            </div>
          </Link>
          {/* Links */}
          <div className="">
            <div className="flex items-center gap-4 mt-[3px] h-min">
              <LinkedinIcon></LinkedinIcon>
              <GithubIcon></GithubIcon>
              <div className="pb-[5px] pl-2 hidden sm:block">
                <ModeToggle></ModeToggle>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
}
