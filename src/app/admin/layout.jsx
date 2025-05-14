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
    <div className="flex h-screen w-screen overflow-hidden bg-neutral-800">
      <AdminSidebar />
      <div className="flex-1 bg-neutral-900 p-6 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
