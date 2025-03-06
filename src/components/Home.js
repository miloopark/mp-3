import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Home = () => (
  <div>
    <header>
      <h1>Min Sung Park</h1>
      <p>My Online Resume</p>
    </header>

    <div className="container">
      <Nav />
      <main>
        <h2>Welcome</h2>
        <img
          src="/headshot.jpg"
          alt="Headshot of Min Sung Park"
          className="headshot"
        />
        <p>My name is Min Sung Park, and I'm a Senior at Boston University studying Computer Science.</p>
        <p>Welcome to my website! Here, you will find everything on my resume, including my education, employment, projects, and more.</p>
      </main>
    </div>

    <Footer />
  </div>
);

export default Home;