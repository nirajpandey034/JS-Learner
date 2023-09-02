import data from "./data.json" assert { type: "json" };
const parentContainer = document.getElementById("parent_container");
const searchInput = document.getElementById("search_box");
function componentGenerator({ component, attributes, content }) {
  const element = document.createElement(component);
  Object.keys(attributes).map((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });

  element.innerHTML = content;

  return element;
}

function fillData(filterText = "") {
  const searchData =
    filterText.length !== 0
      ? data.filter((dat) =>
          dat.title.toLowerCase().includes(filterText.toLowerCase())
        )
      : data;
  parentContainer.innerHTML = "";
  searchData.map((item) => {
    const card = componentGenerator({
      component: "div",
      attributes: {
        id: `item_${item.id}`,
        class: `item-${item.id} card`,
      },
      content: "<span></span>",
    });
    const image = componentGenerator({
      component: "img",
      attributes: {
        id: `_image`,
        class: `image`,
        src: item.image,
      },
      content: "<span></span>",
    });
    const body = componentGenerator({
      component: "div",
      attributes: {
        id: `card_body`,
        class: `card-body`,
      },
      content: "<span></span>",
    });
    const title = componentGenerator({
      component: "p",
      attributes: {
        id: `_title`,
        class: `title`,
      },
      content: item.title,
    });
    const description = componentGenerator({
      component: "p",
      attributes: {
        id: `_description`,
        class: `description`,
      },
      content: item.description,
    });
    const price = componentGenerator({
      component: "p",
      attributes: {
        id: `_price`,
        class: `price`,
      },
      content: `$${item.price}`,
    });

    const button = componentGenerator({
      component: "button",
      attributes: {
        id: `_button`,
        class: `button`,
        type: "button",
      },
      content: "Buy",
    });
    body.appendChild(title);
    body.appendChild(description);
    body.appendChild(price);
    body.appendChild(button);
    card.appendChild(image);
    card.appendChild(body);

    parentContainer.appendChild(card);
  });
}
fillData();

function debouncer(fun, delay = 1000) {
  let timerId;
  return function (...args) {
    const later = () => {
      clearTimeout(timerId);
      fun(...args);
    };
    clearTimeout(timerId);
    timerId = setTimeout(later, delay);
  };
}
const debouncedFillData = debouncer(fillData);
searchInput.addEventListener("input", (event) => {
  debouncedFillData(event.target.value);
});
