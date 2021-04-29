import React from "react";
import { Link } from "react-router-dom";

const AnimalsCard = ({ name, link, img, desc, aclass }) => {
    const truncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ");
    };

    return (
        <div className="card">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <em>{aclass}</em>

            <p>{truncate(desc, 30)} ...</p>
            <Link to={`/${link}`}>Read more</Link>
        </div >
    );
};

export default AnimalsCard