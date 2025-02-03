import Header from "./Header";
import ShimmerUI from "./Shimmer";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondarryContainer";
import usePopularMovies from "../hooks/usePopulaMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse = () => {
  const movie = useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies()

  const gptTrue = useSelector((store=>store?.gpt))
  if (!movie) {
    return (
      <div>
        <Header />
        <ShimmerUI />
      </div>
    );

  }

  else {

  return (
    <div className="w-max overflow-x-hidden no-scrollbar">
      <Header />
      {gptTrue?.gptSearchView === true ? <GptSearch /> :<>
      <MainContainer />
        <SecondaryContainer/>
        </>}
      
    </div>
  );
};
}

export default Browse;
