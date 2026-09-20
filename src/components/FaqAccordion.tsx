import * as Accordion from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "How do I know the buyer or seller is actually a student?",
    answer:
      "Every user must sign in using a verified college email address ending in `.edu` or `@sinhgad.edu`. This restricts platform access strictly to verified peers within our campus circle.",
  },
  {
    question: "Are there any fees for listing or swapping items?",
    answer:
      "No. Loopr is 100% free to use. We do not charge listing fees, transaction commissions, or subscription taxes. All transactions are settled directly between students in person.",
  },
  {
    question: "Where are the best places to meet other students?",
    answer:
      "We strongly recommend meeting at our designated Campus Safe Exchange Zones, such as Nescafe or the Central Library, during daytime hours when these areas are well-lit and busy.",
  },
  {
    question: "What happens if the item is not in the described condition?",
    answer:
      "Because all exchanges happen face-to-face, you can inspect the item thoroughly before final payment or handoff. If you are not satisfied with the item's condition, you are fully entitled to cancel the swap/deal on the spot.",
  },
];

export default function FaqAccordion() {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className="space-y-4"
    >
      {faqs.map((faq) => (
        <Accordion.Item
          key={faq.question}
          value={faq.question}
          className="border-b border-hairline pb-4"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-ink hover:text-primary transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-primary rounded-md">
              {faq.question}
              <ChevronDown className="w-4 h-4 text-muted shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden">
            <AnimatePresence>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="body-sm text-muted pt-2 leading-relaxed">{faq.answer}</p>
              </motion.div>
            </AnimatePresence>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
