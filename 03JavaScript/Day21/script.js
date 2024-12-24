// <!-- Create Node -->
// 1. Create an Element
const newElement = document.createElement("div");
newElement.innerHTML = "<p>This is a new div element.</p>";

// 2. Create a Text Node
const textNode = document.createTextNode("This is a text node.");

// 3. Create an Attribute Node
const newAttribute = document.createAttribute("data-custom");
newAttribute.value = "customValue";
newElement.setAttributeNode(newAttribute);


// <!-- Accessing Attributes -->
// 1. getAttribute
console.log(newElement.getAttribute("data-custom")); // Output: customValue

// 2. setAttribute
newElement.setAttribute("id", "newDiv");

// 3. removeAttribute
newElement.removeAttribute("data-custom");


// <!-- Add Nodes to the DOM -->
const parentElement = document.getElementById("root");

// 1. appendChild(node)
parentElement.appendChild(newElement);

// 2. append(node1, node2, ...)
const secondElement = document.createElement("p");
secondElement.textContent = "This is a second paragraph.";
parentElement.append(newElement, secondElement);

// 3. insertBefore(newNode, referenceNode)
const referenceNode = parentElement.firstChild;
const newNode = document.createElement("span");
newNode.textContent = "Inserted before first child.";
parentElement.insertBefore(newNode, referenceNode);

// 4. prepend
const prependedNode = document.createElement("h1");
prependedNode.textContent = "Prepended Header";
parentElement.prepend(prependedNode);

// 5. replaceChild()
const replacedNode = document.createElement("em");
replacedNode.textContent = "This replaced the first child.";
parentElement.replaceChild(replacedNode, parentElement.firstChild);

// 6. Using innerHTML
const htmlContent = `<div><strong>InnerHTML Content</strong></div>`;
parentElement.innerHTML = htmlContent;

// 7. Using insertAdjacentHTML() or insertAdjacentElement()
const adjacentDiv = document.createElement("div");
adjacentDiv.textContent = "Adjacent Div Element.";
parentElement.insertAdjacentElement("beforeend", adjacentDiv);
parentElement.insertAdjacentHTML("afterbegin", "<p>Inserted at the start.</p>");

// 8. removeChild(node) Homework
const childToRemove = parentElement.firstChild;
if (childToRemove) {
    parentElement.removeChild(childToRemove);
}

// 9. .remove()
adjacentDiv.remove();
