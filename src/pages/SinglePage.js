import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useMarvelService from "../services/MarvelService";
import Spinner from "../components/spinner/Spinner.js";
import Error from "../components/error/Error.js";
import AppBanner from "../components/appBanner/AppBanner.js";

export default function SinglePage (Component, DataType ) {
  const {id} = useSearchParams( );
  const [data, setData] = useState(null);
  const { loading, error, getComic, getCharacter, clearError } = useMarvelService();


 useEffect(( ) => updateData(), [id] );

  const updateData = () => {
    clearError( );
    switch (DataType) {
        case 'comic':
          getComic(id).then(onDataLoaded);
          break;
        case 'character':
          getCharacter(id).then(onDataLoaded);
          break;
    }
  };

  const onDataLoaded = (data) => setData(data);

  const errorMessage = error ? <Error /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !data) ? <Component data={data} /> : null;

  return (
    <>
      =<AppBanner/>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
}