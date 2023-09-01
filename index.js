import data from "./path.json" assert { type: "json" };
// data.paths
const listContainer = document.getElementById("list_container");

function componentGenerator({ component, attributes, content }) {
  const element = document.createElement(component);
  Object.keys(attributes).map((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });

  element.innerHTML = content;

  return element;
}

data.paths.map((item) => {
  const card = componentGenerator({
    component: "div",
    attributes: {
      id: "link_card",
      class: "link-card",
    },
    content: "",
  });
  const url = componentGenerator({
    component: "a",
    attributes: {
      id: "link_card_url",
      class: "link-card-url",
      href: `${item}`,
    },
    content: `<span>${item.slice(1)}</span>`,
  });
  card.appendChild(url);

  listContainer.appendChild(card);
});
