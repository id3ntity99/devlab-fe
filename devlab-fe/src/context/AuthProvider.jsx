import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext.js";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/auth/me",
          {
            withCredentials: true,
          },
        );
        if (response.data && response.data.authenticated === true) {
          setUser(response.data);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    verifySession();
  }, []);

  const login = (userData) => setUser(userData);
  const logout = async () => {
    await axios.post(
      "http://localhost:8080/api/v1/auth/signout",
      {},
      {
        withCredentials: true,
      },
    );
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, isAuthenticated: !!user }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
