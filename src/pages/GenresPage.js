import React, { useState, useEffect } from 'react';

const GenresPage = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/genres');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setGenres(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Generos</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenresPage;