import React, { useState } from "react";
import "./Products.css";
import product_1 from "../../assets/product-1.png";
import poster_image from "../../assets/poster.png"; // Ganti dengan path file gambar Anda

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={image} alt="Detail Poster" onClick={onClose} />
      </div>
    </div>
  );
};

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="products">
      {/* Container Produk */}
      <div className="product">
        <img src={product_1} alt="Produk" />
        <div className="caption" onClick={openModal}>
          <div className="info-box">
            <p>Detail Info</p>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <Modal isOpen={isModalOpen} onClose={closeModal} image={poster_image} />

      {/* Container Keunggulan */}
      <div className="advantages-container">
        <h2>Keunggulan Produk</h2>
        <div className="advantages">
          <div className="advantage">
            <span className="checkbox">&#10003;</span>
            <p>
              <strong>Proses Alami</strong> Dipelihara dengan metode alami
            </p>
          </div>
          <div className="advantage">
            <span className="checkbox">&#10003;</span>
            <p>
              <strong>Produk Berkualitas</strong> Higienis dan berkualitas
              tinggi
            </p>
          </div>
          <div className="advantage">
            <span className="checkbox">&#10003;</span>
            <p>
              <strong>Kaya Nutrisi</strong> Sumber antioksidan, tinggi vitamin
            </p>
          </div>
          <div className="advantage">
            <span className="checkbox">&#10003;</span>
            <p>
              <strong>Ramah Lingkungan</strong> Praktik berkelanjutan, tanpa
              bahan kimia
            </p>
          </div>
          <div className="advantage">
            <span className="checkbox">&#10003;</span>
            <p>
              <strong>Kontribusi Lokal</strong> Mendukung perekonomian
              masyarakat lokal
            </p>
          </div>
          <div className="advantage">
            <span className="checkbox">&#10003;</span>
            <p>
              <strong>Harga Terjangkau</strong> Harga kompetitif, kualitas
              optimal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
