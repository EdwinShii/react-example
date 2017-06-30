require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


var photos=new Array();

for (var i = 1; i < 7; i++) {
	photos[i] = require("../images/"+i+".jpg");
}


var StageOutter = React.createClass({
	render:function(){
		return(
			<section className = "stage">
				<section className = "img-sec">
				</section>
				<nav className = "controller">
				</nav>
			</section>
			);
	}
});


class AppComponent extends React.Component {
  render() {
    return (
      <StageOutter/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
