'use client'

import { SidebarProvider, SidebarTrigger } from '@/shared/ui/native/sidebar'
import { AppSidebar } from '@/widgets/sidebar/sidebar'
import { ThemeProvider } from '@/app/providers/withTheme'
import { Toaster } from '@/shared/ui/native/sonner'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-row justify-between w-full min-h-screen p-3">
          <SidebarTrigger />
          <Toaster />
          {children}
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}
