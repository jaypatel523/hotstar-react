import React from "react";
import { useState } from "react";
import data from "../data"
import Category from "./Category";
import Menu from "./Menu";
import styled from "styled-components";


const Container = styled.div`
    margin-top: 2rem;
`;


const Div = styled.div`
    /* border: 1px solid white; */
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-row-gap: 3rem;
    padding: 2rem;
    /* width: 100vw; */
    /* margin: 0 auto; */

`

// const Img = styled.div`
//     text-align: center;

//     img {
//         /* border: 1px solid yellow; */
//         width: 300px;
//         height: 200px;
//         border-radius: 5px;
//     }

//     img:hover {
//         border: 2px solid white;
//         /* width: 310px; */
//         /* height: 210px; */
//         transform: scale(1.1);
//     }
// `;

const allCategories = ['all', ...new Set(data.map((item) => item.type))];
// console.log(allCategories);

const Recommand = () => {
    const [menuItems, setMenuItems] = useState(data);
    const [category, setCategory] = useState(allCategories);


    const filterItems = (category) => {

        if (category === 'all') {
            setMenuItems(data);
            return;
        }

        const newItems = data.filter((item) =>
            item.type === category
        )
        setMenuItems(newItems);
    }

    // console.log(data);
    return (

        // simple tech

        // <section className="container">
        //     <div className="heading">
        //         <h1> Recommanded For You </h1>
        //     </div>
        //     <div className="boxes">
        //         {data.map((item, index) => {
        //             const { titleImg } = item;
        //             return (
        //                 <img className="bx" key={index} src={titleImg} alt="" />
        //             )
        //             // <img src={titleImg} alt="" />
        //             // console.log(titleImg); 
        //         })}
        //     </div>
        // </section>


        // with styled component 



        <Container>
            <Category category={category} filterItems={filterItems} />
            <Div>

                {/* {data.map((item, index) => {
                    const { cardImg } = item;
                    return (
                        <Img key={index}>
                            <img src={cardImg} alt="" />
                        </Img>
                    )
                })} */}

                <Menu items={menuItems} />
            </Div>
        </Container>
    )
}

export default Recommand;