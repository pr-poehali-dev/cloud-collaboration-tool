import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

const Cart = () => {
  const { items, removeItem, updateQty, total, clear } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", phone: "", comment: "", promo: "" });
  const [promoApplied, setPromoApplied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const discount = promoApplied ? Math.round(total * 0.1) : 0;
  const finalTotal = total - discount;

  const handlePromo = () => {
    if (form.promo.toUpperCase() === "LASTFOOD") {
      setPromoApplied(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clear();
  };

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        <div style={{ textAlign: "center", maxWidth: "480px" }}>
          <div style={{ fontSize: "64px", marginBottom: "24px" }}>🎉</div>
          <h1 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "32px", textTransform: "uppercase", marginBottom: "16px" }}>
            Заказ принят!
          </h1>
          <p style={{ fontSize: "16px", color: "#666", marginBottom: "32px" }}>
            Мы отправили подтверждение на ваш номер. Приятного аппетита!
          </p>
          <button className="btn-cta" onClick={() => navigate("/catalog")}>
            Вернуться к предложениям
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", padding: "40px 20px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <Link
            to="/catalog"
            style={{ color: "var(--dark)", fontWeight: 700, textDecoration: "none", fontSize: "14px", textTransform: "uppercase" }}
          >
            ← Назад
          </Link>
        </div>

        <h1 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "clamp(24px, 5vw, 48px)", marginBottom: "40px", textTransform: "uppercase" }}>
          Корзина
        </h1>

        {items.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <Icon name="ShoppingCart" size={64} style={{ color: "#ccc", marginBottom: "20px" }} />
            <p style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px", color: "#888" }}>Корзина пуста</p>
            <button className="btn-cta" onClick={() => navigate("/catalog")}>
              Смотреть предложения
            </button>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>

            {/* Список товаров */}
            <div>
              {items.map((item) => (
                <div key={item.title} style={{
                  display: "flex", gap: "16px", alignItems: "center",
                  padding: "16px", border: "var(--border)", background: "white",
                  boxShadow: "4px 4px 0 var(--dark)", marginBottom: "12px"
                }}>
                  <img src={item.img} alt={item.title} style={{ width: "80px", height: "80px", objectFit: "cover", border: "var(--border)", flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontWeight: 800, fontSize: "15px", marginBottom: "4px" }}>{item.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <s style={{ color: "#bbb", fontSize: "13px" }}>{item.oldPrice}</s>
                      <span style={{ fontWeight: 800, color: "var(--primary)" }}>{item.newPrice}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <button
                      onClick={() => updateQty(item.title, -1)}
                      style={{ width: "32px", height: "32px", border: "var(--border)", background: "white", fontWeight: 800, fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >−</button>
                    <span style={{ fontWeight: 800, minWidth: "20px", textAlign: "center" }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.title, 1)}
                      style={{ width: "32px", height: "32px", border: "var(--border)", background: "var(--accent)", fontWeight: 800, fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >+</button>
                  </div>
                  <button onClick={() => removeItem(item.title)} style={{ background: "none", border: "none", cursor: "pointer", color: "#999", padding: "4px" }}>
                    <Icon name="X" size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Форма оформления */}
            <form onSubmit={handleSubmit} style={{ border: "var(--border)", background: "white", boxShadow: "6px 6px 0 var(--dark)", padding: "32px" }}>
              <h2 style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "20px", textTransform: "uppercase", marginBottom: "24px" }}>
                Оформление заказа
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Имя *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ваше имя"
                    style={{ width: "100%", padding: "12px", border: "var(--border)", fontSize: "14px", fontFamily: "Montserrat, sans-serif", background: "var(--bg)", outline: "none" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Телефон *</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    style={{ width: "100%", padding: "12px", border: "var(--border)", fontSize: "14px", fontFamily: "Montserrat, sans-serif", background: "var(--bg)", outline: "none" }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Комментарий к заказу</label>
                <textarea
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder="Пожелания, аллергии, время самовывоза..."
                  rows={3}
                  style={{ width: "100%", padding: "12px", border: "var(--border)", fontSize: "14px", fontFamily: "Montserrat, sans-serif", background: "var(--bg)", outline: "none", resize: "vertical" }}
                />
              </div>

              <div style={{ marginBottom: "28px" }}>
                <label style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", display: "block", marginBottom: "6px" }}>Промокод</label>
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    value={form.promo}
                    onChange={(e) => setForm({ ...form, promo: e.target.value })}
                    placeholder="Введите промокод"
                    disabled={promoApplied}
                    style={{ flex: 1, padding: "12px", border: "var(--border)", fontSize: "14px", fontFamily: "Montserrat, sans-serif", background: promoApplied ? "#f0ffe0" : "var(--bg)", outline: "none" }}
                  />
                  <button
                    type="button"
                    onClick={handlePromo}
                    disabled={promoApplied}
                    className="btn-cta"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {promoApplied ? "Применён ✓" : "Применить"}
                  </button>
                </div>
                {promoApplied && (
                  <p style={{ fontSize: "13px", color: "green", fontWeight: 700, marginTop: "6px" }}>Скидка 10% применена!</p>
                )}
              </div>

              {/* Итог */}
              <div style={{ borderTop: "var(--border)", paddingTop: "20px", marginBottom: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ fontSize: "14px", color: "#666" }}>Сумма</span>
                  <span style={{ fontWeight: 700 }}>{total} ₽</span>
                </div>
                {promoApplied && (
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <span style={{ fontSize: "14px", color: "green" }}>Скидка</span>
                    <span style={{ fontWeight: 700, color: "green" }}>−{discount} ₽</span>
                  </div>
                )}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", fontWeight: 800 }}>
                  <span>Итого</span>
                  <span style={{ color: "var(--primary)" }}>{finalTotal} ₽</span>
                </div>
              </div>

              <button type="submit" className="btn-cta" style={{ width: "100%", fontSize: "16px", padding: "16px" }}>
                Оформить заказ
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
