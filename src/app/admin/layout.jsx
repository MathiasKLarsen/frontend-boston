'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminSidebar from "../../Components/AdminSidebar";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    } else {
      setIsAuthenticated(true);
    }
    setCheckingAuth(false);
  }, [router]);

  if (checkingAuth) return <div className="text-white p-8">Checking authentication...</div>;
  if (!isAuthenticated) return null;

  return (
    <section className="flex h-screen">
      <div className="w-64">
        <AdminSidebar />
      </div>
      <main className="flex-1 p-6 flex justify-center items-start bg-neutral-900 overflow-y-auto">
        <div className="w-full max-w-6xl">{children}</div>
      </main>
    </section>
  );
}
