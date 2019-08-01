import React, { Component } from 'react';

const design = {// padding the card so there is an equal amount of distance from each card
  width: '20%',
  height: '30%',
  margin: '5px',
  padding: ''
}
let rowStyle = {
  padding: '5px'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alert: '',
      amountReceived: 0,
      amountDue: 0,
      totalChange: 0,
      Twenties: 0,
      Tens: 0,
      Fives: 0,
      Ones: 0,
      Quarters: 0,
      Dimes: 0,
      Nickels: 0,
      Pennies: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
      // this handles the change between your initial and altered values.
  }

  calculateChange(amountDue, amountReceived) {
    const arr = [];
    amountDue = this.state.amountDue;
    amountReceived = this.state.amountReceived;
    var totalChange = (amountReceived- amountDue).toFixed(2);
    var dollars = (Math.floor(totalChange));
    var cents = totalChange - dollars;

      if(dollars > 19){
        let twenties = dollars / 20;
        arr.push(Math.floor(twenties));
      } else { arr.push(0)}
      var newTwenties = (dollars % 20).toFixed(2);
  
      if(newTwenties > 9) {
        let tens = newTwenties / 10;
        arr.push(Math.floor(tens))
      } else {arr.push(0)}
      var newTens = (newTwenties%10).toFixed(2);
  
      if(newTens > 4) {
        let fives = newTens / 5;
        arr.push(Math.floor(fives));
      }else { arr.push(0) }
      var newFives = (newTens%5).toFixed(2);
  
      if(newFives > .9) {
        let ones = newFives / 1;
        arr.push(Math.floor(ones));
      } else { arr.push(0)}
  
    if (cents > .24){
          let quarters = cents / .25;
          arr.push(Math.floor(quarters));
      } else { arr.push(0) }
      var newQuarters = (cents % 0.25).toFixed(2);
    
      if( newQuarters > .09) {
          let dimes = newQuarters / .10;
          arr.push(Math.floor(dimes))
      } else {arr.push(0)}
      let newDimes = (newQuarters % .10).toFixed(2);

        if ( newDimes > 0.04) {
          let nickels = newDimes / 0.05
          arr.push(Math.floor(nickels));
        } else {arr.push(0)}
        let newNickles = (newDimes % 0.05).toFixed(2); 

        if ( newNickles > 0) {
          let pennies = newNickles / .01
          arr.push(Math.floor(pennies));
        } else {arr.push(0)}

      this.setState({
        Twenties: arr[0],
        Tens: arr[1],
        Fives: arr[2],
        Ones: arr[3],
        Quarters: arr[4],
        Dimes: arr[5],
        Nickels: arr[6],
        Pennies: arr[7],
        alertClass: 'alert alert-success',
        alert: totalChange
      });
      }

  render() {
    return (
      <div>
        <div className='container'>
          <h1 className='text-white'>Change Calculator</h1>
          <p className='border-bottom' />
          <div className='row'>
            <div className='col-sm-4'>
              <div className='card border'>
                <h6> Enter Information </h6>
                <div className='card'>
                  <div className='card-body'>
                    <h6 className='card-title'>How much is due?</h6>
                    <input className='form-control' name='amountDue' value={ this.state.amountDue } onChange={ this.handleChange } />
                    <h6 className='card-title'>How much was received?</h6>
                    <input className='form-control' name='amountReceived' value={ this.state.amountReceived } onChange={ this.handleChange } />
                  </div>
                  <div className='card-footer'>
                    <button type='button' className='btn btn-primary btn-block' onClick={ this.calculateChange }>Calculate</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='card col-sm-8'>
              {
                this.state.amountReceived < this.state.amountDue ?
                  <div className='alert alert-danger' role='alert'>
                    The total change due is ${ this.state.alert }
                  </div>
                  :
                  <div className='alert alert-success' role='alert'>
                    The total change due is ${ this.state.alert }
                  </div>
              }
              <div className='row'>
                <div className='card' style={ design }>
                  <div className='card-body'>
                    <h6 className='card-title'>Twenties</h6>
                    <div className='panel-body col-sm-3 well well-lg' name='Twenties' style={design}><p className='change'>{this.state.Twenties}</p></div>
                  </div>
                </div>
                <div className='card' style={ design }>
                  <div className='card-body'>
                    <h6 className='card-title'>Tens</h6>
                    <div className='panel-body col-sm-3 well well-lg' name='Tens' style={design}><p className='change'>{this.state.Tens}</p></div>
                  </div>
                </div>
                <div className='card'style={ design }>
                  <div className='card-body'>
                    <h6 className='card-title'>Fives</h6>
                    <div className='panel-body col-sm-3 well well-lg' name='Fives' style={design}><p className='change'>{this.state.Fives}</p></div>
                  </div>
                </div>
                <div className='card'style={ design }>
                  <div className='card-body'>
                    <h6 className='card-title'>Ones</h6>
                    <div className='panel-body col-sm-3 well well-lg' name='Ones' style={design}><p className='change'>{this.state.Ones}</p></div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='card' style={ design }>
                  <div className='card-body'>
                    <h6 className='card-title'>Quarters</h6>
                    <div className='panel-body col-sm-3 well well-lg' name='Quarters' style={design}><p className='change'>{this.state.Quarters}</p></div>
                  </div>
                </div>
                <div className='card' style={ design }>
                  <div className='card-body'>
                    <h6 className='card-title'>Dimes</h6>
                    <div className='panel-body col-sm-3 well well-lg' name='Dimes' style={design}><p className='change'>{this.state.Dimes}</p></div>
                  </div>
                </div>
                <div className='card' style={ design }>
                  <div className='card-body'>
                    <h6 className='card-title'>Nickels</h6>
                    <div className='panel-body col-sm-3 well well-lg' name='Nickels' style={design}><p className='change'>{this.state.Nickels}</p></div>
                  </div>
                </div>
                <div className='card' style={ design }>
                  <div className='card-body'>
                    <h6 className='card-title'>Pennies</h6>
                    <div className='panel-body col-sm-3 well well-lg' name='Pennies' style={design}><p className='change'>{this.state.Pennies}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    );
  }
}


export default App;
