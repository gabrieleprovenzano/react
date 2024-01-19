import React from 'react';
import Age from './Age'; 

const Welcome = ({ name, age }) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>

      {age > 18 && <Age key={1} value={1} />}

      {age !== undefined && <Age key={2} value={2} />}

      {age > 18 && age < 65 && <Age key={3} value={3} />}

      {age > 18 && age < 65 && name === "John" && <Age key={4} value={4} />}

      {age <= 18 && <Age key={5} value={5} />}
    </div>
  )
}

export default Welcome