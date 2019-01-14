import React, { Component } from 'react';
import '../App.css';
import ListFruitVeg from './ListFruitVeg';
import { Fade } from 'react-reveal';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Wave } from 'react-animated-text';

const images = [
	"fruitveg-big/1_full.jpg",
	"fruitveg-big/2_full.jpg",
	"fruitveg-big/3_full.jpg",
	"fruitveg-big/4_full.jpg",
	"fruitveg-big/5_full.jpg",
	"fruitveg-big/6_full.jpg",
	"fruitveg-big/7_full.jpg",
	"fruitveg-big/8_full.jpg",
	"fruitveg-big/9_full.jpg",
	"fruitveg-big/10_full.jpg",
	"fruitveg-big/11_full.jpg",
	"fruitveg-big/12_full.jpg",
	"fruitveg-big/13_full.jpg",
	"fruitveg-big/14_full.jpg",
	"fruitveg-big/15_full.jpg",
	"fruitveg-big/16_full.jpg",
	"fruitveg-big/17_full.jpg",
	"fruitveg-big/18_full.jpg",
	"fruitveg-big/19_full.jpg",
	"fruitveg-big/20_full.jpg",
]

class FruitsVeg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false
    }
  }

  render() {
  	const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
      	<Fade right>
	      	<h1 id="fruitsveg-h1">
	      		<Wave 
                    text="FRUITS AND VEGGIES"
                    effect="verticalFadeIn"
                    effectDirection="down"
                    iterations={1}
                    speed={10}
                  >
            	</Wave>
	      	</h1>
	      	<div className="fruitsveg-section">
	      	<Fade clear duration={2500}> 
	      		<ul>
	      			<li><img src="fruitveg/1_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/2_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/3_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/4_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/5_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/6_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/7_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/8_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/9_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/10_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/11_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/12_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/13_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/14_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/15_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/16_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/17_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/18_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/19_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="fruitveg/20_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    </ul>
			</Fade>
	      	<ListFruitVeg/>

	      	{isOpen && (
		          <Lightbox
		            mainSrc={images[photoIndex]}
		            nextSrc={images[(photoIndex + 1) % images.length]}
		            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
		            onCloseRequest={() => this.setState({ isOpen: false })}
		            onMovePrevRequest={() =>
		              this.setState({
		                photoIndex: (photoIndex + images.length - 1) % images.length
		              })
		            }
		            onMoveNextRequest={() =>
		              this.setState({
		                photoIndex: (photoIndex + 1) % images.length
		              })
		            }
		          />
		        )}
	      	</div>
      	</Fade>
      </React.Fragment>
    );
  }
}

export default FruitsVeg;
