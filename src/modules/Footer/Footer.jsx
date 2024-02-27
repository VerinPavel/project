import React from "react";
import "./_footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2018 <span>«LoremIpsum.net»</span> Все права защищены.
      </p>
      <div className="footer__contaner">
        <div className="footer__payment">
          <img src="../img/footerImg/qiwi.webp" alt="Qiwi wallet" />
          <span>Qiwi wallet</span>
        </div>
        <div className="footer__payment">
          <img src="../img/footerImg/yandexMoney.webp" alt="Yandex Money" />
          <span>Yandex Money</span>
        </div>
        <div className="footer__payment">
          <img src="../img/footerImg/webMoney.webp" alt="Web Money" />
          <span>Web Money</span>
        </div>
        <div className="footer__payment">
          <img src="../img/footerImg/mail.webp" alt="" />
          <a href="mailto:info@ipsum228.com">info@ipsum228.com</a>
        </div>
        <div className="footer__payment">
          <img src="../img/footerImg/vk.webp" alt="" />
          <a href="#">Мы вконтакте</a>
        </div>
      </div>
    </footer>
  );
}
