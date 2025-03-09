import { useHttp } from "../hooks/http.hook";

 const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp()
  
  const _API_URL = "https://gateway.marvel.com:443/v1/public";
  const _API_KEY = "apikey=f886cb3db7c49504cc7206fb26ead8c0";
  const _LIMIT = 9;
  const _CHAR_OFFSET = 210;

 

  const getAllCharacters = async (offset = _CHAR_OFFSET) => {
    const res = await request(`${_API_URL}/characters?limit=${_LIMIT}&offset=${offset}&${_API_KEY}`);
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_API_URL}/characters/${id}?${_API_KEY}`);
    return _transformCharacter(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description ? `${char.description.slice(0, 210)}...` : "There is no description for this character",
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items
    }
  };

  return {loading, error, getAllCharacters, getCharacter, clearError};
 }

 export default useMarvelService;

