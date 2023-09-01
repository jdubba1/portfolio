import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container flex flex-col space-y-2 max-w-2xl"> 
        <article className='pt-6'>
          <div className='space-y-1'>
            <h2 className='font-mono tracking-tighter'>projects</h2>
          </div>
          <ul className='space-y-4 py-4'>
            <li> 
              <a className='flex flex-col space-y-1.5 !no-underline' href="https://tracklyze.com">
                <span className='font-medium underline underline-offset-4'>tracklyze</span>
                <span className='text-muted-foreground'> an intuitive web analytics platform with LLM integration. </span>
              </a>
            </li>
            <li> 
              <a className='flex flex-col space-y-1.5 !no-underline' href="https://goinfinitum.com/motor-selection">
                <span className='font-medium underline underline-offset-4'>motor-selection</span>
                <span className='text-muted-foreground'> a product recommendation tool for an electric motor company. </span>
              </a>
            </li>
              
          </ul>

        </article> 
      </div>
    </main>
  )
}
