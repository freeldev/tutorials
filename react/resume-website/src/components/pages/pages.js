import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from "./ui/MainMenu";

const PageTemplate = ({ children }) => (
    <div className="page">
        <Menu />
        {children}
    </div>
);

export const About = () => (
    <PageTemplate>
        <div className="about">
            <h1>THIS IS THE ABOUT PAGE</h1>
        </div>
    </PageTemplate>
);

export const Resume = () => (
    <PageTemplate>
        <div className="resume">
            <h1>THIS IS THE RESUME PAGE</h1>
        </div>
    </PageTemplate>
);

export const Projects = () => (
    <PageTemplate>
        <div className="projects">
            <h1>THIS IS THE PROJECTS PAGE</h1>
        </div>
    </PageTemplate>
);

export const Contact = () => (
    <PageTemplate>
        <div className="contact">
            <h1>THIS IS THE CONTACT PAGE</h1>
        </div>
    </PageTemplate>
);
