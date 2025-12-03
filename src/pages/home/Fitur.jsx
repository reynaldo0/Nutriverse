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
                    padding: 3rem 1.2rem; /* lebih kecil */
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
                    opacity: 0.4;
                    background-attachment: fixed;
                }

                .fitur-wrapper {
                    width: 100%;
                }

                .fitur-title {
                    font-size: 2.2rem; /* KECIL */
                    font-weight: 800;
                    color: #3B3B0E;
                    text-align: center;
                    margin-bottom: 2rem; /* kecil */
                }

                .fitur-card {
                    position: relative;
                    background: #F0FCD7;
                    border-radius: 0.8rem; /* lebih kecil */
                    padding: 1.8rem 2rem; /* lebih kecil */
                    max-width: 950px; /* lebih kecil */
                    margin: auto;
                    box-shadow: 0 6px 16px rgba(0,0,0,0.12);
                }

                .fitur-divider {
                    position: absolute;
                    left: 50%;
                    top: 1.5rem;
                    bottom: 1.5rem;
                    width: 1.5px; /* lebih tipis */
                    background: #b7df98;
                }

                .fitur-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2.5rem; /* lebih kecil */
                    max-width: 720px; /* lebih kecil */
                    margin: auto;
                }

                .fitur-column {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem; /* lebih kecil */
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
                    width: 5rem; /* sebelumnya 7rem → DIPERKECIL 30% */
                    transition: all 0.5s ease;
                    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.18));
                }

                .group:hover .fitur-icon {
                    transform: scale(1.08) rotate(5deg);
                    animation: bounce 0.6s;
                }

                .fitur-text {
                    margin-top: 0.6rem;
                    font-size: 1.1rem; /* lebih kecil */
                    font-weight: 500;
                    color: #3B3B0E;
                }

                @keyframes bounce {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                    100% { transform: translateY(0); }
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .fitur-title { font-size: 1.9rem; }
                    .fitur-grid { grid-template-columns: 1fr; gap: 2rem; }
                    .fitur-divider { display: none; }
                    .right-align, .left-align { align-items: center; }
                    .fitur-icon { width: 4.3rem; } /* kecil */
                    .fitur-text { font-size: 1rem; }
                }
            `}</style>
        </section>
    );
}
