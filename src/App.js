import './App.css';
import Card from "./components/Card"
import React from "react"


class Deck extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      cards : []
    }
  }
//   flipClass() {
//     const currentState = false;
//     this.setState({ flipped: !currentState });
// };
 
  componentDidMount(){
    (async () => {
      const cards =  await (await fetch(`http://localhost:8000/${this.props.path}`)).json()
      this.setState({cards}) 
  })()
  }
  render(){
    return <div className="head">
      <h3>{this.props.title}</h3>
    <div className="deck">{this.state.cards.map((card, index) => {
      const number = card.slice(0, -1);
      const symbol = card.slice(-1);
      return <Card symbol={symbol} number={number} key={index} flipped={parseInt(this.props.flipped)>index}/>
    })}</div>
    </div>
  }
}


function App() {
  return (
    <div className="App">
      <h1>Cards.js</h1>
      <div className="deck table">
        <Deck title="Table" path="table" flipped="2"/>
      </div>
      <div className="deck hand">
        <Deck title="Hand" path="deck/2" flipped="2"/>
      </div>
      </div>
  );
}

export default App;
