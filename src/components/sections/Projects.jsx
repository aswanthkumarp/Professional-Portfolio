import { motion } from "framer-motion"
import { Github, ExternalLink, Code2, Server } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Node.js Express Boilerplate",
    description: "Built a secure, production-ready backend boilerplate utilizing MVC architecture, integrating JWT authentication, Passport.js, bcrypt, and OAuth.",
    icon: <Server className="h-6 w-6 text-accent" />,
    tech: ["Node.js", "Express", "MongoDB", "OAuth"],
    github: "https://github.com/aswanthkumarp01",
    npm: "#",
  },
  {
    title: "Real-Time Video Streaming API",
    description: "Constructed a scalable backend pipeline that captures video chunks and securely uploads them to AWS S3, integrated with AI evaluation workflows.",
    icon: <Code2 className="h-6 w-6 text-cyan-400" />,
    tech: ["AWS S3", "WebRTC", "AI Pipelines", "Express"],
    github: "https://github.com/aswanthkumarp01",
    link: "#",
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Open Source & Projects</h2>
          <div className="h-[1px] flex-1 bg-border ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group relative overflow-hidden border-b-4 border-b-accent/50 hover:border-b-accent transition-all duration-300 glass-card">
                <div className="absolute right-0 top-0 opacity-5 w-32 h-32 -mt-8 -mr-8 group-hover:opacity-10 transition-opacity">
                   {project.icon}
                </div>
                <CardHeader>
                  <div className="mb-4">{project.icon}</div>
                  <CardTitle className="text-2xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-6 border-t border-border/50 pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <Badge key={t} variant="secondary" className="font-mono text-[10px] uppercase">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground w-full justify-between">
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-accent flex items-center gap-2 text-sm font-mono transition-colors">
                      <Github size={18} /> Source
                    </a>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-cyan-400 flex items-center gap-2 text-sm font-mono transition-colors">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
