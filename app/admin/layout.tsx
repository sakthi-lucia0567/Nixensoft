"use client";

import type React from "react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Briefcase,
} from "lucide-react";
import {
  // UserButton,
  useUser,
  useClerk,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    signOut(() => router.push("/"));
  };

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const isLoginPage = pathname.startsWith("/admin/login");

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (!isLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <div className="min-h-screen bg-gray-100">
          {/* Mobile sidebar toggle */}
          <div className="lg:hidden fixed top-0 left-0 right-0 z-30 bg-white border-b p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Nixensoft Admin</h1>
            <div className="flex items-center gap-4">
              {/* <UserButton afterSignOutUrl="/admin/login" /> */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 z-20 w-64 bg-white border-r transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
          >
            <div className="p-6 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Nixensoft Admin</h1>
            </div>

            <nav className="mt-6">
              <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">
                Main
              </div>
              <Link
                href="/admin/dashboard"
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                  isActive("/admin/dashboard")
                    ? "bg-gray-100 border-l-4 border-blue-600"
                    : ""
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <LayoutDashboard className="w-5 h-5 mr-3" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/admin/blog"
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                  isActive("/admin/blog")
                    ? "bg-gray-100 border-l-4 border-blue-600"
                    : ""
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <FileText className="w-5 h-5 mr-3" />
                <span>Blog Management</span>
              </Link>
              <Link
                href="/admin/leads"
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                  isActive("/admin/leads")
                    ? "bg-gray-100 border-l-4 border-blue-600"
                    : ""
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Users className="w-5 h-5 mr-3" />
                <span>Form Leads</span>
              </Link>
              <Link
                href="/admin/seo"
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                  isActive("/admin/seo")
                    ? "bg-gray-100 border-l-4 border-blue-600"
                    : ""
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Search className="w-5 h-5 mr-3" />
                <span>SEO Management</span>
              </Link>
              <Link
                href="/admin/careers"
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                  isActive("/admin/careers")
                    ? "bg-gray-100 border-l-4 border-blue-600"
                    : ""
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Briefcase className="w-5 h-5 mr-3" />
                <span>Careers Management</span>
              </Link>

              <div className="px-4 py-2 mt-6 text-xs font-semibold text-gray-400 uppercase">
                Settings
              </div>
              <Link
                href="/admin/settings"
                className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                  isActive("/admin/settings")
                    ? "bg-gray-100 border-l-4 border-blue-600"
                    : ""
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Settings className="w-5 h-5 mr-3" />
                <span>Settings</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-6 py-3 text-gray-700 hover:bg-gray-100"
              >
                <LogOut className="w-5 h-5 mr-3" />
                <span>Logout</span>
              </button>
            </nav>
          </div>

          {/* Main content */}
          <div
            className={`lg:ml-64 min-h-screen pt-0 lg:pt-0 ${
              isSidebarOpen ? "ml-64" : "ml-0"
            } transition-margin duration-200 ease-in-out`}
          >
            <div className="lg:hidden h-16"></div>{" "}
            {/* Spacer for mobile header */}
            <main className="p-6">{children}</main>
          </div>

          {/* Overlay for mobile */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
        </div>
      </SignedIn>
    </>
  );
}
