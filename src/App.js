import React from 'react';

import './App.css';
import MovieList from './Comp/MovieList';

function App() {
  const movies = [
    {
      id: 1,
      title: "Wednesday",
      description: "Horror",
      posterURL: "https://m.media-amazon.com/images/I/41YZTePdSOL._AC_.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Me3an",
      description: "science fiction horror",
      posterURL: "https://th.bing.com/th/id/OIP.SC4_7HPZwfIANrCLcF6AgwHaJQ?pid=ImgDet&rs=1",
      rating: 4,
    },
    {
      id: 3,
      title: "The witcher",
      description: "action",
      posterURL: "https://es.web.img2.acsta.net/pictures/19/11/22/09/33/5060052.jpg",
      rating: 5,
    },
    {
      id: 1,
      title: "Inception",
      description: "Science Fiction, Action",
      posterURL: "https://www.daily-movies.ch/wp-content/uploads/2014/11/daily-movies.ch_Inception.jpeg",
      rating: 4.8,
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      description: "Drama, Crime",
      posterURL: "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_UF894,1000_QL80_.jpg",
      rating: 4.9,
    },
    {
      id: 3,
      title: "The Dark Knight",
      description: "Action, Crime, Drama",
      posterURL: "https://www.prime1studio.com/media/catalog/product/cache/1/image/1400x1400/17f82f742ffe127f42dca9de82fb58b1/h/d/hdmmdc-02_a19.jpg",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Pulp Fiction",
      description: "Crime, Drama",
      posterURL: "https://www.avoir-alire.com/local/cache-vignettes/L240xH327/arton3816-7e2d6.jpg?1682424451",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Fight Club",
      description: "Drama",
      posterURL: "https://static.cinebel.be/img/movie/poster/full/3752_fr_fight_club_1594305685425.jpg",
      rating: 4.5,
    },
  ];

  return (
    <div className='background'>
      <h1>Hello, welcome! This is My Movie List:</h1>
      <MovieList movies={movies} />
      

    </div>
  );
}

export default App;
