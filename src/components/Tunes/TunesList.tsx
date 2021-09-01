import React from 'react';

import './TunesList.scss'
import {Song} from "../../types";
import TunesSong from "./TunesSong";
import {CSSTransition, TransitionGroup} from "react-transition-group";

interface Props {
    songs: Song[]
}

const TunesList: React.FC<Props> = (props) => {

    return (
        <TransitionGroup component="ul" className="tunes-list">
            {props.songs.map(song =>(
                <CSSTransition key={song.id} timeout={200} classNames="song">
                    <li key={song.id}>
                        <TunesSong song={song} />
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default TunesList;
