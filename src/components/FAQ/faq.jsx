import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Apa itu Bebek Fitria?",
      answer:
        "Bebek Fitria merupakan usaha peternakan telur bebek lokal yang berlokasi di Desa Waluya, Kecamatan Kutawaluya, Kabupaten Karawang dengan kualitas telur premium dan berkomitmen untuk mendukung perekonomian lokal, khususnya masyarakat setempat.",
    },
    {
      question: "Bagaimana cara membeli produk Bebek Fitria?",
      answer:
        "Untuk membeli produk Bebek Fitria, Anda dapat menghubungi kami melalui kontak resmi yang tertera di website atau mengunjungi langsung distributor dan peternakan kami. Selain itu juga Anda dapat menemukan produk kami di Toko Online seperti Shopee, dan Tokopedia.",
    },
    {
      question: "Apakah Bebek Fitria dapat menerima pesanan sesuai permintaan?",
      answer:
        "Ya, kami dapat menerima pesanan sesuai dengan permintaan pelanggan. Anda dapat menentukan pesanan yang diinginkan saat melakukan pemesanan, dan kami akan mengatur pengemasan sesuai dengan kebutuhan Anda.",
    },
    {
      question:
        "Dapatkah saya membeli produk Bebek Fitria secara ecer maupun reseller?",
      answer:
        "Tentu saja! Kami membuka peluang bagi Anda untuk membeli produk Bebek Fitria secara ecer maupun reseller. Dengan demikian, Anda dapat membeli produk kami dalam jumlah yang sesuai dengan kebutuhan Anda. Kami juga memberikan harga yang kompetitif untuk reseller, sehingga Anda dapat memperoleh keuntungan yang maksimal.",
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-items">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span
                className={`faq-arrow ${activeIndex === index ? "up" : "down"}`}
              ></span>
              <span
                className={`faq-question-text ${
                  activeIndex === index ? "active-text" : ""
                }`}
              >
                {item.question}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
