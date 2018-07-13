import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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

export default connect(mapStateToProps)(ClientsList);