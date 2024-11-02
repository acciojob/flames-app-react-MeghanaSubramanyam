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
  
    let str1 = name1.split('');
    let str2 = name2.split('');
  
    str1.forEach((char) => {
      const indexInStr2 = str2.indexOf(char);
      if (indexInStr2 !== -1) {
        str1.splice(str1.indexOf(char), 1);
        str2.splice(indexInStr2, 1);
      }
    });
  
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
