// App.js
import React from 'react';
import Home from './Home';
import About from './About';
import Links from './Links';

const user = {
  name: 'John Doe',
  city: 'New York',
  color: 'blue',
  bio: 'Web Developer',
  links: {
    github: 'https://github.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
  },
};

function App() {
  return (
    <div>
      <nav>
        <a href="#home" id="home">Home</a>
        <a href="#about" id="about">About</a>
      </nav>
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} />
      <Links github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
