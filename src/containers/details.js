import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component{
	render(){
		if (!this.props.client){
			return (<div>Choose the client</div>)
		}
		return(
			<div>
				<img style={imgStyle} src={this.props.client.general.avatar}/>
				<div>
				<h2>{this.props.client.general.firstName} {this.props.client.general.lastName}</h2>
				<h3>{this.props.client.job.title} - {this.props.client.job.company}</h3>
					<p>
						{this.props.client.contact.email}<br/>
						{this.props.client.contact.phone}<br/>
						{this.props.client.address.street}<br/>
						{this.props.client.address.city}<br/>
						{this.props.client.address.zipCode}<br/>
						{this.props.client.address.country}<br/>
					</p>
				</div>
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