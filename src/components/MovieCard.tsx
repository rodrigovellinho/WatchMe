import { Star, Clock } from "react-feather";
import { memo } from "react";

import "../styles/movie-card.scss";

interface MovieCardComponentProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

function MovieCardComponent(props: MovieCardComponentProps) {
  return (
    <div className="movie-card">
      <img src={props.poster} alt={props.title} />

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              <Star /> {props.rating}
            </div>

            <div>
              <Clock /> {props.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MovieCard = memo(MovieCardComponent);
