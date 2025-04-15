import React from "react"
import biobert from "../assets/biobert.png"
import inpainting from "../assets/inpainting.png"
import inpainting1 from "../assets/inpainting1.png"
import inpainting3 from "../assets/inpainting3.png"
import toric from "../assets/toric.png"
import toric1 from "../assets/toric1.png"
import toric2 from "../assets/toric2.png"
import pdfinactive from "../assets/pdfinactive.png"
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
                <div class="tag">LOFTR</div>
                <div class="tag">ORB</div>
            </div>
            <p> While working as a visiting researcher at National Taiwan University, my focus was on developing object segmentation algorithms for proprietary software used in Toric Intraocular Lens Surgery. Toric IOL surgery is performed to correct astigmatism during cataract surgery. Toric IOLs are specially designed lenses that not only replace the clouded cataract but also correct this irregular curvature to improve vision clarity. Precise measurements of angle and radius are necessary, and surgeons often use a temporary marker to physically mark incision spots on the cornea. Our software helps guide surgeons by keeping track of the rotation of the eye, so it is easy to keep track of an incision point without needing to physically mark it. Below is a still frame of the detection algorithm in action:</p>
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
            <p>Originally, the software used LOFTR, a feature matching transformer model, for rotation tracking. By employing dense transformers, LOFTR is able to keep track of finer features than other popular algorithms out there. Occasionally, there would be jumps in camera feed, causing the error rate for other models to sky-rocket, and only LOFTR was able to self correct after each jump (see left graph below). However, the computation time for each frame pair is enormous, and the model was not feasible for live camera feed meant to be used in surgery. After experimenting with multiple light-weight object segmentation algorithms, I was able to come up with an algorithm based off of ORB that looked promising.
            </p>
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
            <p>When there was a jump in the camera feed, the algorithm would catch a spike in the error rate and instead use LOFTR to correct the angle for the following frame.</p>
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
            <p style={{ paddingBottom: "50px" }}>This algorithm kept almost the exact same accuracy as the original LOFTR algorithm, and was able to reduce computation time per frame by over 18 times.</p>

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
                <div class="tag">CUDA</div>
                <div class="tag">CLIPv2</div>
                <div class="tag">VAE</div>
            </div>
            <p> Illegible text has been a notoriously bad drawback for stable diffusion models in the past few years. It's become somewhat of a meme how seemingly coherent pictures are ruined by gibberish on signs. Most SD models are "Character-blind," meaning they encode words at a token level. This makes capturing semantic info for words easier, but makes it impossible for the model to encode spelling, as characters appear in almost infinite configurations to spell out words in a picture. On the other hand, "Character-aware" models that encode words at a character level. This makes it easier to encode spelling, but makes encoding semantics harder as each letter is its own token.
            </p>

            <p>Current solutions to the text problem typically involve pregenerating a control mask, and then performing stable diffusion with the mask on it. Notable examples are <a href="https://github.com/AIGText/GlyphControl-release">GlyphControl</a> (07/2023), Microsoft's <a href="https://github.com/microsoft/unilm/tree/master/textdiffuser-2">TextDiffuser-2</a> (01/2024), <a href="https://github.com/ecnuljzhang/brush-your-text">Brush-Your-Text</a> (12/2023), and ‎
                <a href="http://github.com/ZYM-PKU/UDiffText">UDiffText</a> (11/2023). While the resulting images do contain legible text, and do look relevant to the input prompt, one issue is the mask often makes the image generate around it, conflicting with natural looking generation.
            </p>

            <p>The solution that I came up with was a pipeline involving retroactive inpainting using an OCR and chaining two Autoencoders together.</p>

            My chained pipeline in steps, along with a diagram:
            <ol>
                <li style={{ paddingBottom: '10px' }}>Use Basic CLIP to encode latents from text and store them</li>
                <li style={{ paddingBottom: '10px' }}>Initialize a lightweight OCR, partially decode the latents until the OCR detects text and generate a control mask from the text bounds</li>
                <li style={{ paddingBottom: '10px' }}>Initialize TextDiffuser2 CLIP to generate and encode mask text from original prompt</li>
                <li style={{ paddingBottom: '10px' }}>Feed in original latents+control mask+TD2 latents to TD2 UNET and  Fully decode image</li>
            </ol>
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

            <p>Below is a picture of each step of my pipeline in action when inputting the following prompts:</p>
            <div className="box">
                <img
                    src={inpainting3}
                    alt="inpainting3"
                    width="100%"
                    height="auto"
                    style={{ cursor: 'zoom-in' }}
                    onClick={() => openModal(inpainting3)}
                />
            </div>
            <p>For comparison, here are images generated by my pipeline along with GlyphControl and TextDiffuser2 for the same prompt:</p>
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
            <p style={{ paddingBottom: "50px" }}>By retroactively inpainting, we can prevent the control mask from "hijacking" the image generation, and keep generated images realistic while keeping computation relatively light. </p>

            {/* BioBert*/}
            <h2 id="BioBERT Simplification">BioBERT Medical Transcript Simplification<a href="https://drive.google.com/file/d/1lGdBQf5UKqS2rmS61JzJkxSG5sUWJXC0/view?usp=sharing" >
                <svg fill="white" viewBox="0 0 24 24" height="1em" width="1.3em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z"></path></svg></a></h2>
            <h3>
                Title: Utilizing Bert pre-trained embeddings and language model for medical transcription simplification
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