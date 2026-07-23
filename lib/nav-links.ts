import {
  BarChart3,
  FlaskConical,
  LayoutDashboard,
  Package,
  Podium,
  Settings,
  TrendingUpDown,
  Users,
} from "lucide-react";

export const navLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Question Bank",
    href: "/dashboard/question-bank",
    icon: Package,
  },
  {
    title: "Exam",
    href: "/dashboard/exam",
    icon: FlaskConical,
  },

  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Predction",
    href: "/dashboard/predction",
    icon: TrendingUpDown,
  },
  {
    title: "Leader board",
    href: "/dashboard/leader-board",
    icon: Podium,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];
