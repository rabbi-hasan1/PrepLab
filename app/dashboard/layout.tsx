import DashboardFooter from "@/components/dashboard/DashboardFooter";
import DashNavbar from "@/components/dashboard/DashboardNav";
import Sidebar from "@/components/dashboard/DashboardSidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <DashNavbar />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
        <DashboardFooter />
      </div>
    </div>
  );
}
