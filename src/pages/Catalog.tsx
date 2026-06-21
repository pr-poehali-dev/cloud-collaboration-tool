import { Link } from "react-router-dom";

const offers = [
  {
    tag: "-45%",
    tagStyle: {},
    img: "https://cdn.poehali.dev/projects/67155911-714a-4d5d-9a81-947faa3e7d84/bucket/7fc0d0d7-1d7c-427a-949e-7eb85998758b.jpg",
    alt: "Бокс из бургерной",
    title: "Бокс «PRIMEIRO»",
    oldPrice: "1 200 ₽",
    newPrice: "660 ₽",
    desc: 'Бокс PRIMEIRO из "Reino Burger". Забрать до 22:00.',
  },
  {
    tag: "-50%",
    tagStyle: { background: "var(--secondary)" },
    img: "https://cdn.poehali.dev/projects/67155911-714a-4d5d-9a81-947faa3e7d84/bucket/d2877463-754a-4e11-bb48-bedf8bc3028e.jpg",
    alt: "Бокс из пиццерии",
    title: "Сет «Пиццурик»",
    oldPrice: "1 400 ₽",
    newPrice: "700 ₽",
    desc: 'Сет "Пиццурик" из пиццерии «Фьюжн». Забрать до 23:00.',
  },
  {
    tag: "-45%",
    tagStyle: { background: "var(--accent)", color: "var(--dark)" },
    img: "https://cdn.poehali.dev/projects/67155911-714a-4d5d-9a81-947faa3e7d84/bucket/3c06e658-efd2-4d90-a330-aea2cd94c70f.jpg",
    alt: "Бокс из пекарни",
    title: "Круассаны",
    oldPrice: "360 ₽",
    newPrice: "199 ₽",
    desc: "Свежая выпечка и десерты из пекарни «Тёплый хлеб». Забрать до 20:00.",
  },
  {
    tag: "-40%",
    tagStyle: { background: "var(--primary)" },
    img: "https://cdn.poehali.dev/projects/67155911-714a-4d5d-9a81-947faa3e7d84/files/bb2d616f-170a-41a9-af2b-f6e45dc42d6a.jpg",
    alt: "Суши-сет",
    title: "Суши-сет «Токио»",
    oldPrice: "1 800 ₽",
    newPrice: "1 080 ₽",
    desc: "Ролл-микс из ресторана «Сакура». Свежий лосось, авокадо, огурец. Забрать до 21:30.",
  },
  {
    tag: "-35%",
    tagStyle: { background: "var(--secondary)" },
    img: "https://cdn.poehali.dev/projects/67155911-714a-4d5d-9a81-947faa3e7d84/files/eab3fcea-9350-4b38-ac99-6603e5a7f80f.jpg",
    alt: "Кофе и выпечка",
    title: "Кофе + выпечка",
    oldPrice: "580 ₽",
    newPrice: "377 ₽",
    desc: "Латте и круассан из кофейни «Утро». Забрать до 19:00.",
  },
  {
    tag: "-50%",
    tagStyle: { background: "var(--accent)", color: "var(--dark)" },
    img: "https://cdn.poehali.dev/projects/67155911-714a-4d5d-9a81-947faa3e7d84/bucket/56ffbc80-d40b-4577-8a61-60288d8f4da6.jpg",
    alt: "Салат-бокс",
    title: "Салат-бокс «Грин»",
    oldPrice: "680 ₽",
    newPrice: "340 ₽",
    desc: "Свежий микс с фетой и овощами из «GreenBowl». Забрать до 20:30.",
  },
  {
    tag: "-45%",
    tagStyle: {},
    img: "https://cdn.poehali.dev/projects/67155911-714a-4d5d-9a81-947faa3e7d84/files/141ed35c-f909-4e74-a320-fc9bac31f6f7.jpg",
    alt: "Вок с лапшой",
    title: "Вок «Бангкок»",
    oldPrice: "950 ₽",
    newPrice: "523 ₽",
    desc: "Вок с креветками и рисовой лапшой из кафе «Азия». Забрать до 22:30.",
  },
  {
    tag: "-30%",
    tagStyle: { background: "var(--primary)" },
    img: "https://cdn.poehali.dev/projects/67155911-714a-4d5d-9a81-947faa3e7d84/files/3e776d74-e5af-40c4-9aa9-e489fd2e4363.jpg",
    alt: "Хачапури",
    title: "Хачапури «Тбилиси»",
    oldPrice: "490 ₽",
    newPrice: "343 ₽",
    desc: "Хачапури по-аджарски из пекарни «Кавказ». Горячее. Забрать до 21:00.",
  },
  {
    tag: "-40%",
    tagStyle: { background: "var(--secondary)" },
    img: "https://cdn.poehali.dev/projects/67155911-714a-4d5d-9a81-947faa3e7d84/files/bad493b2-74e7-48a7-acd3-6b81d9cf5200.jpg",
    alt: "Смузи-боул",
    title: "Смузи-боул «Асаи»",
    oldPrice: "720 ₽",
    newPrice: "432 ₽",
    desc: "Асаи с гранолой и свежими фруктами из «Bowlery». Забрать до 18:00.",
  },
];

const Catalog = () => {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <Link
            to="/"
            style={{ color: "var(--dark)", fontWeight: 700, textDecoration: "none", fontSize: "14px", textTransform: "uppercase" }}
          >
            ← Главная
          </Link>
        </div>
        <h1 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 5vw, 48px)", marginBottom: "32px", textTransform: "uppercase" }}>
          Все предложения
        </h1>
        <div className="menu-grid">
          {offers.map((item, i) => (
            <div className="menu-card" key={i}>
              <span className="menu-tag" style={item.tagStyle}>{item.tag}</span>
              <img src={item.img} alt={item.alt} />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>{item.title}</h3>
                  <span className="price">
                    <s style={{ color: "#bbb", marginRight: "6px", fontWeight: 400 }}>{item.oldPrice}</s>
                    {item.newPrice}
                  </span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;