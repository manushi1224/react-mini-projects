import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

export default function Acc() {
    const songs = [
        {
            id: 0,
            song: 'lovely',
            info: `"Lovely" is a song by American singers Billie Eilish and Khalid. Darkroom and Interscope Records released it as the lead single from the Netflix drama series 13 Reasons Why's second season soundtrack. The artists wrote the song with Eilish's brother and producer Finneas O'Connell. The song has been described as a chamber pop ballad whose lyrics recount Eilish and Khalid trying to overcome serious depression together. The song also appears on the deluxe version of Eilish's EP Don't Smile at Me.`,
            flag : true
        },
        {
            id: 1,
            song: 'everything-i-wanted',
            info: `"Everything I Wanted" (stylized in all lowercase) is a song by American singer and songwriter Billie Eilish, and co-written by Eilish and her brother Finneas O'Connell, who also produced it. Darkroom and Interscope Records released the track as a standalone single on November 13, 2019, and later added it to the reissue of Eilish's debut studio album When We All Fall Asleep, Where Do We Go? (2019) in December that year. It is a house and electronica-influenced pop and alternative pop track with minimal piano and downtempo bass guitar instrumentation. Inspired by a nightmare she experienced, the song is about Eilish's strong relationship with O'Connell and his protectiveness of her from harm.`,
            flag : true
            
        },
        {
            id: 2,
            song: 'sunflower',
            info: `"Sunflower" (alternatively titled "Sunflower (Spider-Man: Into the Spider-Verse)")[3] is a song performed by American rappers and singers Post Malone and Swae Lee, released on October 19, 2018 as a single from the soundtrack to the 2018 animated film Spider-Man: Into the Spider-Verse,[4] and was later included on Post Malone's third studio album Hollywood's Bleeding (2019).[5] An official remix features Latin singers Nicky Jam and Prince Royce.`,
            flag : true
        },
    ];

    function Play(props) {
        const [show, setShow] = useState('');
        const [click, setClick] = useState(-1);
        const [flg, setFlag] = useState(props.song.flag)
        console.log(flg)

        const showAccordion = (props) => {
            if (props !== click) {
                setShow(songs[props].info);
                setClick(props);
            } else {
                setShow('');
                setClick(-1);
            }
            setFlag(!flg)
        };

        return (
            <>
                <div>
                    <button className="btn title" onClick={() => showAccordion(props.song.id)}>
                        <div className="container row">
                            <div className="col-11 d-flex justify-content-start">
                                {props.song.song}
                            </div>
                            <div className="col-1">
                            {flg === true ? <span className="accButton"><FaAngleDown/></span> : <span className="accButton"><FaAngleUp /></span>}
                            </div>
                        </div>
                    </button>
                    {click === props.song.id && <div className="main">{show}</div>}
                </div>
            </>
        );
    }

    return (
        <>
            <>
                <div className='container justify-content-center accbox'>
                    <h1 align="center">Accordion</h1>
                    {songs.map((item) => (
                        <Play key={item.id} song={item} />
                    ))}
                </div>
            </>
        </>
    );
}
