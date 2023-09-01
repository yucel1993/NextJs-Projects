"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error }) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  // Check if we're on the client side before using router
  if (typeof window !== "undefined") {
    return (
      <div className="mt-64 text-center">
        <h1 className="text-red-600 text-2xl">Something went wrong</h1>
        <button
          className="bg-red-400 mt-10 p-5 border-10 "
          onClick={() => router.push("/")}
        >
          Return Main Page
        </button>
      </div>
    );
  }

  // Return a static message on the server side
  return (
    <div className="mt-64 text-center">
      <h1 className="text-red-600 text-2xl">Something went wrong</h1>
      <p>Please try again later.</p>
    </div>
  );
}
