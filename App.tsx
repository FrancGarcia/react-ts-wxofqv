import * as React from 'react';
import './style.css';
import { useState } from 'react';
// import the sculptureList array from the data file
import { sculptureList } from './data';

export default function Gallery() {
  // Use the state hook to keep track of the index state and the showMore state
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  // boolean used to keep track of where we are in the sculpture list
  const hasNext = index < sculptureList.length - 1;

  // Event handler used to set the index in the sculpture list
  // Used to traverse the list of sculptures
  function handleNextClick() {
    // If there is a valid next index, then go to it
    if (hasNext) {
      setIndex(index + 1);
      // else restart from the beginning of the list
    } else {
      setIndex(0);
    }
  }

  // Event handler used to set the show more state
  function handleMoreClick() {
    // sets to false
    setShowMore(!showMore);
  }

  // Stores current element (aka sculpture) in the list of sculptures
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
    /*
     * SUMMARY: handleNextClick is called to change index to go to next sculpture in the list.
     * handleMoreClick is called to show details or hide details by setting showMore to true or false.
     * handleMoreClick is initially set to false.
     * If showMore is set to true, then the details are showing and "Hide Details" will be displayed.
     * If showMore is set to false, then the details are NOT showing and "Show details" will be displayed.
     */
  );
}
