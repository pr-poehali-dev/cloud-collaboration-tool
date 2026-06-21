export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">LAST*FOOD</div>
        <nav>
          <a href="#">Предложения</a>
          <a href="#">Как это работает</a>
          <a href="#">Заведениям</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Скачать приложение</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ВКУСНО,
              <br />
              ВЫГОДНО,
              <br />
              <span>ЭКОЛОГИЧНО</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Спасаем еду от мусорки! Забирай свежие блюда из кафе и пекарен со скидкой до 70% — заведения меньше выбрасывают, а ты платишь меньше.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Найти еду рядом
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Как это работает
              </button>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              -70%
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #НОЛЬОТХОДОВ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              СВЕЖЕЕ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * СКИДКИ ДО 70% * СПАСАЕМ ЕДУ ОТ МУСОРКИ * СВЕЖЕЕ КАЖДЫЙ ДЕНЬ * МЕНЬШЕ ОТХОДОВ * ВКУСНО И ВЫГОДНО *
            СКИДКИ ДО 70% * СПАСАЕМ ЕДУ ОТ МУСОРКИ * СВЕЖЕЕ КАЖДЫЙ ДЕНЬ * МЕНЬШЕ ОТХОДОВ * ВКУСНО И ВЫГОДНО
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ГОРЯЧИЕ ПРЕДЛОЖЕНИЯ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все предложения
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">-65%</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Бокс из бургерной"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Бокс «Бургерная»</h3>
                  <span className="price">
                    <s style={{ color: "#bbb", marginRight: "6px", fontWeight: 400 }}>1 400 ₽</s>490 ₽
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Сюрприз-набор из бургеров и закусок дня. Кафе «Гриль» · забрать до 22:00.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                -70%
              </span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Бокс из пиццерии"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Бокс «Пиццерия»</h3>
                  <span className="price">
                    <s style={{ color: "#bbb", marginRight: "6px", fontWeight: 400 }}>1 800 ₽</s>540 ₽
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Пара пицц дня на закваске. Пиццерия «Фьюжн» · забрать до 23:00.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                -60%
              </span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Бокс из пекарни"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Бокс «Пекарня»</h3>
                  <span className="price">
                    <s style={{ color: "#bbb", marginRight: "6px", fontWeight: 400 }}>900 ₽</s>360 ₽
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Свежая выпечка и десерты, что не успели продать. Пекарня «Тёплый хлеб» · до 20:00.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МЕНЬШЕ ОТХОДОВ. БОЛЬШЕ ВКУСА.</h2>
            <p className="vibe-text">
              Каждый день кафе и пекарни выбрасывают тонны хорошей еды. Мы соединяем заведения и людей: ты забираешь свежие блюда со скидкой, а планета — меньше мусора. Каждый заказ — это спасённая порция и реальная польза.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Как это работает
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @LAST.FOOD
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Инста 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">LAST*FOOD</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Сервис спасения еды: свежие блюда из кафе и пекарен со скидкой до 70%. Вкусно тебе — полезно планете.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Предложения
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Как это работает
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Заведениям
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Поддержка</h4>
          <ul>
            <li>Ежедневно: 09:00 - 22:00</li>
            <li>support@eda-spasena.ru</li>
            <li>8 800 000-00-00</li>
            <li>Подключить заведение</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 LAST FOOD</span>
          <span>СПАСАЕМ ЕДУ ВМЕСТЕ</span>
          <span>IG / TG / VK</span>
        </div>
      </footer>
    </>
  );
}