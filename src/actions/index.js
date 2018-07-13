export const choose =(client) => {
	return {
		type: 'CLIENT_SELECTED',
		payload: client
	}
}