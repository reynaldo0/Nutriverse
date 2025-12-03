import React from "react";

export default function FiturWebsite() {
    return (
        <section className="fitur-container">
            <div className="fitur-bg"></div>

            <div className="fitur-wrapper">
                <h2 className="fitur-title">Fitur Website</h2>

                <div className="fitur-card">
                    <div className="fitur-divider"></div>

                    <div className="fitur-grid">
                        {/* Kiri */}
                        <div className="fitur-column right-align">
                            <div className="fitur-item group">
                                <img src="/icon/nuti2.png" alt="Buku Terpadu" className="fitur-icon" />
                                <span className="fitur-text">Buku Terpadu</span>
                            </div>

                            <div className="fitur-item group">
                                <img src="/icon/nuti3.png" alt="Produk Unggul" className="fitur-icon" />
                                <span className="fitur-text">Produk Unggul</span>
                            </div>
                        </div>

                        {/* Kanan */}
                        <div className="fitur-column left-align">
                            <div className="fitur-item group">
                                <img src="/icon/nuti1.png" alt="AI Interaktif" className="fitur-icon" />
                                <span className="fitur-text">AI Interaktif</span>
                            </div>

                            <div className="fitur-item group">
                                <img src="/icon/nuti1.png" alt="Komunitas" className="fitur-icon" />
                                <span className="fitur-text">Komunitas</span>
                            </div>

                            <div className="fitur-item group">
                                <img src="/icon/nuti4.png" alt="Games" className="fitur-icon" />
                                <span className="fitur-text">Games</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* CSS */}
            <style>{`
                .fitur-container {
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem 1.5rem;
                    position: relative;
                    background: #FCFFEC;
                    overflow: hidden;
                }

                .fitur-bg {
                    position: absolute;
                    inset: 0;
                    background-image: url('/background/herohome.png');
                    background-size: cover;
                    background-position: center;
                    opacity: 0.5;
                    background-attachment: fixed;
                }

                .fitur-wrapper {
                    width: 100%;
                }

                .fitur-title {
                    font-size: 3rem;
                    font-weight: 800;
                    color: #3B3B0E;
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .fitur-card {
                    position: relative;
                    background: #F0FCD7;
                    border-radius: 1rem;
                    padding: 2.5rem 3rem;
                    max-width: 1200px;
                    margin: auto;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                }

                .fitur-divider {
                    position: absolute;
                    left: 50%;
                    top: 2rem;
                    bottom: 2rem;
                    width: 2px;
                    background: #b7df98;
                }

                .fitur-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    max-width: 900px;
                    margin: auto;
                }

                .fitur-column {
                    display: flex;
                    flex-direction: column;
                    gap: 5rem;
                    justify-content: center;
                }

                .right-align {
                    align-items: flex-end;
                }

                .left-align {
                    align-items: flex-start;
                }

                .fitur-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .fitur-icon {
                    width: 7rem;
                    transition: all 0.5s ease;
                    filter: drop-shadow(0 5px 10px rgba(0,0,0,0.2));
                }

                .group:hover .fitur-icon {
                    transform: scale(1.1) rotate(6deg);
                    animation: bounce 0.6s;
                }

                .fitur-text {
                    margin-top: 0.75rem;
                    font-size: 1.4rem;
                    font-weight: 500;
                    color: #3B3B0E;
                }

                @keyframes bounce {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0); }
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .fitur-title { font-size: 2.3rem; }
                    .fitur-grid { grid-template-columns: 1fr; gap: 3rem; }
                    .fitur-divider { display: none; }
                    .right-align, .left-align { align-items: center; }
                }
            `}</style>
        </section>
    );
}
