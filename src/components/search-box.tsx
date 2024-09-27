'use client';

import { Search } from 'lucide-react';
import React from 'react';

const SearchBox = () => {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div className="relative group">
      <Search className="absolute left-2 top-2 w-5 h-5 text-ligher_bg group-hover:text-white/50 duration-500" />

      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="What do you want to learn today?"
        className="w-80 bg-light_bg pl-8 py-2 rounded-md text-sm group-hover:bg-ligher_bg duration-500"
      />
    </div>
  );
};

export default SearchBox;
