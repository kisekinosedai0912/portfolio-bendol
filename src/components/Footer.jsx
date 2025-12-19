import {
    Github,
    Linkedin,
    Youtube,
    Instagram,
    Music,
    MessageCircle
  } from "lucide-react"
  
export default function Footer() {
    return (
        <footer className="w-full py-12 flex flex-col items-center gap-6 text-indigo-400">
            
            {/* Social icons */}
            <div className="flex items-center gap-6">
                <SocialIcon icon={Music} />      
                <SocialIcon icon={Instagram} />
                <SocialIcon icon={Github} />
                <SocialIcon icon={Linkedin} />
                <SocialIcon icon={Youtube} />
                <SocialIcon icon={MessageCircle} /> 
            </div>
    
            {/* Copyright */}
            <p className="font-jetbrains text-sm text-indigo-400/80 tracking-wide">
                 © 2025 Pedro Van-Lume. All rights reserved.
            </p>
        </footer>
    )
}
  
function SocialIcon({ icon: Icon }) {
    return (
        <a href="#"
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

// import { useRef } from "react"
// import Footer from "../components/Footer"
// import { useFooterVisibility } from "../hooks/useFooterVisibility"

// export default function Contact() {
//   const endRef = useRef(null)
//   const showFooter = useFooterVisibility(endRef)

//   return (
//     <section
//       id="contact"
//       ref={endRef}
//       className="min-h-screen flex flex-col justify-end"
//     >
//       {/* Contact content */}
//       <div className="flex-1 flex items-center justify-center text-white">
//         Contact Section
//       </div>

//       {/* Footer */}
//       {showFooter && <Footer />}
//     </section>
//   )
// }