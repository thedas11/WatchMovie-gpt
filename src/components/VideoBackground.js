import useMovieTrailer from "../hooks/useMovieTrailer"
import { useSelector } from "react-redux"

const VideoBackground = (props) => {

  const trailer = useSelector(store=>store.movie?.movieTrailer)
  const {videoId} = props

  useMovieTrailer(videoId)
   
 

 return (
  <div className="w-max">

<iframe className=" w-screen aspect-video" width="560"
height="800"
src={"https://www.youtube.com/embed/"+trailer?.key + "?autoplay=1&mute=1"}
allow="autoplay;picture-in-picture">
  

</iframe>
  </div>
)

}




  


export default VideoBackground
