import React from "react";

const ExerciseImage = ({ exerciseId }) => {
  const apiKey = process.env.REACT_APP_RAPID_API_KEY; // Use the same API key from your env
  const resolution = "180"; // Adjust based on your user's plan
  const imageUrl = `https://exercisedb.p.rapidapi.com/image?exerciseId=${exerciseId}&resolution=${resolution}&rapidapi-key=${apiKey}`;

  return (
    <img
      src={imageUrl}
      alt="Exercise animation"
      style={{ 
        width: '100%', 
        height: '200px', 
        objectFit: 'cover',
        borderRadius: "8px" 
      }}
      loading="lazy"
    />
  );
};

export default ExerciseImage;
