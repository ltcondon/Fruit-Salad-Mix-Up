import React, { Component } from "react";
// import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";
import FruitCard from "./components/FruitCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fruits from "./fruits.json";
import Scoreboard from "./components/Scoreboard";
import Fade from 'react-reveal/Fade'


const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    bestTime: 30,
    time: 30,
    clickedName: "",
    fruitClicked:'',
    fruits
  }

  timer() {
    this.setState({
      time: this.state.time - 1
    })

    if(this.state.fruitClicked === false) { 
      clearInterval(this.intervalId);
      this.setState({
        time: 30
      })
    }

    if (this.state.time < 1) {
      alert("Times up!")
        
        this.setState({
          score: 0,
          clickedName: "",
          fruitClicked: false,
          fruits: shuffle(fruits)
        })
    }
  }

  handleFruitClick = event => {
    const name = event.target.name;

    switch(this.state.clickedName.includes(name)) {
      case(true):
        alert("You added that fruit already!")
        
        this.setState({
          score: 0,
          clickedName: "",
          fruitClicked: false,
          fruits: shuffle(fruits)
        })
      break;

      default:
        const newScore = this.state.score + 1;
        const nameArr = [name, ...this.state.clickedName];

        if (newScore > 11) {
          alert("Nice Job! You've crafted the perfect salad!");
          const bestTime = (30 - this.state.time)
          
          this.setState({
            highScore: newScore,
            score: 0,
            bestTime: bestTime,
            clickedName: "",
            fruitClicked: false,
            fruits: shuffle(fruits)
          })
          
        }

        if (!this.state.fruitClicked) {
          this.intervalId = setInterval(this.timer.bind(this), 1000);

          this.setState({
            fruitClicked: true,
          })
        }

        if (newScore > this.state.highScore) {
          this.setState({
            highScore: newScore,
          })
        }

        if (newScore < 12) {
          this.setState({
            clickedName: nameArr,
            score: newScore,
            fruits: shuffle(fruits)
          })
        }

      }

    console.log(`Score: ${this.state.score}  Fruits: ${this.state.clickedName || name}`);

    }

  render () {
    return (
    <Wrapper>
      <Row>
        <Col size="md-3" order='2'>
          <Fade left>
          <Scoreboard score={this.state.score} time={this.state.time} highScore={this.state.highScore} />
          </Fade>
        </Col>
        <Col size="md-6" order='1'>
          <Fade top>
          <Title/>
          </Fade>
        </Col>
        <Col size="md-3" order='3'>
        <Fade right>
          <h2 className='highScore'>High Score: <span>{this.state.highScore}</span></h2>
          <h2 className='bestTime'>Best Time: <span>{`${this.state.bestTime} seconds`}</span></h2>
          </Fade>
        </Col>
      </Row>
        
        <Container>
          <Row>
            {this.state.fruits.map(fruit => (
              <Col size="md-3 sm-3">
               <FruitCard
            name={fruit.name}
            key={fruit.id}
            onClick={this.handleFruitClick}
            image={fruit.image}
          />
              </Col>
            ))}
          </Row>
        </Container>

        <br></br><br></br>
        
    </Wrapper>
    )
  }
}

export default App;