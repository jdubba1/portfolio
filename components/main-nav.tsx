import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { GithubIcon } from './github-icon'

export function MainNav() {
  return (
    <nav>
      <header className='container max-w-lg'>
        <div className='flex items-center justify-between py-4'>
          {/* Name + Title */}
          <Link className='flex items-center space-x-2' href="/">
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">James Wissemann</h4>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer
              </p>
            </div>
          </Link>
          {/* Links */}
          <div className='flex items-center space-x-4'>
            <GithubIcon></GithubIcon>
            <ModeToggle></ModeToggle>
          </div>
        </div>
      </header>
    </nav>
  )
}
