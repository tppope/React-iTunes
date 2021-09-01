import React, {useState} from 'react';

//children
import TunesList from "../components/Tunes/TunesList";
import TunesSearchForm from "../components/Tunes/TunesSearchForm";
import axios from "axios";
import {Song, iTunesSong} from "../types";

interface Props {

}

const Tunes: React.FC<Props> = () => {
    const [songs, setSongs] = useState([]);

    const handleSearchFormSubmit = (data: string) => {
        axios
            .get(
                "https://itunes.apple.com/search" +
                "?term=" +
                encodeURI(data) +
                "&entity=musicTrack" +
                "&limit=5"
            )
            .then((response) => {
                let iTunesSongs = response.data.results.filter(
                    (song: iTunesSong) => song.kind === 'song'
                ).map((song: iTunesSong) => extractData(song))

                setSongs(iTunesSongs);

            });
    }


    const extractData = ({
                             trackId: id,
                             trackName: title,
                             artistName: artist,
                             previewUrl: audioFile,
                             artworkUrl100: artwork,
                             collectionName: album,
                         }: iTunesSong):Song => {
        return {
            id,
            title,
            artist,
            audioFile,
            artwork,
            album,
        } as Song;
    };

    return (
        <article className="tunes">
            <h1>Tunes</h1>
            <TunesSearchForm onSearchFormSubmit={handleSearchFormSubmit}/>
            <TunesList songs={songs}/>
        </article>
    );
};

export default Tunes;
