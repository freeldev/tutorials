import React from "react";
import { Link } from "react-router-dom";
import { MainMenu } from "./ui/MainMenu";
import "../stylesheets/pages.scss";

const PageTemplate = ({ children }) => (
  <div className="page">
    <MainMenu />
    {children}
  </div>
);

export const Home = () => (
  <PageTemplate>
    <div className="home">
      <h1>THIS IS MY HOME PAGE</h1>
    </div>
  </PageTemplate>
);

export const Whoops404 = ({ location }) => (
  <section className="whoops-404">
    <h1>Resource not found at '{location.pathname}'</h1>
  </section>
);

export const Events = () => (
  <PageTemplate>
    <section className="events">
      <h1>[Event Calendar]</h1>
    </section>
  </PageTemplate>
);

export const Products = () => (
  <PageTemplate>
    <section className="products">
      <h1>[Product Catalog]</h1>
    </section>
  </PageTemplate>
);

export const Contact = () => (
  <PageTemplate>
    <section className="contact">
      <h1>[Contact Us]</h1>
    </section>
  </PageTemplate>
);

export const About = ({ match }) => (
  <PageTemplate>
    <section className="about">
      <h1>About</h1>
    </section>
  </PageTemplate>
);
