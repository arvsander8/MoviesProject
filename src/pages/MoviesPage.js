import React, { useState, useEffect } from 'react';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        // Ajusta la URL según la configuración de tu entorno
        const response = await fetch('http://localhost:8080/movies');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Movies</h2>
      <table className="min-w-full table-auto">
        <thead className="border-b">
          <tr>
            <th className="text-left p-4">Movie</th>
            <th className="text-left p-4">Release Date</th>
            <th className="text-left p-4">Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr className={`border-b ${index % 2 ? 'bg-gray-100' : 'bg-white'}`} key={movie.id}>
              <td className="p-4">{movie.title}</td>
              <td className="p-4">{formatDate(movie.releaseDate)}</td>
              <td className="p-4">{movie.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesPage;
