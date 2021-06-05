import React from 'react';

import { SearchInput } from '@/presentation/components';
import searchInputInterface from "@/presentation/components/searchInput/searchInputInterface"

const makeSearchInput: React.FC<searchInputInterface> = ({isExpanded}) =>  {
  return <SearchInput isExpanded={isExpanded}/>;
}

export default makeSearchInput;