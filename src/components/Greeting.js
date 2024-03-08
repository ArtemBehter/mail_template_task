import React from 'react';

const Greeting = ({ gender, lastName }) => {
  let salutation;
  
  if (gender === 'male') {
    salutation = 'Dear Sir';
  } else if (gender === 'female') {
    salutation = 'Dear Madam';
  } else {
    salutation = 'Dear Mx.';
  }

  return (
    <p className="section__title">{salutation} {lastName}</p>
  );
};

export default Greeting;
