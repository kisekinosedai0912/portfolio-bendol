import { Mail, Phone, Github, Linkedin, Facebook, MapPin } from "lucide-react";
  
export default function Contact() {
    const contacts = [
        {
            label: "Email",
            value: "jasperbendol0329@gmail.com",
            icon: Mail,
            href: "mailto:jasperbendol0329@gmail.com",
        },
        {
            label: "Phone",
            value: "+63 951 354 6153",
            icon: Phone,
            href: "tel:+639513546153",
        },
        {
            label: "GitHub",
            value: "https://github.com/kisekinosedai0912",
            icon: Github,
            href: "https://github.com/kisekinosedai0912",
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/jasperbendol",
            icon: Linkedin,
            href: "https://linkedin.com/in/jasperbendol",
        },
        {
            label: "Facebook",
            value: "https://www.facebook.com/jasper.perks",
            icon: Facebook,
            href: "https://www.facebook.com/jasper.perks",
        },
        {
            label: "Location",
            value: "Philippines",
            icon: MapPin,
            href: "https://www.google.com/maps/place/Poblacion+II+(Barangay+2),+Sagay+City,+Negros+Occidental/@10.8905654,123.4129984,21z/data=!4m6!3m5!1s0x33a8dd346a077eef:0xd41db9b7985b17f9!8m2!3d10.8929064!4d123.4024566!16s%2Fg%2F1tfv2nqv?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
        },
    ];
  
    return (
        <section
            id="contact"
            className="min-h-screen px-4 md:px-8 py-20 bg-gradient-to-b from-[#010003] to-[#060023]"
        >
            {/* Title */}
            <h1 className="text-center text-3xl md:text-4xl font-jetbrains text-white mb-16">
                <span className="gradient-text">Get in Touch with Me</span>
            </h1>
    
            {/* Contact Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contacts.map((contact, index) => {
                    const Icon = contact.icon;
        
                    const Wrapper = contact.href ? "a" : "div";
        
                    return (
                    <Wrapper
                        key={index}
                        href={contact.href || undefined}
                        target={contact.href?.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-6 rounded-xl
                        bg-black/40 border border-blue-600/20
                        hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20
                        transition-all duration-300"
                    >
                        {/* Icon */}
                        <div
                            className="flex items-center justify-center w-12 h-12 rounded-lg
                            bg-gradient-to-br from-[#6162ff] to-[#b352ff]"
                        >
                            <Icon className="w-6 h-6 text-white" />
                        </div>
        
                        {/* Text */}
                        <div>
                            <p className="font-jetbrains text-sm text-gray-400">
                                {contact.label}
                            </p>
                            <p className="font-jetbrains text-white text-sm md:text-base">
                                {contact.value}
                            </p>
                        </div>
                    </Wrapper>
                    );
                })}
            </div>
        </section>
    );
}  