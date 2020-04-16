import { useState, useEffect } from "react";

export default function useStats(url) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  
  useEffect(() => {
    fetch(url, {
        method: "GET",
       
    })
    .then(res => res.json())
    .then(response => {
        setStats(response);
        console.log(window.CacheStorage.toString())
        console.log(response)
        setLoading(false);
    })
    .catch(error =>setError(error));
  }, [url]);

  return {
    stats,
    loading,
    error
  };
}



