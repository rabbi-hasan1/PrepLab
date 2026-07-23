export default function DashboardFooter() {
  return (
    <footer className="border-t h-20 bg-background">
      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs  md:flex-row">
          <p>© {new Date().getFullYear()} PrepLab. All rights reserved.</p>

          <span>Version 1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
