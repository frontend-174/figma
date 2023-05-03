import Link from "next/link";
import React from "react";
import FC from "react";
const Store = () => {
  return (
    <div>
      <main>
        <section class="featured">
          <div class="container">
            <Link href={"/"}>back</Link>
            <h2 class="section-title">Featured products</h2>
            <div class="split">
              <a href="#" class="featured__item">
                <img
                  src="https://images.uzum.uz/cfbol7gv1htd23alqveg/original.jpg"
                  alt=""
                  class="featured__img"
                />
                <p class="featured__details">
                  <span class="price">$99</span>shoe name
                </p>
              </a>
              <a href="#" class="featured__item">
                <img
                  src="https://images.uzum.uz/cfbnmt0l08k0o9qio950/original.jpg"
                  alt=""
                  class="featured__img"
                />
                <p class="featured__details">
                  <span class="price">$99</span>shoe name
                </p>
              </a>
              <a href="#" class="featured__item">
                <img
                  src="https://images.uzum.uz/cfbnp2ivtie1lhbhpsfg/original.jpg"
                  alt=""
                  class="featured__img"
                />
                <p class="featured__details">
                  <span class="price">$99</span>shoe name
                </p>
              </a>
            </div>
          </div>
        </section>

        <section class="our-products">
          <div class="container">
            <h2 class="section-title">Our products</h2>
            <div class="split">
              <a href="#" class="featured__item">
                <img
                  src="https://images.uzum.uz/cfbol7gv1htd23alqveg/original.jpg"
                  alt=""
                  class="featured__img"
                />
                <p class="featured__details">
                  <span class="price">$99</span>shoe name
                </p>
              </a>
              <a href="#" class="featured__item">
                <img
                  src="https://images.uzum.uz/cfbnmt0l08k0o9qio950/original.jpg"
                  alt=""
                  class="featured__img"
                />
                <p class="featured__details">
                  <span class="price">$99</span>shoe name
                </p>
              </a>
              <a href="#" class="featured__item">
                <img
                  src="https://images.uzum.uz/cfbnp2ivtie1lhbhpsfg/original.jpg"
                  alt=""
                  class="featured__img"
                />
                <p class="featured__details">
                  <span class="price">$99</span>shoe name
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Store;
