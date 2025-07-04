import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null); 
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsPending(true);
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsPending(false);
      }
    };

    getData();
  }, [url]);

  return { data, isPending };
}
