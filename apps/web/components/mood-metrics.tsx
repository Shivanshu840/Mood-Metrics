"use client"
import { useState } from "react"
import {useRouter } from "next/navigation"
import {
  BarChart3,
  ChevronDown,
  ChevronUp,
  Clock,
  Cog,
  Database,
  ExternalLink,
  KeyRound,
  LayoutDashboard,
  MessageSquare,
  Monitor,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Upload,
  User2,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/avatar"
import { Badge } from "@repo/ui/badge"
import { Progress } from "@repo/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@repo/ui/sidebar"

export function MoodMetricsSidebar() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const router = useRouter();

  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }

  return (
    <Sidebar className="fixed inset-y-0 left-0 z-50 w-72 flex-col border-r border-none bg-[#1a1f2e] flex">
      <SidebarHeader className="border-b border-[#2a304a] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-purple-600 text-white">
            <BarChart3 className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Mood Metrics</h2>
            <p className="text-xs text-slate-400">Listen, Measure & React</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex flex-col flex-1 overflow-y-auto">
        {/* User Profile Section - Shows when expanded or when Profile is active */}
        {( activeSection === "platforms") && (
          <div className="border-b border-[#2a304a] p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-slate-700">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback className="bg-slate-700 text-white">TS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-medium text-white">Thairshan Suthakaran</h3>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>TS001</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                  <span>VD - TV</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Menu */}
        <div className="p-4">
          <SidebarMenu className="space-y-1">
            {/* Platforms Section */}
            <SidebarMenuItem>
              <SidebarMenuButton
                className="flex w-full items-center hover:cursor-pointer justify-between py-2"
                onClick={() => toggleSection("platforms")}
              >
                <div className="flex items-center">
                  <Monitor className="h-5 w-5 mr-3 text-slate-400" />
                  <span className="text-slate-300">Platforms</span>
                </div>
                {activeSection === "platforms" ? (
                  <ChevronUp className="h-4 w-4 text-slate-400" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Platforms Content */}
            {activeSection === "platforms" && (
              <div className="ml-2 mt-2 space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">PLATFORMS</div>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={()=>{router.push("/dashboard")}} className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md ">
                      <div className="flex w-full items-center">
                        <div className="flex items-center">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          <span>Amazon</span>
                        </div>
                        <Badge className="ml-auto w-8 px-1 bg-black-500/50 text-white">124</Badge>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                  <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                      <div className="flex w-full items-center">
                        <div className="flex items-center">
                          <Monitor className="h-4 w-4 mr-2" />
                          <span>YouTube</span>
                        </div>
                        <Badge className="ml-auto w-8 px-1 bg-black-500/50 text-white">86</Badge>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                      <div className="flex w-full items-center">
                        <div className="flex items-center">
                          <Smartphone className="h-4 w-4 mr-2" />
                          <span>Twitch</span>
                        </div>
                        <Badge className="ml-auto w-8 px-1 bg-black-500/50 text-white">52</Badge>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                      <User2 className="h-4 w-4 mr-2" />
                      <span>User Profile</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">NAVIGATION</div>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      <span>Reviews</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      <span>Analytics</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Reports</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                      <Cog className="h-4 w-4 mr-2" />
                      <span>Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                    <span>ACCOUNT</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                  <SidebarMenuItem>
                    <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                      <KeyRound className="h-4 w-4 mr-2" />
                      <span>Password Management</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </div>
              </div>
            )}

            {/* Profile Section */}
            <SidebarMenuItem>
              <SidebarMenuButton
                className="flex w-full items-center justify-between hover:cursor-pointer py-2"
                onClick={() => toggleSection("profile")}
              >
                <div className="flex items-center">
                  <User2 className="h-5 w-5 mr-3 text-slate-400" />
                  <span className="text-slate-300">Profile</span>
                </div>
                {activeSection === "profile" ? (
                  <ChevronUp className="h-4 w-4 text-slate-400" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Profile Content */}
            {activeSection === "profile" && (
              <div className="ml-2 mt-2 space-y-4">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    USAGE STATISTICS
                  </div>
                  <div className="bg-[#232838] rounded-md p-3">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Today&apos;s Activity</span>
                      <span className="text-xs font-medium text-purple-400">3h 42m</span>
                    </div>
                    <Progress value={65} className="h-2 bg-slate-700" indicatorClassName="bg-purple-500" />
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-sm text-slate-300">Total Logins</span>
                    <span className="text-sm font-medium text-white">287</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-sm text-slate-300">Member Since</span>
                    <span className="text-sm font-medium text-white">Jul 15, 2024</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    FREQUENTLY VISITED
                  </div>
                  <div className="bg-[#232838] rounded-md p-2 flex items-center justify-between">
                    <span className="text-sm text-slate-300">Amazon Dashboard</span>
                    <Badge className="ml-auto w-8 px-1 bg-black-500/50 text-white">145</Badge>
                  </div>
                  <div className="bg-[#232838] rounded-md p-2 flex items-center justify-between">
                    <span className="text-sm text-slate-300">YouTube Analytics</span>
                    <Badge className="ml-auto w-8 px-1 bg-black-500/50 text-white">87</Badge>
                  </div>
                  <div className="bg-[#232838] rounded-md p-2 flex items-center justify-between">
                    <span className="text-sm text-slate-300">Twitch Metrics</span>
                    <Badge className="ml-auto w-8 px-1 bg-black-500/50 text-white">52</Badge>
                  </div>
                </div>
              </div>
            )}

            {/* Settings Section */}
            <SidebarMenuItem>
              <SidebarMenuButton
                className="flex w-full items-center hover:cursor-pointer justify-between py-2"
                onClick={() => toggleSection("settings")}
              >
                <div className="flex items-center">
                  <Cog className="h-5 w-5 mr-3 text-slate-400" />
                  <span className="text-slate-300">Settings</span>
                </div>
                {activeSection === "settings" ? (
                  <ChevronUp className="h-4 w-4 text-slate-400" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Settings Content */}
            {activeSection === "settings" && (
              <div className="ml-8 mt-2 space-y-3">
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                    <KeyRound className="h-4 w-4 mr-2" />
                    <span>Password Management</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                    <ShieldCheck className="h-4 w-4 mr-2" />
                    <span>2FA Authentication</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                    <Database className="h-4 w-4 mr-2" />
                    <span>API Setup</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton className="text-white hover:bg-blue-700 hover:cursor-pointer rounded-md">
                    <Upload className="h-4 w-4 mr-2" />
                    <span>Keyword Upload</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </div>
            )}
          </SidebarMenu>
        </div>
      </SidebarContent>

      {/* Footer */}
      {!activeSection && (
        <div className="mt-100 border-t border-[#2a304a] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 border border-slate-700">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-slate-700 text-white">TS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-medium text-white">Thairshan</h3>
                <p className="text-xs text-slate-400">TS001</p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-slate-400" />
          </div>
        </div>
      )}
    </Sidebar>
  )
}

