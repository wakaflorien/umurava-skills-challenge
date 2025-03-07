// app/unauthorized/page.tsx
"use client";

import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";

export default function UnauthorizedPage() {
  const { data, logout } = useAuth();
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md text-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-16 w-16 text-red-500 mx-auto" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
        
        <h1 className="text-2xl font-bold text-gray-800">Access Denied</h1>
        
        <p className="text-gray-600">
          You do not have permission to access this page. Please contact an administrator if you believe this is an error.
        </p>
        
        <div className="pt-4 space-y-4">
          {data.user.userRole === "admin" ? (
            <Link 
              href="/admin/dashboard" 
              className="block w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Go to Admin Dashboard
            </Link>
          ) : data.user.userRole === "participant" ? (
            <Link 
              href="/dashboard" 
              className="block w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Go to User Dashboard
            </Link>
          ) : null}
          
          <button 
            onClick={logout}
            className="block w-full px-4 py-2 text-blue-600 bg-white border border-blue-600 rounded hover:bg-blue-50"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}