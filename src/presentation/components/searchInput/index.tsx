import React, { useState } from 'react';

import { Input } from "@/presentation/components"

import Styles from "./styles.module.scss"
import Icon from "@/presentation//assets/"

const SearchInput: React.FC = () => {
    const [state, setState] = useState('');
    return (
        <div className={Styles.container}>
            <img src={Icon.searchIcon} alt="search icon" />
            <Input
                placeholder="Search"
                type="search"
                id="site-search"
                state={state}
                setState={(value: string) => { setState(value) }}
                ariaLabel="Search through site content"
                classes={Styles.input}
            />
        </div>
    );
}

export default SearchInput;