import React from 'react';
import { Link } from 'react-router-dom';
import about from "../../stylesheets/grid.css";
import { AboutButton, ResumeButton, ProjectsButton, ContactButton, MenuImageButton } from "../ui/Menu";
import { Footer } from "../ui/Footer";


const About = () => (
    <div className="grid">
        <div className="menu-left">
            <AboutButton />
            <ResumeButton />
        </div>
        <div className="menu-image" >
            <MenuImageButton />
        </div>
        <div className="menu-right">
            <ProjectsButton />
            <ContactButton />
        </div>
        <div className="about">
            <div className="tux-container">
                <img className="tux" src={require("../../img/big_smile2.png")} />
            </div>
            <div className="about-me">
                <p>Lorem ipsum dolor sit amet,
           tation audire nominati no mel,
           ne vix possit liberavisse.
            Mundi omittantur ex ius,
           fierent accumsan adipiscing
           mel ex. Senserit scripserit
           et sit, cum eu laoreet voluptua
           consetetur. No vim fugit
           aliquip apeirian. Id usu case
           iriure persequeris, pro at
           utroque liberavisse.
           Wisi fugit dolore ut vix, vel at
           labitur principes dissentiet.
           Intellegat adipiscing inciderint
           mel ei, viderer phaedrum pertinacia
           vel ei. Fabulas comprehensam has an,
           nam ea ancillae adolescens complectitur.
           Ius ei stet persius. Debet dissentiet
           ad sea. Eu qui phaedrum patrioque
           honestatis. Sit ne nobis aperiri reprehendunt,
           eum ut scripta voluptatum efficiendi.
           Eu numquam consulatu est, cum harum fuisset
           omittantur ut, eruditi convenire interpretaris
           sed eu. Ea duo vidit utinam signiferumque,
           eu vel debitis sententiae, elitr expetendis cu his.
        </p>
            </div>
        </div>
        <Footer />
    </div>
);

export default About;