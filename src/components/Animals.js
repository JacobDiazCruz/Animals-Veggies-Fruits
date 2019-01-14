import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import List from './List';
import { Fade } from 'react-reveal';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Wave } from 'react-animated-text';

const images = [
	"big-images/1_full.jpg",
	"big-images/2_full.jpg",
	"big-images/3_full.jpg",
	"big-images/4_full.jpg",
	"big-images/5_full.jpg",
	"big-images/6_full.jpg",
	"big-images/7_full.jpg",
	"big-images/8_full.jpg",
	"big-images/9_full.jpg",
	"big-images/10_full.jpg",
	"big-images/11_full.jpg",
	"big-images/12_full.jpg",
	"big-images/13_full.jpg",
	"big-images/14_full.jpg",
	"big-images/15_full.jpg",
	"big-images/16_full.jpg",
	"big-images/17_full.jpg",
	"big-images/18_full.jpg",
	"big-images/19_full.jpg",
	"big-images/20_full.jpg",
]

class Animals extends Component {
  
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
	      	<h1 id="animals-h1">
	      		<Wave 
                    text="ANIMALS"
                    effect="verticalFadeIn"
                    effectDirection="down"
                    iterations={1}
                    speed={6}
                  >
            	</Wave>
	      	</h1>
	      	<div className="animals-section">
	      		<Fade clear duration={2500}>
	      		<ul>
	      			<li><img src="images/1_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/2_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/3_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/4_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/5_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/6_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/7_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/8_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/9_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/10_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/11_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/12_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/13_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/14_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/15_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/16_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/17_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/18_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/19_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    	<li><img src="images/20_thumb.jpg" alt="img" onClick={() => this.setState({ isOpen: true })}/></li>
			    </ul>
				</Fade>
	      		<List/>
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

export default Animals;
