"use client";

import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarTrigger className="md:hidden" aria-label="Toggle Sidebar">
          <Menu className="w-6 h-6 p-4 mt-2 text-slate-700" />
        </SidebarTrigger>
        {children}
      </SidebarInset>
    </SidebarProvider>
    <Footer />
    </>
  );
}
