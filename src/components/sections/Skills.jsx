import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "Material-UI"]
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "GraphQL", "WebSockets"]
  },
  {
    title: "AI & Automation",
    skills: ["LLM Integration", "Ollama", "OpenAI API", "n8n Workflows", "Prompt Engineering"]
  },
  {
    title: "Cloud, Tools & Architecture",
    skills: ["AWS S3", "MVC Architecture", "Git", "Postman", "Cypress", "Android Studio"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Technical Arsenal</h2>
          <div className="h-[1px] flex-1 bg-border ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                <span className="text-accent text-sm font-mono">0{index + 1}.</span> {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="neon" className="text-sm py-1.5 px-4 bg-secondary/40 border-border/50 hover:bg-accent/10 hover:border-accent">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
