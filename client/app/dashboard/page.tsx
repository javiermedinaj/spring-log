import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import api from "@/lib/api";

export default function DashboardPage() {
  const isAuthenticated = useAuth();
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/");
        setMessage(response.data);
      } catch (error: any) {
        console.error("Error al obtener datos:", error);
        setMessage("No autorizado");
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  if (isAuthenticated === null) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="pt-4">{message}</p>
    </div>
  );
}