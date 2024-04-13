import { useState, useEffect } from "react";

const useAsync = <T>(asyncFunction: () => Promise<T>, deps: any[]) => {
  const [data, setData] = useState<T | null>(null);
  const [isError, setIsError] = useState<Error | null>(null);
  const [isLoading, isSetLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      isSetLoading(true);
      try {
        const result = await asyncFunction();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setIsError(error);
        }
      } finally {
        isSetLoading(false);
      }
    };

    fetchData();
  }, deps);

  return { data, isLoading, isError };
};

export default useAsync;
