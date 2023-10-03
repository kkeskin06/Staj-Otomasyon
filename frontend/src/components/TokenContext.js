import { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export function useToken() {
  return useContext(TokenContext);
}

export function TokenProvider({ children }) {
  const [token, setToken] = useState(null);

  const setAuthToken = (newToken) => {
    setToken(newToken);
  };

  // Token'i göndermek için bir işlev ekleyin
  const getHeadersWithToken = () => {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };
  };

  return (
    <TokenContext.Provider value={{ token, setAuthToken, getHeadersWithToken }}>
      {children}
    </TokenContext.Provider>
  );
}