"use client"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import  Contact from "@/components/contact"


export default function Home() {
  return (
    <main className="flex-1">
      <div className="container flex flex-col space-y-2 max-w-2xl"> 
        <article className='pt-6'>

        <Tabs defaultValue="projects" className="w-full space-y-1">
          <TabsList>
            <TabsTrigger value="projects">projects</TabsTrigger>
            <TabsTrigger value="about">about</TabsTrigger>
            <TabsTrigger value="contact">contact</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <ul className='space-y-4 py-4'>
              <li>
                <a className='flex flex-col space-y-1.5 !no-underline' href="https://tracklyze.com">
                  <span className='font-medium underline underline-offset-4'>Tracklyze</span>
                  <span className='text-muted-foreground'> intuitive web analytics platform with LLM integration. </span>
                </a>
                <div className="flex flex-row justify-start space-x-2 py-2"> 
                  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><Badge variant="secondary">Next.js</Badge></a>
                  <a href="https://www.planetscale.com/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Planetscale</Badge></a>
                  <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Prisma</Badge></a>
                  <a href="https://www.openai.com/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">OpenAI</Badge></a>
                </div>
              </li>
              <li> 
                <a className='flex flex-col space-y-1.5 !no-underline' href="https://goinfinitum.com/motor-selection">
                  <span className='font-medium underline underline-offset-4'>Motor Selection Tool</span>
                  <span className='text-muted-foreground'> product recommendation tool for an electric motor company. </span>
                </a>
                <div className="flex flex-row justify-start space-x-2 py-2"> 
                  <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">React</Badge></a>
                  <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Wordpress</Badge></a>
                </div>
              </li>
              <li> 
                <a className='flex flex-col space-y-1.5 !no-underline' href="https://infinitum-docs.vercel.app/mst-api">
                  <span className='font-medium underline underline-offset-4'>Motor Selection API</span>
                  <span className='text-muted-foreground'> next.js API powering multiple product recommendation apps. </span>
                </a>
                <div className="flex flex-row justify-start space-x-2 py-2"> 
                  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><Badge variant="secondary">Next.js</Badge></a>
                  <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">MongoDB</Badge></a>
                </div>
              </li>
              <li> 
                <a className='flex flex-col space-y-1.5 !no-underline' href="https://infinitum-docs.vercel.app">
                  <span className='font-medium underline underline-offset-4'>Infinitum Docs</span>
                  <span className='text-muted-foreground'> simple documentation site made with nextra. </span>
                </a>
                <div className="flex flex-row justify-start space-x-2 py-2"> 
                  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><Badge variant="secondary">Next.js</Badge></a>
                  <Badge variant="outline">Markdown</Badge>
                </div>
              </li>
              <li> 
                <a className='flex flex-col space-y-1.5 !no-underline' href="/">
                  <span className='font-medium underline underline-offset-4'>This Site</span>
                  <span className='text-muted-foreground'> minimal portfolio using next.js and shadcn components. </span>
                </a>
                <div className="flex flex-row justify-start space-x-2 py-2"> 
                  <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><Badge variant="secondary">Next.js</Badge></a>
                </div>
              </li>
              <li> 
                <a className='flex flex-col space-y-1.5 !no-underline' href="/">
                  <span className='font-medium underline underline-offset-4'>Canines First</span>
                  <span className='text-muted-foreground'> a simple pet ecommerce site  </span>
                </a>
                <div className="flex flex-row justify-start space-x-2 py-2"> 
                  <a href="https://shopify.com/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Shopify</Badge></a>
                </div>
              </li>              
            </ul>
          </TabsContent>
          <TabsContent value="about">
            <div className="space-y-4 py-2">
              <h1 className="text-2xl tracking-tight py-2"> 
                Hi, I&apos;m James.
              </h1>
              <p className='tracking-tight'>  
                I&apos;m a full stack developer based in Austin, Texas.
                I specialize in creating dynamic web applications that are fast, efficient, and resilient. 
                Proficient in a range of modern technologies, from front-end frameworks like React and Vue.js to backend systems like Node.js and MongoDB, I&apos;m prepared to tackle the full development stack.
                With a strong foundation in building APIs, optimizing performance, and ensuring seamless user experiences, I&apos;m dedicated to crafting solutions that drive business growth.
                From concept to deployment, I thrive on creating practical, scalable, and innovative solutions that make an impact.
              </p>
              <h1 className="text-2xl tracking-tight py-2"> 
                Technologies I like: 
              </h1>
              <div className="flex flex-wrap justify-start mx-auto">
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Next.js</Badge></a>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">React</Badge></a>
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Node.js</Badge></a>
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">MongoDB</Badge></a>
                <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Firebase</Badge></a>
                <a href="https://www.sqlite.org/index.html" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">SQLite</Badge></a>
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Tailwind CSS</Badge></a>
                <a href="https://www.prisma.io/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Prisma</Badge></a>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="outline">Typescript</Badge></a>
                <a href="https://www.planetscale.com/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Planetscale</Badge></a>
                <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Wordpress</Badge></a>
                <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">GraphQL</Badge></a>
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="outline">Python</Badge></a>
                <a href="https://react-query.tanstack.com/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">React Query</Badge></a>
                <a href="https://auth0.com/" target="_blank" rel="noopener noreferrer"><Badge className="m-1" variant="secondary">Auth0</Badge></a>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="contact">
            <Contact />
          </TabsContent>
        </Tabs>


          {/* <div className='space-y-1'>
            <h2 className='font-mono tracking-tighter'>projects</h2>
          </div> */}
          

        </article> 
      </div>
    </main>
  )
}
