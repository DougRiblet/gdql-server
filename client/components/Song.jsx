import React, { useState } from 'react';

export default function Song() {
  const [tav, setTav] = useState('');

  return (
    <div id='addsong'>
      <div class='input'>
        <form onSubmit={handleSubmit}>
          <h3>Add Many Songs (plain text)</h3>
          <textarea
            value={tav}
            onChange={e => setTav(e.target.value)}
            cols={42}
            rows={42}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div class='preview'>
        
      </div>

    </div>
  )
}
