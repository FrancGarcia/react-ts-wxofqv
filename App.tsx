import * as React from 'react';
import './style.css';
// You can import files as well and use their components
// jsx files have to exclude the .jsx at the end when importing

// Import the people array
import { people } from './data';

// Import the getImageUrl function
import { getImageUrl } from './util';

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//     </section>
//   );
// }

// Pass in the props as parameters
// function Item({ name, isPacked }) {
//   // If the item is packed, then add a checkmark next to it
//   return (
//     // Rendering items in the list in PackingList component
//     <li className="item">
//       {name} {isPacked && '✔'}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={false} name="Coloring book" />
//         <Item isPacked={true} name="Passport" />
//       </ul>
//     </section>
//   );
// }

export default function List() {
  // Convert each person in people array to a component and put it into listItems
  const listItems = people.map((person) => (
    // Use the person.id as the key to keep track of each unique item
    <ul key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </ul>
  ));

  return (
    <article>
      <h1>Scientists</h1>
      <ul // Display the list items
      >
        {listItems}
      </ul>
    </article>
  );
}
