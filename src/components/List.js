import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


class List extends Component {
  state = {
  	titles: [],
  };

  componentDidMount() {
  	axios.get('http://styleguide.effectivedigital.com/interview/api/animals')
  	.then((res) => {
  		console.log(res.data);
  		this.setState({ titles: res.data });
  	});
  }

  render() {
    return (
    	<React.Fragment>
      	<ul>
      		{this.state.titles.map(title => <li className="title-cls" key={title.id}>{title.Title}</li>)}
      	</ul>
      	<ul>
      		{this.state.titles.map(title => <li className="noun-cls" key={title.id}>{title.CollectiveNoun}</li>)}
      	</ul>
      	<ul>
      		{this.state.titles.map(title => <li className="family-cls" key={title.id}>{title.Family}</li>)}
      	</ul>
      	<ul>
      		{this.state.titles.map(title => <li className="desc-cls" key={title.id}>{title.Description}</li>)}
      	</ul>
      	</React.Fragment>	
    );
  }
}

export default List;
