import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Facebook, MapPin, ArrowUpRight } from "lucide-react";

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
            value: "github.com/kisekinosedai0912",
            icon: Github,
            href: "https://github.com/kisekinosedai0912",
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/jasperbendol",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/jasper-bendol-3532aa407/",
        },
        {
            label: "Facebook",
            value: "facebook.com/jasper.perks",
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
            <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <p className="font-jetbrains text-[11px] uppercase tracking-[0.3em] text-white/50 mb-3">
                    Let&apos;s talk
                </p>
                <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
                    <span className="gradient-text">Get in Touch with Me</span>
                </h1>
            </motion.div>

            {/* Contact Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {contacts.map((contact, index) => {
                    const Icon = contact.icon;
                    const Wrapper = contact.href ? "a" : "div";

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.4, delay: (index % 2) * 0.06, ease: 'easeOut' }}
                            className="group p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 hover:from-[#6162ff]/60 hover:to-[#b352ff]/60 transition-all duration-300"
                        >
                            <Wrapper
                                href={contact.href || undefined}
                                target={contact.href?.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-[#0a0a1a]/80 backdrop-blur-sm h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cff]/60"
                            >
                                {/* Icon */}
                                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#6162ff] to-[#b352ff] shadow-md shadow-[#6162ff]/30">
                                    <Icon className="w-5 h-5 text-white" />
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <p className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/50">
                                        {contact.label}
                                    </p>
                                    <p className="font-sans text-white/90 text-sm md:text-[15px] truncate">
                                        {contact.value}
                                    </p>
                                </div>

                                {/* Hover arrow */}
                                {contact.href && (
                                    <ArrowUpRight
                                        className="shrink-0 w-4 h-4 text-white/40 transition-all duration-200 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                )}
                            </Wrapper>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
