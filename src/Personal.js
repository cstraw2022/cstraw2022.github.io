import React, { useEffect, useRef, useState } from "react";
import Swipe from "./kvid/swipe.mp4"
import NewKanji from "./kvid/newkanji.mp4"
import DetailTap from "./kvid/detailtap.mp4"
import Settings from "./kvid/Settings.png"
import Widget from "./kvid/Widget.png"

export function Personal() {


    // Intersection Observer callback function
    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play(); // Start video when it enters the view
            } else {
                entry.target.pause(); // Pause video when it goes out of view
            }
        });
    };

    // Set up Intersection Observer for the videos
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: "0px",
            threshold: 0.3, // Trigger when 50% of the video is in the view
        });

        const videos = document.querySelectorAll(".video-element");
        videos.forEach((video) => {
            observer.observe(video);
        });

        return () => {
            // Clean up observer on component unmount
            observer.disconnect();
        };
    }, []);
    return (
        <div id="Personal" style={{ minHeight: '1000px' }}>
            <h1>Personal Projects</h1>
            <h2 id="Kanji a Day">Kanji a Day<a href="https://github.com/cstraw2021/kanji-a-day"><svg fill="white" viewBox="0 0 496 512" height="1em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></h2>
            <div class="tagbox">
                <div class="tag">Swift</div>
                <div class="tag">SQLite</div>
            </div>
            <p>One of the more difficult parts of language learning, and memorization in general, is consistency. Oftentimes, slacking on memorization for a week can make you easily lose track of material incredibly quickly. Especially with languages like Japanese and Chinese, the sheer amount of characters needed to be memorized from the get-go can be daunting. With Kanji a Day, looking at just one Kanji (or more!) a day can help with &quot;passive learning&quot; and reinforce the pacing needed to retain information.</p>
            <h2 id="features">Features</h2>
            <table>
                <tr>
                    <td>
                        <div className="Vid">
                            <video
                                className="video-element"
                                loop
                                pointer-events="none"
                                autoPlay
                                muted
                                src={Swipe}
                                type="video/mp4"
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </td>
                    <td>
                        <h3 id="swiping">Swiping</h3>
                        <p>One of my goals is to make this app gesture-based and have as little confusion with navigation as possible. In the main screen, there's a deck of cards with the kanji from the past 14 days. You can swipe a card to the side, and it goes to the back of the deck. This will also affect the home screen widget, as the widget always displays the topmost card of the deck.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="Vid">
                            <video
                                className="video-element"
                                loop
                                pointer-events="none"
                                autoPlay
                                muted
                                src={NewKanji}
                                type="video/mp4"
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </td>
                    <td>
                        <h3 id="reshuffle">Reshuffle</h3>
                        <p>If you feel the kanji of the current day isn't useful, whether you've learned it in the past etc., you can tap the button on the left to reshuffle. You can add as many cards as you want to the deck, and it won't discard the prior 14 days until midnight.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="Vid">
                            <video
                                className="video-element"
                                loop
                                pointer-events="none"
                                autoPlay
                                muted
                                src={DetailTap}
                                type="video/mp4"
                                width="100%"
                                height="auto"
                            />
                        </div>
                    </td>
                    <td>
                        <h3 id="detail-view">Detail View</h3>
                        <p>When tapping on a card, it brings up a more detailed view, containing various words that contain the kanji as well as a plethora of example sentences, all paired with English translations. (data from Tatoeba)</p>
                    </td>
                </tr>

                <tr>
                    <td>
                        <img src={Settings} width="100%" height="auto" alt="t"></img>
                    </td>
                    <td>
                        <h3 id="kanji-grade-level-range">Kanji Grade Level Range</h3>
                        <p>When clicking the button on the right in the card view, it brings you to the settings, where you can select a specific range of grades that you want to pull kanji from. Whether you&#39;re just starting to learn kanji, or you&#39;re just trying to knock the last few kanji out before fluency, you&#39;re able to adjust the level of kanji drawn for your needs. There&#39;s also an option to clear the deck in case you feel like it (mostly to help me debug).</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={Widget} width="100%" height="auto" alt="t"></img>
                    </td>
                    <td>
                        <h3 id="widget-">Widget!</h3>
                        <p>Arguably the most useful part of the app for passive learning. It shows the kanji that&#39;s at the top of the deck, which updates at midnight every night. With this, the app doesn&#39;t need to be opened for you to slowly learn kanji, both conciously and subconciously, while going through your week.</p>
                    </td>

                </tr>
            </table>
            <h2 id="PKMN Showdown Mobile Websocket Client">PKMN Showdown Mobile Websocket Client<a href="https://github.com/cstraw2021/Showdown-Client-Mobile"><svg fill="white" viewBox="0 0 496 512" height="1em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></h2>
            <div class="tagbox">
                <div class="tag">React Native</div>
                <div class="tag">Typescript</div>
                <div class="tag">Websocket</div>
            </div>
            <h3>Description</h3>
            Pokemon Showdown is a great way to enjoy Pokemon battles both with friends and competitively on your computer. While you can easily access the site on your mobile device, the navigation experience is less than ideal. This gave me the idea of developing a mobile client from the ground up in React Native. I felt that building this app would be a fun little project that improves the battling experience on the go, and also would help me brush up my knowledge of react.
            <h3>Login Protocol</h3>
            Showdown has a two factor authentication that requires an assertion key being requested from the server’s action.php. The implementation I used (All contained within LoginScreen.tsx) goes as follows:

            <ol>
                <li style={{ paddingBottom: '20px' }}>When first establishing a websocket connection, the server sends a message containing the “challenge string” (first part of auth) which is stored for later</li>
                <li style={{ paddingBottom: '20px' }}>After the user enters their username (and optionally password) and taps login, the event is handled in one of two ways:
                    <ol>
                    <li style={{ paddingTop: '20px' }}>If the user did not enter a password, an HTTP <code>POST</code>  request is sent to action.php with the act <code>'getassertion'</code> , the username and <code>challstr</code> . (only works on unregistered usernames)</li>
                    <li style={{ paddingTop: '20px' }}>If the user entered a password, an HTTP <code>POST</code> request is sent to action.php with the act <code>'login'</code>, and the username, password and <code>challstr</code> </li>
                    </ol>
                </li>
                <li style={{ paddingBottom: '20px' }}>If the account information is correct, the server’s action.php returns an assertion key. LoginScreen waits for this assertion, and when received, sends a websocket message <code>/trn USERNAME,0,ASSERTION</code> which should successfully authenticate the user.</li>
            </ol>
            <h3>Files</h3>
            WebSocketProvider.tsx
            <p style={{ paddingLeft: '50px' }}>Creates and maintains the websocket connection between the server and the client. Various parts of the app pull from the exported message list.</p>
            FileAccess.tsx

            <p style={{ paddingLeft: '50px' }}>Expo functions for interacting with the file system. Used mainly to update settings.
            </p>
            Components/

            <p style={{ paddingLeft: '50px' }}>Basic code for various components used across the app.
            </p>
            Navigation/

            <p style={{ paddingLeft: '50px' }}>The navigation wrapper that links the screens together (mostly taken from Expo tabs template).
            </p>
            Screens/

            <p style={{ paddingLeft: '50px' }}>Contains the various screens of the app.</p>
        </div>
    )
}