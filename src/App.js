import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = { searchtext: "",
            display: 1,
  }

  searchChangeHandler = (event) => {
    this.setState({searchtext:event.target.value})
  }

  displayChangeHandler = (event) => {
    this.setState({display:event.target.value})
  }

  render() {
    let displayArray =[]
      for(let i=0; i<this.state.display; i++) {
        displayArray[i] = i+1
        console.log(i)
      }

    const showImage = displayArray.map((a,index) => {
      return (<img src={`https://source.unsplash.com/1600x900/?${this.state.searchtext}${a}`} key={index}/>)
    })

    return (
      <div className="App">
        <div className="container">
          <h3>Keyword Search:</h3> 
          <input type="text" onChange={this.searchChangeHandler}/>
          <p>Picture Display:</p>          
          <select name="displayamount" id="displayamount" onChange={this.displayChangeHandler}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
          <div className="imgbox">
            {showImage}
          </div>
        </div>
      </div>
    );
}}
export default App;
