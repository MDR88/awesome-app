const DomBuilder = require("./DomBuilder")

const output = document.querySelector(".output")

const fragment = document.createDocumentFragment()

const inputFieldFactory = (classList, defaultPlaceholderText,type) => {
  const inputField = document.createElement("input")
  inputField.setAttribute("type", type)
  inputField.classList = classList
  inputField.placeholder = defaultPlaceholderText
  return inputField
}

const buttonFactory = (classList, textContent) => {
  const theButton = document.createElement("button")
  theButton.classList = classList
  theButton.textContent = textContent
  return theButton
}

const sectionFactory = (classList, textContent) => {
  const theButton = document.createElement("section")
  theButton.classList = classList
  theButton.textContent = textContent
  return theButton
}

const cardTextInputField = inputFieldFactory("input--text", "Enter card text here", "text")
const createCardButton = buttonFactory("button--submit", "Create Card")
createCardButton.addEventListener("click", () => {
  const cardText = cardTextInputField.value
  output.appendChild(sectionFactory("card", cardText))
  cardTextInputField.value = ""
})


fragment.appendChild(cardTextInputField)
fragment.appendChild(createCardButton)

// output.appendChild(fragment)
DomBuilder(fragment, ".output")
