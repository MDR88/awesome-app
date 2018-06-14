const DomBuilder = (what, where) => {
  document.querySelector(where).appendChild(what)
}

module.exports = DomBuilder
