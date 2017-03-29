import React from 'react';

// import Feed from './Feed/Feed';
import Search from './Search/searchContainer.js';
import Upload from './Upload/uploadContainer.js';
import Feed from './Feed/feedContainer.js';

const App = () => (
  <div>
    <Search />
    <Upload />
    <Feed />
  </div>
)

export default App;
