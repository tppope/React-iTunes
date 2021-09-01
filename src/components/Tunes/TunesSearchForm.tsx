import React, {ChangeEvent, FormEvent, useRef} from 'react';
import {debounce} from "lodash";

//styles
import './TunesSearchForm.scss'

interface Props {
    onSearchFormSubmit: (data: string) => void;
}

const TunesSearchForm: React.FC<Props> = (props) => {

    const searchInput = useRef<HTMLInputElement>(null);

    const handleInput = debounce( (e: ChangeEvent<HTMLInputElement>) => {
        searchForMusic();
    }, 500)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchForMusic();
    }

    //search for music
    const searchForMusic = () => {
        let searchQuery = searchInput.current?.value;

        if (searchQuery)
            props.onSearchFormSubmit(searchQuery);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input autoFocus className="search" type="text" onChange={handleInput} ref={searchInput}/>
            </form>
        </div>
    );
};

export default TunesSearchForm;
