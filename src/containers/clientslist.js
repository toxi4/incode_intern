import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {choose} from '../actions/index';

class ClientsList extends Component{
	showClients(){
		return this.props.clients.map((client) => {
			return(
				<li onClick={() => this.props.choose(client)} key={client.contact.phone}>
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
	return bindActionCreators({choose: choose},dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(ClientsList);