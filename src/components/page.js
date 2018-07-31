import React from 'react';
import ClientsList from '../containers/clientslist.js';
import Details from '../containers/details.js';
import '../css/clients.css';


const Page =() => (
	<div>
		<div id="left">
			<ClientsList />
		</div>
		<div id="right">
			<Details />
		</div>
	</div>
);

export default Page;