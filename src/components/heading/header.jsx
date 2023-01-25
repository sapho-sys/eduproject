import React from "react";
import './header.css';

export default function Heading(){
    return (
        <div class="menu__main">
        <div class="menu__main__item menu__main__item--current menu__main__item--home">
          <a class="menu__main__item__link" href="#">Home</a>
        </div><div class="menu__main__item menu__main__item--motors">
          <a class="menu__main__item__link" href="#">Motors</a>
        </div><div class="menu__main__item menu__main__item--fashion">
          <a class="menu__main__item__link" href="#">Fashion</a>
        </div><div class="menu__main__item menu__main__item--electronics">
          <a class="menu__main__item__link" href="#">Electronics</a>
        </div><div class="menu__main__item menu__main__item--toys">
          <a class="menu__main__item__link" href="#">Toys</a>
        </div><div class="menu__main__item menu__main__item--motors">
          <a class="menu__main__item__link" href="#">Motors</a>
        </div><div class="menu__main__item menu__main__item--fashion">
          <a class="menu__main__item__link" href="#">Fashion</a>
        </div><div class="menu__main__item menu__main__item--electronics">
          <a class="menu__main__item__link" href="#">Electronics</a>
        </div>
      </div>
    )
}
