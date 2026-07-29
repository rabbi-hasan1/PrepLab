import { ReactNode } from "react";

import DashboardFooter from "@/components/dashboard/DashboardFooter";
import DashNavbar from "@/components/dashboard/DashboardNav";
import Sidebar from "@/components/dashboard/DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-muted/40 select-none">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <DashNavbar />

        <div className="flex-1 overflow-y-auto">
          <main className="p-6">
            <div className="mx-auto max-w-6xl min-h-screen">{children}</div>
          </main>

          <DashboardFooter />
        </div>
      </div>
    </div>
  );
}
