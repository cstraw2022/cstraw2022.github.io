import React from "react"
import Swipe from "./kvid/swipe.mp4"
import NewKanji from "./kvid/newkanji.mp4"
import DetailTap from "./kvid/detailtap.mp4"
import DetailView from "./kvid/detailview.mp4"
import Settings from "./kvid/Settings.png"
import Widget from "./kvid/Widget.png"
import Diagram from "./diagram.png"
import pdfinactive from "./pdfinactive.png"

export function Projects() {
    return (
        <div id="Projects" style={{ minHeight: '1000px' }}>
            <h1>Projects</h1>
            <h2 id="Kanji a Day">Kanji a Day</h2>
            <p>One of the more difficult parts of language learning, and memorization in general, is consistency. Oftentimes, slacking on memorization for a week can make you easily lose track of material incredibly quickly. Especially with languages like Japanese and Chinese, the sheer amount of characters needed to be memorized from the get-go can be daunting. With Kanji a Day, looking at just one Kanji (or more!) a day can help with &quot;passive learning&quot; and reinforce the pacing needed to retain information.</p>
            <h2 id="features">Features</h2>
            <table>
                <tr>
                    <td>
                        <div className="Vid">
                            <video loop="true" pointer-events="none" autoPlay muted src={Swipe} type="video/mp4" width="100%" height="auto" />
                        </div>
                    </td>
                    <td>
                        <h3 id="swiping">Swiping</h3>
                        <p>One of my goals is to make this app gesture based and have as little confusion with navigation as possible. In the main screen, there&#39;s a deck of cards with the kanji from the past 14 days. You can swipe a card to the side, and it goes to the back of the deck. This will also affect the home screen widget, as the widget always displays the topmost card of the deck. </p>

                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="Vid">
                        <video loop="true" pointer-events="none" autoPlay muted src={NewKanji} type="video/mp4" width="100%" height="auto" />
                        </div>
                    </td>
                    <td>
                        <h3 id="reshuffle">Reshuffle</h3>
                        <p>If you feel the kanji of the current day isn&#39;t useful, whether you&#39;ve learned it in the past etc., you can tap the the button on the left to reshuffle. You can add as many cards as you want to the deck, and it won&#39;t discard the prior 14 days until midnight.</p>

                    </td>
                </tr>
                <tr>
                    <td>
                    <div className="Vid">
                    <video loop="true" pointer-events="none" autoPlay muted src={DetailTap} type="video/mp4" width="100%" height="auto" />
                        </div>
                    </td>
                    <td>
                        <h3 id="detail-view">Detail View</h3>
                        <p>When tapping on a card, it brings up a more detailed view, containing various words that contain the kanji as well as a plethora of example sentences, all paired with English translations. (data from Tatoeba)</p>


                    </td>
                </tr>

                <tr>
                    <td>
                    <img src={Settings}width="100%" height="auto"></img>
                    </td>
                    <td>
                        <h3 id="kanji-grade-level-range">Kanji Grade Level Range</h3>
                        <p>When clicking the button on the right in the card view, it brings you to the settings, where you can select a specific range of grades that you want to pull kanji from. Whether you&#39;re just starting to learn kanji, or you&#39;re just trying to knock the last few kanji out before fluency, you&#39;re able to adjust the level of kanji drawn for your needs. There&#39;s also an option to clear the deck in case you feel like it (mostly to help me debug).</p>
                    </td>
                </tr>
                <tr>
                    <td>
                    <img src={Widget}width="100%" height="auto"></img>
                    </td>
                    <td>
                        <h3 id="widget-">Widget!</h3>
                        <p>Arguably the most useful part of the app for passive learning. It shows the kanji that&#39;s at the top of the deck, which updates at midnight every night. With this, the app doesn&#39;t need to be opened for you to slowly learn kanji, both conciously and subconciously, while going through your week.</p>
                    </td>
                    
                </tr>
    </table>
            <h2 id='BioBERT Simplification'>BioBERT Medical Transcript Simplification</h2>
            <p> Using synonym replacement and text summarization, we explore the methodology of medical transcription simplification and what it means for text to be “simplified”. The synonym simplification process utilizes BioBERT embeddings to identify complex terms and replace them with simpler definitions. The resulting text is then summarized using a BERT2BERT model fine-tuned on a CNN/Dailymail dataset. From the results, we use a standard method for generating reading levels, the Felsch reading ease score test, and find an overall increase in readability after applying our models.</p>
            <p> While I can't directly share the code or our Github Repo under the UCSB Linguistics Github Organization, here is a basic rundown:</p>
            <div className="box">
                <img src={Diagram} alt="W3Schools.com" width="100%" height="auto"></img>
            </div>
            <p>I also recommend taking a look at the paper we wrote for the Linguistics department about our results:</p>
            <div width="30px">            <a href="https://drive.google.com/file/d/1lGdBQf5UKqS2rmS61JzJkxSG5sUWJXC0/view?usp=sharing" target="_blank">
                <img src={pdfinactive} alt="W3Schools.com" width="100%" height="auto"></img>
            </a>
            </div>

            <h2>CloseUp</h2>
            <p> /* Under Construction!! */</p>
            <h2>PokeMMO Mobile Client (unofficial)</h2>
            <p> /* Under Construction!! */</p>
        </div>
    )
}