import React from 'react';

// Déclaration explicite du type des props
interface GreetingProps {
  name: string;
}

// Composant fonctionnel avec les types
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
