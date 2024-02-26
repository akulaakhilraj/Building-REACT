const parent=React.createElement("div", {id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{id:"heading"},"Hello Welcome to Poker Gaming Industry"),
React.createElement("h1",{id:"heading"},"Hello Welcome to Poker  Table ")]
))

const root1=ReactDOM.createRoot(document.getElementById("React"))
root1.render(parent)

console.log(parent)
