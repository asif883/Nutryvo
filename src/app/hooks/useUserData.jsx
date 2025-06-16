"use client";

import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

const useUserData = () => {
  const [singleUser, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const { session } = useAuth();
  const user = session?.user;

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) return;

      try {
        const res = await fetch(`/api/users/${encodeURIComponent(user.email)}`);
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();

        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.email]); 

  return { singleUser, loading };
};

export default useUserData;
