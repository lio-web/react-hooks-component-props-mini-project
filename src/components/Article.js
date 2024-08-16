// Article.js
import React from 'react';

// Helper function to determine the emoji and time display
const getReadTimeIndicator = (minutes) => {
  if (minutes < 30) {
    // Calculate the number of coffee cup emojis
    const numCups = Math.ceil(minutes / 5);
    return `${'☕️'.repeat(numCups)} ${minutes} min read`;
  } else {
    // Calculate the number of bento box emojis
    const numBentoBoxes = Math.ceil(minutes / 10);
    return `${'🍱'.repeat(numBentoBoxes)} ${minutes} min read`;
  }
};

const Article = ({ title, date = "January 1, 1970", preview, readTime }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{getReadTimeIndicator(readTime)}</p>
    </article>
  );
};

export default Article;
