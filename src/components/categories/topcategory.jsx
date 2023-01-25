import React from "react";
import './topcategory.css';

export default function Categories(){
    return(
        <div class="menu__sub__categories__top menu__sub__categories__category">
          <h3 class="menu__sub__categories__header">
            Top Categories
          </h3>
          <ul class="menu__sub__categories__items">
            <li class="menu__sub__categories__item">
              <a href="#" class="menu__sub__categories__item__link">Apple</a>
            </li>
            <li class="menu__sub__categories__item">
              <a href="#" class="menu__sub__categories__item__link">Banana</a>
            </li>
            <li class="menu__sub__categories__item">
              <a href="#" class="menu__sub__categories__item__link">Pear</a>
            </li>
            <li class="menu__sub__categories__item">
              <a href="#" class="menu__sub__categories__item__link">Orange</a>
            </li>
            <li class="menu__sub__categories__item">
              <a href="#" class="menu__sub__categories__item__link">Watermelon</a>
            </li>
          </ul>
        </div>

    )
}