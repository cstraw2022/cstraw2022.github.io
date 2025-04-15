import React from "react"
import biobert from "./biobert.png"
import inpainting from "./inpainting.png"
import inpainting1 from "./inpainting1.png"
import inpainting2 from "./inpainting2.png"
import toric from "./toric.png"
import toric1 from "./toric1.png"
import toric2 from "./toric2.png"
import pdfinactive from "./pdfinactive.png"
import { useState } from 'react';

export function Research() {
    const [showImage, setShowImage] = useState(false);

    const toggleImage = () => {
        setShowImage(prev => !prev);
    };
    const [modalImage, setModalImage] = useState(null);

    const openModal = (imgSrc) => {
        setModalImage(imgSrc);
    };

    const closeModal = () => {
        setModalImage(null);
    };


    return (
        <div id="Research" style={{ minHeight: '1000px' }}>
            <h1>Research Projects</h1>
            {/* RANSAC Optimization*/}
            <h2 id="Algorithm Optimizations for Toric IOL Surgery">Algorithm Optimizations for Toric IOL Surgery<a href="https://drive.google.com/file/d/1bO-9AHbz3uA3lOLNJT9sXg-3tM7bwuag/view?usp=sharing" >
                <svg fill="white" viewBox="0 0 24 24" height="1em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path>
                </svg>
            </a>
            </h2>
            <h3>
                Title: Exploring robust descriptor-based alternatives to LOFTR for live camera feed
            </h3>
            <div class="tagbox">
                <div class="tag">Python</div>
                <div class="tag">PyTorch</div>
                <div class="tag">BioBert</div>
                <div class="tag">BERT2BERT</div>
                <div class="tag">NLTK</div>
            </div>
            <p> Using synonym replacement and text summarization, we explore the methodology of medical transcription simplification and what it means for text to be “simplified”. The synonym simplification process utilizes BioBERT embeddings to identify complex terms and replace them with simpler definitions. The resulting text is then summarized using a BERT2BERT model fine-tuned on a CNN/Dailymail dataset. From the results, we use a standard method for generating reading levels, the Felsch reading ease score test, and find an overall increase in readability after applying our models.</p>
            {/* Blurred Toggle Image */}
            <div className="blur-container" onClick={toggleImage}>
                {!showImage && (
                    <div className="blur-overlay">
                        TW: surgery, click to show
                    </div>
                )}
                {showImage && (
                    <div className="click-to-hide">
                        Click to hide
                    </div>
                )}
                <img
                    src={toric}
                    alt="surgery illustration"
                    className="blur-image"
                    style={{ filter: showImage ? 'none' : 'blur(10px)' }}
                />
            </div>
            <p>I also recommend taking a look at the paper we wrote for the Linguistics department about our results:</p>
            <div className="box">
                <img
                    src={toric1}
                    alt="toric1"
                    width="100%"
                    height="auto"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => openModal(toric1)}
                />
            </div>
            <p>I also recommend taking a look at the paper we wrote for the Linguistics department about our results:</p>
            <div className="box">
                <img
                    src={toric2}
                    alt="toric2"
                    width="100%"
                    height="auto"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => openModal(toric2)}
                />
            </div>
            {/* Char Aware*/}
            <h2 id="Glyph-Aware Inpainting">Glyph-Aware Inpainting<a href="https://drive.google.com/file/d/19cCnXBpndzJWGFkQuv3REEoU888771Q7/view" >
                <svg fill="white" viewBox="0 0 24 24" height="1em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path></svg></a></h2>
            <h3>
                Title: Character-Aware Inpainting as a solution for correcting Glyph errors in smaller Stable Diffusion models
            </h3>
            <div class="tagbox">
                <div class="tag">Python</div>
                <div class="tag">PyTorch</div>
                <div class="tag">BioBert</div>
                <div class="tag">BERT2BERT</div>
                <div class="tag">NLTK</div>
            </div>
            <p> Using synonym replacement and text summarization, we explore the methodology of medical transcription simplification and what it means for text to be “simplified”. The synonym simplification process utilizes BioBERT embeddings to identify complex terms and replace them with simpler definitions. The resulting text is then summarized using a BERT2BERT model fine-tuned on a CNN/Dailymail dataset. From the results, we use a standard method for generating reading levels, the Felsch reading ease score test, and find an overall increase in readability after applying our models.</p>
            <div className="box">
                <img
                    src={inpainting}
                    alt="inpainting"
                    width="100%"
                    height="auto"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => openModal(inpainting)}
                />
            </div>
            <p>I also recommend taking a look at the paper we wrote for the Linguistics department about our results:</p>
            <div className="box">
                <img
                    src={inpainting1}
                    alt="inpainting1"
                    width="100%"
                    height="auto"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => openModal(inpainting1)}
                />
            </div>
            <p>I also recommend taking a look at the paper we wrote for the Linguistics department about our results:</p>
            <div className="box">
                <img
                    src={inpainting2}
                    alt="inpainting2"
                    width="100%"
                    height="auto"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => openModal(inpainting2)}
                />
            </div>
            {/* BioBert*/}
            <h2 id="BioBERT Simplification">BioBERT Medical Transcript Simplification<a href="https://drive.google.com/file/d/1lGdBQf5UKqS2rmS61JzJkxSG5sUWJXC0/view?usp=sharing" >
                <svg fill="white" viewBox="0 0 24 24" height="1em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path></svg></a></h2>
            <div class="tagbox">
                <div class="tag">Python</div>
                <div class="tag">PyTorch</div>
                <div class="tag">BioBert</div>
                <div class="tag">BERT2BERT</div>
                <div class="tag">NLTK</div>
            </div>
            <p> Using synonym replacement and text summarization, we explore the methodology of medical transcription simplification and what it means for text to be “simplified”. The synonym simplification process utilizes BioBERT embeddings to identify complex terms and replace them with simpler definitions. The resulting text is then summarized using a BERT2BERT model fine-tuned on a CNN/Dailymail dataset. From the results, we use a standard method for generating reading levels, the Felsch reading ease score test, and find an overall increase in readability after applying our models.</p>
            <p> While I can't directly share the code or our Github Repo under the UCSB Linguistics Github Organization, here is a basic rundown:</p>
            <div className="box">
                <img
                    src={biobert}
                    alt="biobert"
                    width="100%"
                    height="auto"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => openModal(biobert)}
                />
            </div>
            <p>I also recommend taking a look at our paper and results:</p>

            
            <div width="30px">            <a href="https://drive.google.com/file/d/1lGdBQf5UKqS2rmS61JzJkxSG5sUWJXC0/view?usp=sharing" target="_blank">
                <img src={pdfinactive} alt="s" width="40%" height="auto"></img>
            </a>
            </div>
            {/* Image Modal */}
            {modalImage && (
                <div
                    onClick={closeModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        cursor: 'zoom-out',
                    }}
                >
                    <img
                        src={modalImage}
                        alt="Full view"
                        style={{ maxHeight: '90%', maxWidth: '90%', borderRadius: '10px' }}
                    />
                </div>
            )}
        </div>
    )
}