import React, { useState } from "react";
import { User, Mail, MapPin, UploadCloud, CheckCircle2 } from "lucide-react";

const Form = () => {
    const [previewImage, setPreviewImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    return (
        <section className="form-section">
            <div className="bg-image"></div>

            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-left">
                    <h1 className="title">
                        Dari kamu untuk{" "}
                        <span className="typed-box">Nutriverse</span>
                    </h1>

                    {/* Nama */}
                    <div className="input-group">
                        <input type="text" placeholder="Nama Lengkap" required />
                        <User className="icon" />
                    </div>

                    {/* Email & Alamat */}
                    <div className="row">
                        <div className="input-group flex-1">
                            <input
                                type="email"
                                placeholder="Email Aktif"
                                required
                            />
                            <Mail className="icon" />
                        </div>

                        <div className="input-group flex-1">
                            <input
                                type="text"
                                placeholder="Asal Daerah"
                                required
                            />
                            <MapPin className="icon" />
                        </div>
                    </div>

                    {/* Deskripsi */}
                    <textarea
                        placeholder="Apa fitur yang ingin ditambahkan?"
                        rows="3"
                        className="textarea"
                    ></textarea>

                    {/* Upload */}
                    <div className="upload-row">
                        <div className="preview-box">
                            {previewImage ? (
                                <img src={previewImage} alt="Preview" />
                            ) : (
                                <span>No file</span>
                            )}
                        </div>

                        <label htmlFor="fileUpload" className="upload-box">
                            <UploadCloud className="upload-icon" />
                            <p>
                                <span className="underline">Click to upload</span>{" "}
                                or drag & drop
                            </p>
                            <p className="upload-hint">
                                PNG, JPG, JPEG, PDF, DOC, MP4 supported
                            </p>
                            <input
                                id="fileUpload"
                                type="file"
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                        </label>
                    </div>

                    {/* Cerita */}
                    <textarea
                        placeholder="Ceritakan pengalamanmu..."
                        rows="4"
                        className="textarea"
                    ></textarea>

                    <button type="submit" className="submit-btn">
                        Kirim
                    </button>
                </div>

                {/* Illustration */}
                <div className="image-side">
                    <img
                        src="/illustrasi/form.png"
                        alt="Ilustrasi"
                        className="illustration"
                    />
                </div>
            </form>

            {/* Modal */}
            {modalOpen && (
                <div
                    className="modal-overlay"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="modal-box"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CheckCircle2 className="modal-icon" />
                        <h2 className="modal-title">Pesan Terkirim!</h2>
                        <p className="modal-desc">
                            Terima kasih sudah berbagi cerita dan ide!
                        </p>
                        <button
                            className="modal-btn"
                            onClick={() => setModalOpen(false)}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}

            {/* CSS */}
            <style>{`

                /* ------------------------------------------------------------------
                   FORM SCALE — INI YANG BIKIN TAMPILANNYA LEBIH KECIL
                ------------------------------------------------------------------ */
                .form-container {
                    transform: scale(0.82);
                    transform-origin: top center;
                }

                @media (max-width: 768px) {
                    .form-container {
                        transform: scale(0.75);
                        width: 100%;
                    }

                    .illustration {
                        width: 170px !important;
                    }
                }

                /* ------------------------------------------------------------------
                   ORIGINAL DESIGN — TIDAK DIUBAH
                ------------------------------------------------------------------ */

                .form-section {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #F0FCD7;
                    padding: 60px 20px;
                }

                .bg-image {
                    position: absolute;
                    inset: 0;
                    background-image: url('/background/herohome.png');
                    background-size: cover;
                    background-position: center;
                    opacity: 0.5;
                    background-attachment: fixed;
                }

                .form-container {
                    position: relative;
                    display: flex;
                    flex-direction: column-reverse;
                    gap: 40px;
                    background: rgba(255,255,255,0.7);
                    backdrop-filter: blur(12px);
                    border-radius: 25px;
                    padding: 35px;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
                    max-width: 1100px;
                    width: 100%;
                    z-index: 10;
                }

                @media (min-width: 1200px) {
                    .form-container {
                        flex-direction: row;
                        padding: 60px;
                    }
                }

                .form-left {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .title {
                    font-size: 30px;
                    font-weight: bold;
                    color: #3F3313;
                }

                .typed-box {
                    background: #3F3313;
                    color: white;
                    padding: 4px 10px;
                    border-radius: 8px;
                    margin-left: 6px;
                }

                .input-group {
                    display: flex;
                    align-items: center;
                    background: #f3f3f3;
                    padding: 12px 16px;
                    border-radius: 50px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                }

                .input-group input {
                    flex-grow: 1;
                    background: transparent;
                    border: none;
                    outline: none;
                }

                .icon {
                    color: #aaa;
                    width: 20px;
                }

                .row {
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                }

                .textarea {
                    width: 100%;
                    padding: 15px;
                    background: #f3f3f3;
                    border: none;
                    border-radius: 20px;
                    resize: none;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                    outline: none;
                }

                .upload-row {
                    display: flex;
                    gap: 15px;
                    align-items: stretch;
                }

                .preview-box {
                    width: 100%;
                    max-width: 150px;
                    height: 150px;
                    background: #fafafa;
                    border: 1px solid #ddd;
                    border-radius: 15px;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #777;
                }

                .upload-box {
                    flex: 1;
                    border: 2px dashed #ccc;
                    background: #fafafa;
                    padding: 20px;
                    border-radius: 20px;
                    cursor: pointer;
                    text-align: center;
                    transition: 0.2s;
                }

                .upload-box:hover {
                    background: #f0f0f0;
                }

                .upload-icon {
                    width: 36px;
                    margin-bottom: 8px;
                    color: #bbb;
                }

                .upload-hint {
                    color: #999;
                    font-size: 12px;
                }

                .submit-btn {
                    width: 100%;
                    padding: 15px;
                    background: #90C444;
                    color: white;
                    border: none;
                    border-radius: 50px;
                    font-weight: bold;
                    transition: 0.2s;
                }

                .submit-btn:hover {
                    background: #7CB13B;
                }

                .image-side {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .illustration {
                    width: 260px;
                    transition: 0.3s;
                }

                .illustration:hover {
                    transform: scale(1.05);
                }

                /* Modal */
                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.4);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    backdrop-filter: blur(2px);
                    z-index: 50;
                }

                .modal-box {
                    background: linear-gradient(to bottom, #E8F8D5, #90C444);
                    padding: 30px;
                    border-radius: 25px;
                    text-align: center;
                    color: #3F3313;
                    width: 90%;
                    max-width: 400px;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                }

                .modal-icon {
                    width: 48px;
                    margin: 0 auto 10px;
                    animation: bounce 1s infinite;
                }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }

                .modal-btn {
                    margin-top: 15px;
                    padding: 10px 25px;
                    background: #3F3313;
                    color: white;
                    border: none;
                    border-radius: 20px;
                }
            `}</style>
        </section>
    );
};

export default Form;
