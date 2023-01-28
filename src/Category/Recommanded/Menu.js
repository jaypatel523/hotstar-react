import React from "react";
import styled from "styled-components";


const Img = styled.div`
    text-align: center;

    
    img {
        /* border: 1px solid yellow; */
        width: 300px;
        height: 200px;
        border-radius: 5px;
    }

    

    img:hover {
        border: 2px solid white;
        /* width: 310px; */
        /* height: 210px; */
        transform: scale(1.1);
    }
`;

const Menu = ({ items }) => {
    // console.log(items);
    return (
        <>
            {items.map((item, index) => {
                const { cardImg } = item;

                return (
                    <Img key={index}>
                        <img src={cardImg} alt="" />
                    </Img>
                )
            })}
        </>
    )
}

export default Menu;