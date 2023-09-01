// we take hold of our parent div
const parentContainer = document.getElementById("parent_container");

function componentGenerator({ component, attributes, content }) {
  const element = document.createElement(component);
  Object.keys(attributes).map((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });

  element.innerHTML = content;

  parentContainer.appendChild(element);
}

componentGenerator({
  component: "p",
  attributes: {
    id: "name_paragraph",
    classname: "name-paragraph",
  },
  content: "I am the paragraph",
});

componentGenerator({
  component: "img",
  attributes: {
    id: "profile_img",
    classname: "profile-image",
    src: "https://images.pexels.com/photos/18082716/pexels-photo-18082716/free-photo-of-raised-glass-of-soda-with-blueberries.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    style: "width: 15rem; height: 15rem",
  },
});
