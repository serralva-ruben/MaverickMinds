import React, { useState, useEffect } from 'react';
import {mainDivStyle, itemStyle} from './style.js';

const LeaseComponent = () => {
  const [items, setItems] = useState([
    {id: 1, name: "item1", description: "description1"},
    {id: 2, name: "item2", description: "description2"},
    {id: 2, name: "item2", description: "description2"},
    {id: 2, name: "item2", description: "description2"},
    {id: 2, name: "item2", description: "description2"},
    {id: 2, name: "item2", description: "description2"},
    {id: 2, name: "item2", description: "description2"},
    {id: 2, name: "item2", description: "description2"},
    {id: 2, name: "item2", description: "description2"},
    {id: 2, name: "item2", description: "description2"},
    ]);

//   useEffect(() => {

//     fetch('/api/items')
//       .then(response => response.json())
//       .then(data => setItems(data));
//   }, []);

  return (
    <div style={mainDivStyle}>
      <h1>Lease</h1>
      <ul >
        {items.map(item => (
          <li key={item.id} style= {itemStyle}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};





export default LeaseComponent;
