import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background pt-16 pb-12 overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.05),transparent_40%)] pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-2xl mb-1">Aswanth Kumar P</h3>
            <p className="text-muted-foreground font-mono text-sm">Full Stack + AI Engineering</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm font-mono text-muted-foreground">
            <a href="mailto:aswanthkumarp01@gmail.com" className="hover:text-accent transition-colors flex items-center gap-2">
              <Mail size={16} /> aswanthkumarp01@gmail.com
            </a>
            <span className="hidden md:inline">•</span>
            <span>+91 9645638900</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
