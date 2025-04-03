"use client"
import { MoodMetricsSidebar } from "@/components/mood-metrics";
import { SidebarProvider } from "@repo/ui/sidebar";





export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            <SidebarProvider>
            <MoodMetricsSidebar/>
            </SidebarProvider>
            <main className="flex-1 p-6 lg:pl-72">
          {children}
          </main>
        </body>
      </html>
    );
  }