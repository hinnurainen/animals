import React from "react";
import AnimalCard from "./AnimalCard";

const AnimalsList = ({ animals }) => {
    return (
        <div className="posts">
            {animals.map((a) => (
                <AnimalCard
                    key={a.id}
                    name={a.name}
                    img={a.img}
                    desc={a.desc}
                    aclass={a.aclass}
                    link={a.id}
                />
            ))}
        </div>
    );
};

export default AnimalsList;