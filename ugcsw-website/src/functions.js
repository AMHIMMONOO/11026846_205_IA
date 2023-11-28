
// A function to fetch the latest news or event from an API
const fetchNews = async () => {
  // Replace this with your own API endpoint
  const response = await fetch("https://example.com/api/news");
  const data = await response.json();
  return data;
};

// A function to fetch the featured courses from an API
const fetchCourses = async () => {
  // Replace this with your own API endpoint
  const response = await fetch("https://example.com/api/courses");
  const data = await response.json();
  return data;
};

// A custom hook to fetch data and handle loading and error states
const useFetch = (fetchFunction) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFunction();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchFunction]);

  return { data, loading, error };
};

