import { motion } from "framer-motion"

const experiences = [
  {
    role: "Full Stack Developer",
    company: "TechPranee (Spearhub)",
    duration: "Aug 2024 - Present",
    points: [
      "Architected an AI-driven clinical trial platform, utilizing Node.js, Express, and automated cron jobs to process large-scale clinical datasets.",
      "Integrated medical-coded AI models via Ollama for advanced clinical reasoning and data analysis.",
      "Engineered a live video-based AI hiring platform with real-time streaming pipelines to AWS S3, utilizing custom LLM prompts for candidate evaluation.",
      "Designed complex data transformation pipelines converting clinical XLSX files into highly structured JSON for anomaly detection and AI insights.",
      "Built end-to-end automation workflows using n8n for content publishing, lead generation (WhatsApp/Telegram), and AI-assisted pipelines."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Spearhub",
    duration: "Feb 2024 - Aug 2024",
    points: [
      "Developed a comprehensive interior design platform featuring dedicated React applications for Designers, Vendors, and Customers.",
      "Built server-side rendered (SSR), SEO-optimized landing pages using Next.js to significantly boost search visibility.",
      "Implemented scalable state management using Redux Toolkit and built a centralized Admin Dashboard for data analytics and workflow management."
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">Experience</h2>
            <div className="h-[1px] flex-1 bg-border ml-4"></div>
          </div>

          <div className="relative border-l border-border ml-3 md:ml-6 space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline node */}
                <div className="absolute w-4 h-4 bg-background border-2 border-accent rounded-full -left-[9px] top-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {exp.role} <span className="text-accent">@ {exp.company}</span>
                  </h3>
                  <span className="font-mono text-sm text-muted-foreground mt-2 md:mt-0 bg-secondary/50 px-3 py-1 rounded-full border border-border/50">
                    {exp.duration}
                  </span>
                </div>
                
                <ul className="space-y-3 mt-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <span className="text-accent/50 mt-1.5 text-xs group-hover:text-accent transition-colors">▹</span>
                      <span className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
