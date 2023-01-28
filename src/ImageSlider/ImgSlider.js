import React from "react";
import { useState, useEffect } from "react";
import data from "./data";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';



const ImgSlider = () => {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <section className="section">
            <div className="section-center">
                {data.map((item, personIndex) => {
                    const { url } = item;

                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={personIndex}>
                            <img src={url} alt={url} className="person-img" />
                        </article>
                    );
                })}

                {/* <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft className="prev-icon" />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight className="next-icon" />
                </button> */}


            </div>
        </section>
    );
}

export default ImgSlider;