import React from "react";
import "./style.scss";

function Services() {
  return (
    <section id="Services">
      <h1>SERVICES</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div className="ortaligdan">
        <div className="kicikler">
          <i id="icn1" class="fa-solid fa-cart-shopping"></i>
          <h4>E-Commerce</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
        <div className="kicikler">
          <i id="icn2" class="fa-solid fa-car"></i>
          <h4>Auto-Mobiles</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
        <div className="kicikler">
          <i id="icn3" class="fa-brands fa-windows"></i>
          <h4>Windows</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            maxime quam architecto quo inventore harum ex magni, dicta impedit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
