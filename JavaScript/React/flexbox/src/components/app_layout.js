import React, { Component } from 'react';
import container from "../stylesheets/layout.css"

const App = () => (
    <body>
        <header>
            <h1>My Page Title</h1>
        </header>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
            <a href="/jobs">Jobs</a>
            <a href="/contact">Contact</a>
        </nav>
        <main>
            <article>
                <img alt="" src="img1.jpg" />
                <p>This is ome awesome content that is onthe page</p>
                <button>Go Somewhere</button>
            </article>
            <article>
                <img alt="" src="img1.jpg" />
                <p>This is ome awesome content that is onthe page</p>
                <button>Go Somewhere</button>
            </article>
            <article>
                <img alt="" src="img1.jpg" />
                <p>This is ome awesome content that is onthe page</p>
                <button>Go Somewhere</button>
            </article>
        </main>
        <footer>Copyright &#169;2017</footer>
    </body>
)

export default App;