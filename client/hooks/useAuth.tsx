import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);

    if (!token) {
      router.push("/login"); 
    }
  }, [router]);

  return isAuthenticated;
};