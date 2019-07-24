const initialState = {
	isOnline: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				isOnline: true
			}
		case 'LOGOUT':
			return {}
		default: 
			return state;
	}
};

export default reducer;