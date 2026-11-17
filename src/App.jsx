import React from 'react'
import Section_1 from './Section_1/Section_1'
import Section_2 from './Section_2/Section_2'  

const cards = [
  {
    id: 1,
    img: "https://www.bmu.edu.in/wp-content/uploads/2026/05/B-Tech-for-Working-profession1.jpg",
    alt: "Working Professionals",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    button: "Satisfied",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Card 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius quisquam debitis molestiae expedita modi quaerat nisi quasi perspiciatis corrupti",
    button: "Satisfied",
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    alt: "Card 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanrupti",
    button: "Unsatisfied",
  },
];
const App = () => {
  return (
    <div>
      <Section_1 cards={cards}/>
      <Section_2 />
    </div>
  )
}

export default App