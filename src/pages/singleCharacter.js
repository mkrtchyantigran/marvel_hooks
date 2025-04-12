import "./singleCharacter.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";

const _API_URL = "https://gateway.marvel.com:443/v1/public";
const _API_KEY = "apikey=40e2aa9621e1603b7ea9a63e26483c6d";

export default function SingleCharacterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isValidationError, setIsValidationError] = useState(false);
    const [isCharacterFound, setIsCharacterFound] = useState(false);
    const [isCharacterNotFound, setIsCharacterNotFound] = useState(false);
    const [selectedComic, setSelectedComic] = useState(null);

    const onSubmit = async (data) => {
        const name = data.comicName.trim();;

        // Reset states
        setIsValidationError(false);
        setIsCharacterFound(false);
        setIsCharacterNotFound(false);
        setComics([]);

        if (!name) {
            setIsValidationError(true);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                `${_API_URL}/comics?titleStartsWith=${name}&${_API_KEY}`
            );
            const json = await response.json();

            console.log(json);

            if (json.data.results.length > 0) {
                setComics(json.data.results);
                setIsCharacterFound(true);
            } else {
                setIsCharacterNotFound(true);
            }
        } catch (err) {
            setIsValidationError(true);
        }

        setLoading(false);
        reset();
    };

    return (
        <div className="single-character">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Find a comic by name:</h1>
                <input
                    {...register("comicName", { required: true })}
                    placeholder="Type comic name"
                />
                <input type="submit" />
                {errors.exampleRequired && (
                    <span className="error-msg">This field is required</span>
                )}
            </form>

            {loading && <p>Loading...</p>}

            {/* Status messages (text only, no icons) */}
            {isValidationError && (
                <p className="status error">Validation error or failed to fetch comics.</p>
            )}
            {isCharacterFound && (
                <p className="status found">Comic(s) found.</p>
            )}
            {isCharacterNotFound && (
                <p className="status not-found">No comic found with that name.</p>
            )}

            {/* Comics list */}
            {comics.length > 0 && (
                <div className="comic-results">
                    {comics.map((comic) => (
                        <div key={comic.id} className="comic-card">
                            <h2>{comic.title}</h2>
                            <img
                                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                alt={comic.title}
                                width="200"
                            />
                            <p>{comic.description || "No description available."}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}