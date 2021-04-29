import React from "react";

const NewAnimal = ({ change, submit }) => {
    return (
        <form onSubmit={submit}>
            <label>Name </label>
            <input type="text" name="name" onChange={change} />

            <label>Class </label>
            <select name="aclass" onChange={change}>
                <option value="mammals">Mammals</option>
                <option value="birds">Birds</option>
                <option value="eptiles">Reptiles</option>
                <option value="amphibians">Amphibians</option>
                <option value="invertebrates">Invertebrates</option>
            </select>

            <label>Img url </label>
            <input type="url" name="img" onChange={change} />

            <label>Description </label>
            <textarea type="text" name="desc" onChange={change} />

            <label>Read more link </label>
            <input type="url" name="link" onChange={change} />

            <button type="submit">Add new animal </button>
        </form>
    );
};

export default NewAnimal;