import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";


// =============================================================================
// КОНТЕКСТ АУТЕНТИФИКАЦИИ
// =============================================================================
export const AuthContext = createContext();

const API_BASE_URL = "https://suppliers-backend-nphe.onrender.com/api";

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const logout = () => {
    setToken(null);
  };

  // Универсальная функция для выполнения запросов к API
  const authenticatedFetch = useCallback(
    async (endpoint, options = {}) => {
      setLoading(true);
      setError(null);

      // Добавляем заголовок авторизации, если токен существует
      if (token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
          ...options,
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
        });

        if (response.status === 401) {
          // Если токен недействителен, выходим из системы
          logout();
          throw new Error("Не авторизован. Пожалуйста, войдите снова.");
        }

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || `Ошибка API: ${response.status}`);
        }

        return data;
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [token]
  );

  const value = {
    token,
    setToken,
    logout,
    loading,
    error,
    authenticatedFetch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
