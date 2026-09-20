import { motion } from "motion/react";
import { ShieldCheck, Camera, MessagesSquare } from "lucide-react";

const steps = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "Verify Student Email",
    desc: "Create an account using your verified campus email. This ensures that every listing and message comes from an active student at Sinhgad.",
  },
  {
    icon: Camera,
    num: "02",
    title: "Snap, Tag & Post",
    desc: "Upload photos of dorm accessories, laptops, or textbooks. List them for sale, trade them for items you need, or list them as free donations.",
  },
  {
    icon: MessagesSquare,
    num: "03",
    title: "Meet & Exchange",
    desc: "Chat securely in-app without sharing your phone number. Agree on a price and meet up at one of our campus safe zones to finalize the loop.",
  },
];

export default function HowItWorks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <div className="w-12 h-12 rounded-lg bg-surface-card border border-hairline flex items-center justify-center text-primary">
            <step.icon className="w-6 h-6" strokeWidth={2} />
          </div>
          <div className="display-sm text-primary mb-1 font-serif select-none">{step.num}</div>
          <h3 className="title-sm text-ink font-semibold">{step.title}</h3>
          <p className="body-sm text-muted leading-relaxed">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
