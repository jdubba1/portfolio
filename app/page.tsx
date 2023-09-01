import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Badge } from "@/components/ui/badge"

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

              {/* <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger> Learn More </AccordionTrigger>
                  <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam ac tincidunt luctus, nisl eros aliquam nunc, vitae aliquam nunc nisl vitae nunc. Sed euismod, diam ac tincidunt luctus, nisl eros aliquam nunc, vitae aliquam nunc nisl vitae nunc. Sed euismod, diam ac tincidunt luctus, nisl eros aliquam nunc, vitae aliquam nunc nisl vitae nunc. Sed euismod, diam ac tincidunt luctus, nisl eros aliquam nunc, vitae aliquam nunc nisl vitae nunc.
                  </AccordionContent>
                </AccordionItem>
              </Accordion> */}

              <div className="flex flex-row justify-start space-x-2 py-2"> 
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Planetscale</Badge>
                <Badge variant="secondary">OpenAI</Badge>
              </div>

            </li>
            <li> 
              <a className='flex flex-col space-y-1.5 !no-underline' href="https://goinfinitum.com/motor-selection">
                <span className='font-medium underline underline-offset-4'>motor-selection</span>
                <span className='text-muted-foreground'> a product recommendation tool for an electric motor company. </span>
              </a>
            </li>
            <li> 
              <a className='flex flex-col space-y-1.5 !no-underline' href="https://infinitum-docs.vercel.app/mst-api">
                <span className='font-medium underline underline-offset-4'>Infinitum API</span>
                <span className='text-muted-foreground'> a next.js API powering multiple product recommendation apps. </span>
              </a>
            </li>

              
          </ul>

        </article> 
      </div>
    </main>
  )
}
