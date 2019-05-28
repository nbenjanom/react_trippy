import React from 'react';
import Card from "./Card";
import LargeCard from "./largeCard";
// import Config from "../../Config";
import styled, { css } from "styled-components";
import Global from "../../Global";

const Container = styled.div`
    margin-top : 10;
    margin-bottom : 20;
    color : ${Global.color.body};
    font-family : "${Global.font.primary}";

`;


class Gallery extends React.Component {

    render(){
        // On récupère le state cities depuis HomeContainer via Home en props
        let cities = this.props.cities;
        let citiesSliced = cities.slice(1);

        // Variable firstCity pour la largeCard...Technique de boloss NEED SOLUTION ALTERNATIVE
        let firstCity = [{ name : "Gotham",
                           photo : "http://via.placeholder.com/300x200",
                           slug : "Gotham-City" }];
        if (cities[0] !== undefined) {
            firstCity = cities[0];
            // console.log("#Gallery - Render // firstCity: ", firstCity.name);
        }
        
        return(
            <Container className="row">
                <div className='col-12'>
                    <h1>
                        Explorez le monde
                    </h1>
                </div>

               
                    <div className="col-12 col-md-6">
                        <LargeCard
                         name={firstCity.name}
                         photo={firstCity.source}
                         slug={firstCity.slug}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            {citiesSliced.map(({name, source, slug}, index) => {
                                if(cities.length >0) { 
                                    return(
                                                                               
                                            <Card
                                            name={name}
                                            photo={source}
                                            slug={slug}
                                            key={index}
                                            />

                                 
                                )}
                            })}
                        </div>
                  
                </div>
            </Container>
        )
    }
};

Gallery.defaulProps = {
    cities: [{}]
  };

export default Gallery;