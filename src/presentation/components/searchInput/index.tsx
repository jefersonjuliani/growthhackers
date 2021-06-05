import React, { useState } from 'react';
import searchInputInterface from "./searchInputInterface"
import { Input } from "@/presentation/components"

import Styles from "./styles.module.scss"
import Icon from "@/presentation//assets/"

const SearchInput: React.FC<searchInputInterface> = ({ isExpanded }) => {
    const [state, setState] = useState('');
    return (
        <div className={isExpanded ? Styles.container :Styles.menuLink }>
            <img src={Icon.searchIcon} alt="search icon" style={{height: isExpanded? 14: 20 }}/>
            {isExpanded ? (
                <Input
                    placeholder="Search"
                    type="search"
                    id="site-search"
                    state={state}
                    setState={(value: string) => { setState(value) }}
                    ariaLabel="Search through site content"
                    classes={Styles.input}
                />
            ) : null}

        </div>
    );
}

export default SearchInput;