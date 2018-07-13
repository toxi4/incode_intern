import React from 'react';
import ClientsList from '../containers/clientslist.js';
import '../css/clients.css';


const Page =() => (
	<div>
		<div id="left">
			<ClientsList />
		</div>
		<div id="right">
		</div>
	</div>
);

export default Page;