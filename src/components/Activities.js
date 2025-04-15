import React from "react"
import { useState } from "react";
import nsulow from "../assets/nsulow.jpg"
import nsu from "../assets/nsu.jpg"
import nsuall from "../assets/nsuall.jpg"
import hbv from "../assets/hbv.jpg"
export function Activities() {
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
        <div id="Activities">
            <h1>Activities</h1>
            <h2 id="Nikkei Student Union">
                Nikkei Student Union @ UCSB
            </h2>
            <h3>Executive Board Member</h3>
            
            <img
                src={nsulow}
                alt="nsu"
                width="100%"
                height="auto"
                style={{ cursor: 'zoom-in', paddingBottom: "50px" }}
                onClick={() => openModal(nsu)}
            />
            <img
                src={nsuall}
                alt="nsu"
                width="100%"
                height="auto"
                style={{ cursor: 'zoom-in' }}
                onClick={() => openModal(nsuall)}
            />
            <h2 id="TeamHBV | Stanford ALC">
                TeamHBV | Stanford ALC
            </h2>
            <h3>Collegiate Member</h3>
            <img
                src={hbv}
                alt="hbv"
                width="100%"
                height="auto"
                style={{ cursor: 'zoom-in' , paddingBottom: "100px" }}
                onClick={() => openModal(hbv)}
            />
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