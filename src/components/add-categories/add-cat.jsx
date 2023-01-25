import React from "react";
import './add-cart';

export default function SubCategories(){
    return (
        <div class="menu__sub__categories__additional menu__sub__categories__category">
          <h3 class="menu__sub__categories__header">
            Additional Categories
          </h3>
          <ul class="menu__sub__categories__items">
            <li class="menu__sub__categories__item">
              <a href="#" class="menu__sub__categories__item__link">Circle</a>
            </li>
            <li class="menu__sub__categories__item">
              <a href="#" class="menu__sub__categories__item__link">Square</a>
            </li>
            <li class="menu__sub__categories__item">
              <a href="#" class="menu__sub__categories__item__link">Oval</a>
            </li>
            <li class="menu__sub__categories__item">
              <a href="#" class="menu__sub__categories__item__link">Diamond</a>
            </li>
          </ul>
        </div>

    );
};