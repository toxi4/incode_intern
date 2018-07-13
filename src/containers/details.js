import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component{
	render(){
		if (!this.props.client){
			return (<div>Choose the client</div>)
		}
		return(
			<div>
				<img src={this.props.general.avatar}/>
				<h2>{this.props.general.firstName} {this.props.general.lastName}</h2>
				<h3>{this.props.job.title} - {this.props.job.company}</h3>

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