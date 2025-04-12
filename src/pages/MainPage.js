import { useState } from "react";

import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";
import SingleCharacterPage from "./singleCharacter";

import decoration from "../resources/img/vision.png";

// Boundary
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

export default function MainPage() {     

    const [selectedChar, setSelectedChar] = useState(null);

    const onCharSelected = id => setSelectedChar(id);

    return (
        <>
            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharInfo charId={selectedChar} />
                </ErrorBoundary>
                <ErrorBoundary>
                    <SingleCharacterPage  />
                </ErrorBoundary>
            </div>
            
            <img src={decoration} alt="vision" className="bg-decoration" />
        </>
    )


}