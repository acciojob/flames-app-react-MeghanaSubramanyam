import React, { useState } from 'react';

function FlamesGame() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateRelationship = () => {
    if (!name1 || !name2) {
      setResult("Please Enter valid input");
      return;
    }

    let str1 = name1;
    let str2 = name2;

    for (let char of name1) {
      if (str2.includes(char)) {
        str1 = str1.replace(char, '');
        str2 = str2.replace(char, '');
      }
    }

    const remainingLength = str1.length + str2.length;
    const relationshipIndex = remainingLength % 6;

    const relationshipMapping = {
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy",
      0: "Siblings",
    };

    setResult(relationshipMapping[relationshipIndex]);
  };

  const clearInputs = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div>
      <input
        type="text"
        data-testid="input1"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        type="text"
        data-testid="input2"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button data-testid="calculate_relationship" onClick={calculateRelationship}>
        Calculate Relationship
      </button>
      <button data-testid="clear" onClick={clearInputs}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default FlamesGame;
