import { LucideIcon } from "lucide-react";

interface CardsProps {
  icon: LucideIcon;
  title: string;
}

function Cards({ icon: Icon, title }: CardsProps) {
  return (
    <div className="flex flex-col items-center gap-1.5  cursor-pointer">
      <div className="flex items-center justify-center bg-white dark:bg-zinc-800 rounded-md border border-zinc-200 dark:border-zinc-700  p-3">
        <Icon strokeWidth={1.5} size={26} />
      </div>
      <p className="font-bangla text-sm">{title}</p>
    </div>
  );
}

export default Cards;
