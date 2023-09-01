// we take hold of our parent div
const parentContainer = document.getElementById("parent_container");

// suppose we want to add paragraph (it can be anything) as a child to the parent div
const childParagraph = document.createElement("p");

// set some properties aka attributes to the p tag
childParagraph.setAttribute("class", "child-paragraph");
childParagraph.setAttribute("id", "child_paragraph");

// add some content to the p tag
childParagraph.innerHTML = "I am the one.";

// we can attach the p tag to div
parentContainer.appendChild(childParagraph);
