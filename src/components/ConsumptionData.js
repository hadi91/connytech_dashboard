import React from 'react';

class ConsumptionData extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      energy: '',
      electricity: '',
      cost: ''
    }
  }

  componentWillMount(){
    fetch('https://developer.nrel.gov/api/utility_rates/v3.json?api_key=DEMO_KEY&lat=35.45&lon=-82.98')
    .then((response)=>{
      console.log(response);
      return response.json();
    }).then((data)=>{
      console.log(data);
      this.setState({
        energy: data.outputs.residential + 'kWh',
        electricity: data.outputs.commercial + 'kWh',
        cost: '$' + data.outputs.industrial,
      })
    }).catch((error)=>console.log(error))
  }

  render(){
    return (
      <div className="consumptionData data-box">
        <h4>Electricity & Monthly Cost</h4>
        <ul>
          <li>Monthly Energy Consumption: <span>{this.state.energy}</span></li>
          <li>Current Electricity Consumption: <span>{this.state.electricity}</span></li>
          <li>Monthly Cost: <span>{this.state.cost}</span></li>
        </ul>
      </div>
    )
  }
}

export default ConsumptionData;
