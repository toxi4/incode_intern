import React, {Component} from 'react';
import {connect} from 'react-redux';

let imgStyle = {
  float: "left"
};

class Details extends Component{
	render(){
		if (!this.props.client){
			return (<div>Choose the client</div>)
		}
		return(
			<div>
				<img style={imgStyle} src={this.props.client.general.avatar}/>
				<h2>{this.props.client.general.firstName} {this.props.client.general.lastName}</h2>
				<h3>{this.props.client.job.title} - {this.props.client.job.company}</h3>

			</div>
		)
	}
}

function mapStateToProps (state){
	return{
		client: state.current
	}
}

export default connect(mapStateToProps)(Details);