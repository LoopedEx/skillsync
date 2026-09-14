import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  const [user, setUser] = useState< { id: string; email: string } | null>(null);

  const signIn = async (username: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login/', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      } else {
        const data = await response.json();
        setUser(data);
        setIsAuthenticated(true);
      }
    }  
     catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  };
  return {
    user,
    signIn,
  };
};


