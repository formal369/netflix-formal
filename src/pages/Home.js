import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/MovieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from "../components/Banner";
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector(state => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  },[]);

  if(loading) {
    return <ClipLoader color="#ffff" loading={loading} size={150} />
  }

  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      <h1>popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies} />
    </div>
  );
};

export default Home;