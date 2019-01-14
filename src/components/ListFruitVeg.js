import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


class ListFruitVeg extends Component {
  state = {
  	items: [],
  };

  componentDidMount() {
  	axios.get('http://styleguide.effectivedigital.com/interview/api/fruitveg')
  	.then((res) => {
  		console.log(res.data);
  		this.setState({ items: res.data });
  	});
  }

  render() {
    return (
    	<React.Fragment>
      	<ul>
      		{this.state.items.map(item => <li className="title-cls-2" key={item.id}>{item.Title}</li>)}
      	</ul>
      	<ul>
      		{this.state.items.map(item => <li className="family-cls-2" key={item.id}>{item.Family}</li>)}
      	</ul>
      	<ul>
      		{this.state.items.map(item => <li className="desc-cls-2" key={item.id}>{item.Description}</li>)}
      	</ul>
      	</React.Fragment>	
    );
  }
}

export default ListFruitVeg;
