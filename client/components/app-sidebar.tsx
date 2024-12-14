"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  ShoppingCart,
  UsersIcon, // Asegúrate de que este icono exista en Lucide
  CreditCard,
  SquareTerminal,
  GalleryVerticalEnd,
  Command,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Datos de navegación
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatar.png", // Asegúrate de que la ruta sea correcta
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
    },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: ShoppingCart, // Reemplazado de Bot a ShoppingCart
    },
    {
      title: "Users",
      url: "/dashboard/users",
      icon: UsersIcon, // Asegúrate de que el icono exista
    },
    {
      title: "Billing",
      url: "/dashboard/billing",
      icon: CreditCard,
    },
    {
      title: "Documentation",
      url: "/dashboard/documentation",
      icon: BookOpen,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}