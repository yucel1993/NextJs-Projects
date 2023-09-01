"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateLayout({ children }) {
  const { currentUser } = useAuthContext();
  let router = useRouter();
  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    // !We have already setItem in the authcontent  component and it is faster to call user info from the session storage 
    // !But you can use without sessionstorage 
    if (!user) {
      router.push("login");
    }
  }, [currentUser]);

  return <section>{children}</section>;
}
