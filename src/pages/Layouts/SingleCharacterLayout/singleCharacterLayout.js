import "./singleCharacterLayout.scss";



export default function SingleCharacterLayout({data}) {
    const {name, description, thumbnail} = data;

    return (
        <div className="single-character">
            <img src={thumbnail} alt={name} className="single=character-img" />
            <div className="single-character_info">
                <h2 className="single-character_name">{name}</h2>
                <p className="single-character_descr">{description}</p>
            </div>
          
        </div>
    );
}