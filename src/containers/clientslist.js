import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {choose} from '../actions/index';

class ClientsList extends Component{
	showClients(){
		return this.props.clients.map((client) => {
			return(
				<li key={client.contact.phone}>
					<img src={client.general.avatar}/><br/>
					<div>{client.general.firstName} {client.general.lastName}</div>
					<div>{client.job.title}</div>
				</li>
			)
		});
	}
	render(){
		return(
			<ul>
				{this.showClients()}
			</ul>
		);
	}
};

function mapStateToProps (state){
	return{
		clients:state.clients
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators()
}

export default connect(mapStateToProps)(ClientsList);