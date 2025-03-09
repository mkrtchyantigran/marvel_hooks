
import "./comicsList.scss";

import uw from "../../resources/img/UW.png"
import xMen from "../../resources/img/x-men.png"

export default function ComicsList () {
  return (
    <div className="comics__list">
     
     <button
        className="button button__main button__long"
        
      >
        <div className="inner">
          LOAD MORE
        </div>
      </button>
    </div>
  );
}