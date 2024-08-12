import Movie from "./Movie";
import { useOutletContext } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function MovieList() {
  const { movies, deleteMovie, user } = useOutletContext();

  const movieComponent = movies.map((movie) => {
    return (
      <Movie
        key={movie.id}
        movie={movie}
        deleteMovie={deleteMovie}
        user={user}
      />
    );
  });

  return (
    <Fade cascade delay={200}>
      <div className="flex flex-col">
        <img
          src="./images/demon1.png"
          alt="webflix"
          className="h-96 w-full object-cover shadow-lg"
        />
        <div>
          <h1 className="text-center font-serif font-bold underline text-5xl text-primary my-4">
            Welcome! Here are the movies:
          </h1>
        </div>
        <div className="flex flex-wrap justify-center mt-2">
          {movieComponent}
        </div>
      </div>
    </Fade>
  );
}

export default MovieList;
