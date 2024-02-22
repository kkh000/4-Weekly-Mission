async function useFetch(apiUrl) {
  const API_URL = process.env.REACT_APP_API_URL;

  const url = new URL(apiUrl, API_URL);

  const response = await fetch(url);
  const result = await response.json();
  const responseError = result?.error ?? 'Fetch response failed';

  if (!response.ok) {
    throw new Error(`User response error: ${responseError}`);
  }

  console.log(result);

  return result;
}

export default useFetch;
