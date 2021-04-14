import React, { useState } from 'react';

export default function Song() {
  const [tav, setTav] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="addsong">
      <div className="input">
        <form onSubmit={handleSubmit}>
          <h3>Add Many Songs (plain text)</h3>
          <textarea
            value={tav}
            onChange={(e) => setTav(e.target.value)}
            cols={42}
            rows={42}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="preview">
        <p>## preview ##</p>
      </div>
    </div>
  );
}
