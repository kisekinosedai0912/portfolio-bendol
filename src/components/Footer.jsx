import {
    Github,
    Linkedin,
    Mail,
    Facebook
  } from "lucide-react"
  
export default function Footer() {
    return (
        <footer className="w-full py-4 flex flex-col items-center gap-6 text-indigo-400 bg-gradient-to-b from-[#060023] to-[#010003] border border-indigo-800">
            {/* Social icons */}
            <div className="flex items-center gap-6">
                <SocialIcon icon={Facebook} link={'https://www.facebook.com/jasper.perks'} />      
                <SocialIcon icon={Github} link={'https://github.com/kisekinosedai0912'} />
                <SocialIcon icon={Linkedin} />
                <SocialIcon icon={Mail} link={'mailto:jasperbendol0329@gmail.com'} />
            </div>
    
            {/* Copyright */}
            <p className="font-jetbrains text-sm text-indigo-400/80 tracking-wide">
                 © 2025 Jasper Bendol. All rights reserved. Portfolio site
            </p>
        </footer>
    )
}
  
function SocialIcon({ icon: Icon, link }) {
    return (
        <a href={ link ? link : '#'}
           target="_blank"
           rel="noreferrer"
           className="
                p-3 rounded-full
                hover:text-white
                hover:bg-indigo-900/40
                hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]
                transition-all duration-200
            "
        >
            <Icon size={22} />
        </a>
    )
}  