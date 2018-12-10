import React from 'react';
import PropTypes from 'prop-types';
import Button from './CustomButton';
import { NavLink } from "react-router-dom"

export const AboutButton = () => (
    <NavLink style={{ textDecoration: 'none' }} to="/">
        <Button>About</Button>
    </NavLink>
)

export const ResumeButton = () => (
    <NavLink style={{ textDecoration: 'none' }} to="/resume">
        <Button>Resume</Button>
    </NavLink>
)

export const MenuImageButton = () => (
    <img className="sig" src={require('../../img/sig.png')} />
);

export const ProjectsButton = () => (
    <NavLink style={{ textDecoration: 'none' }} to="/projects">
        <Button>Projects</Button>
    </NavLink>
)

export const ContactButton = () => (
    <NavLink style={{ textDecoration: 'none' }} to="/contact">
        <Button>Contact</Button>
    </NavLink>
);
