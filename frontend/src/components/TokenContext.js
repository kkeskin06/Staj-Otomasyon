import { createContext, useContext, useEffect, useState } from 'react';

const TokenContext = createContext();

export function useToken() {
  return useContext(TokenContext);
}

export function TokenProvider({ children }) {
  const [token, setToken] = useState(null);
  const [isReady,setIsReady] = useState(false);
  const setAuthToken = (newToken) => {
    localStorage.setItem("AuthInfo", newToken)
    setToken(newToken);
  };

  // const setLogOutToken = () =>{
  //   localStorage.setItem("AuthInfo" , null)
    
  // };

  useEffect(() => {
    const localToken = localStorage.getItem("AuthInfo")
    setToken(localToken)
    setIsReady(true);
  },[])

  // Token'i göndermek için bir işlev ekleyin
  const getHeadersWithToken = () => {
    console.log(token)
    return {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    };
  };

  return (
    <TokenContext.Provider value={{ token, setAuthToken, getHeadersWithToken, isReady }}>
      {children}
    </TokenContext.Provider>
  );
}

