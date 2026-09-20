import { cn } from "../lib/utils";

const items = [
  "Textbooks",
  "Laptops",
  "Dorm Chairs",
  "Calculators",
  "Cameras",
  "Backpacks",
  "Novels",
  "Gaming Setups",
  "Desk Lamps",
  "Drafting Boards",
];

interface MarqueeProps {
  className?: string;
}

export default function Marquee({ className }: MarqueeProps) {
  return (
    <div
      className={cn(
        "relative flex overflow-hidden py-4 select-none",
        className
      )}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="flex shrink-0 min-w-full justify-around gap-10 marquee-track">
        {items.map((item) => (
          <span
            key={`a-${item}`}
            className="text-sm font-medium text-muted whitespace-nowrap uppercase tracking-widest"
          >
            {item}
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="flex shrink-0 min-w-full justify-around gap-10 marquee-track"
      >
        {items.map((item) => (
          <span
            key={`b-${item}`}
            className="text-sm font-medium text-muted whitespace-nowrap uppercase tracking-widest"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
