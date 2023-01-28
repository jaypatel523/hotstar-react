import React from "react";
import styled from "styled-components";

const Div = styled.div`
    text-align: center;
    padding: 2rem;

    button {
        border: none;
        margin: 0 2rem;
        padding: 1rem;
        color: #7b7b7b;
        font-size: 2rem;
        text-transform: capitalize;
    }

    button:hover {
        cursor: pointer;
        color: white;
    }
`

const Category = ({ category, filterItems }) => {
    return (
        <Div>
            {category.map((item, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => filterItems(item)}
                    > {item} </button>
                )
            })}
        </Div >
    )
}

export default Category;