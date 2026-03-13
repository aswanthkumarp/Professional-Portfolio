import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold">About Me</h2>
            <div className="h-[1px] flex-1 bg-border ml-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am a Full Stack Developer with deep expertise in the{" "}
                <span className="text-foreground font-medium">MERN stack</span> (MongoDB,
                Express, React, Node.js) and Next.js. My focus lies in building robust,
                AI-driven applications—whether that's processing massive clinical datasets,
                building live video-streaming hiring platforms, or deploying mobile-ready
                full-stack solutions.
              </p>
              <p>
                I thrive on collaborating with ML engineers to fine-tune AI workflows and
                creating elegant, SEO-optimized frontends that users love. My approach
                combines rigorous backend architecture with{" "}
                <span className="text-accent">obsessive attention to UI/UX detail</span>.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card p-8 rounded-2xl h-full flex flex-col justify-center">
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                  Core Philosophy
                </h3>
                <ul className="space-y-4 font-mono text-sm">
                  <ListItem text="Performance-first architectures" />
                  <ListItem text="Seamless AI/ML integrations" />
                  <ListItem text="Pixel-perfect, engaging interfaces" />
                  <ListItem text="Data-driven SEO strategies" />
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ListItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-accent mt-1">▹</span>
      <span className="text-muted-foreground">{text}</span>
    </li>
  )
}
