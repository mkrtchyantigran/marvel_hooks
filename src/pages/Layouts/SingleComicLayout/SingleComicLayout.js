
import { Link} from "react-router-dom";

import useMarvelService from "../../../services/MarvelService";
import Spinner from "../../../components/spinner/Spinner";
import Error from "../../../components/error/Error";

import './singleComicLayout.scss'

export default function SingleComicLayout({data}) {
  
  const { title, description, pageCount, thumbnail, language, price } = data;
  return (
    <div className="single-comic">
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">{language}</p>
        <p className="single-comic__price">{price}</p>
      </div>
      <button onClick={handleBackClick} className="single-comic__back">
        Back to all
      </button>
    </div>
  )
}
