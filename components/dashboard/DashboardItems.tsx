import {
  Bookmark,
  BookOpen,
  Bot,
  FileText,
  FlaskConical,
  Podium,
  Settings,
  Store,
  TrendingUpDown,
} from "lucide-react";
import Cards from "./Cards";

const cards = [
  { title: "প্রশ্ন ব্যাংক", icon: Store },
  { title: "পরীক্ষা", icon: FlaskConical },
  { title: "বই", icon: BookOpen },
  { title: "লিডারবোর্ড", icon: Podium },
  { title: "সম্ভাবনা", icon: TrendingUpDown },
  { title: "নোট", icon: FileText },

  { title: "সংরক্ষণ", icon: Bookmark },
  { title: "এ আই", icon: Bot },
  { title: "সেটিংস", icon: Settings },
];

export default function DashboardItems() {
  return (
    <div className=" flex flex-row gap-3.5 flex-3 items-center flex-wrap bg-[#eeeee] md:border md:rounded-md w-fit  md:p-3">
      {cards.map(({ title, icon }) => (
        <Cards key={title} title={title} icon={icon} />
      ))}
    </div>
  );
}
