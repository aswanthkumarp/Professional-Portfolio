import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15, 
        delayChildren: 0.1, 
        ease: "easeOut" 
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)", scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 14, 
        mass: 0.8 
      } 
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">
      {/* Dynamic Background ambient glows */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" 
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.h1 
            variants={item} 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6 leading-[1.1]"
          >
            Aswanth Kumar P<span className="text-accent animate-pulse">.</span>
          </motion.h1>
          
          <motion.h2 
            variants={item} 
            className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8 max-w-2xl bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500 dark:from-gray-100 dark:to-gray-400"
          >
            Full Stack Developer (MERN) | AI-Driven Application Engineering
          </motion.h2>
          
          <motion.p 
            variants={item} 
            className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            I build scalable, high-performance systems. From integrating medical-coded AI models to architecting real-time streaming pipelines, I bridge the gap between complex data and seamless user experiences.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" variant="neon" asChild>
              <a href="#experience">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 group bg-secondary/20 hover:bg-secondary/40 border-white/5 backdrop-blur-sm shadow-xl" asChild>
              <a href="/resume.pdf" target="_blank">
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" /> 
                Download Resume
              </a>
            </Button>
          </motion.div>
          
          <motion.div variants={item} className="flex items-center gap-4">
            <SocialLink href="https://github.com/aswanthkumarp01" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/aswanth-kumar-p-842245194/" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:aswanthkumarp01@gmail.com" icon={<Mail />} label="Email" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="p-3 rounded-full bg-secondary/50 border border-white/5 backdrop-blur-sm shadow-xl text-muted-foreground hover:text-accent hover:border-accent hover:bg-accent/10 hover:-translate-y-1.5 hover:shadow-[0_4px_20px_-4px_rgba(16,185,129,0.3)] transition-all duration-300"
    >
      {icon}
    </a>
  )
}
