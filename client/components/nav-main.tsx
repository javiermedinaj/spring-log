"use client"

import { type LucideIcon } from "lucide-react"
import Link from "next/link"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <Link href={item.url} className="flex items-center gap-2">
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
            {item.items && (
              <div className="ml-6 mt-2 space-y-1">
                {item.items.map((subItem) => (
                  <SidebarMenuButton key={subItem.title} asChild>
                    <Link 
                      href={subItem.url}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {subItem.title}
                    </Link>
                  </SidebarMenuButton>
                ))}
              </div>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}