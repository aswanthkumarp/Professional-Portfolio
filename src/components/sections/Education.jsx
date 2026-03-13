import { motion } from "framer-motion"

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Education & Certifications</h2>
          <div className="h-[1px] flex-1 bg-border ml-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden group border border-border hover:border-accent/40 transition-colors"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-accent/20 transition-colors"></div>
            <div className="relative z-10">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">Degree</span>
              <h3 className="text-xl font-display font-bold mb-2">B.Tech in Electronics & Communication</h3>
              <p className="text-muted-foreground mb-4">Cochin University of Science And Technology</p>
              <div className="inline-block bg-secondary px-3 py-1 rounded-full border border-border/50 font-mono text-sm text-muted-foreground">
                2015 - 2019
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden group border border-border hover:border-cyan-500/40 transition-colors"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-cyan-500/20 transition-colors"></div>
            <div className="relative z-10">
              <span className="font-mono text-xs text-cyan-500 uppercase tracking-widest block mb-2">Certification</span>
              <h3 className="text-xl font-display font-bold mb-2">Full Stack Web Development (MERN)</h3>
              <p className="text-muted-foreground mb-4">Illinois Institute of Technology</p>
              <div className="inline-block bg-secondary px-3 py-1 rounded-full border border-border/50 font-mono text-sm text-muted-foreground">
                Dec 2023
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
