const label = {
	board: {
		trelloType: 'board',
		isAutoProp: false,
		get: {
			fields: 'all'
		}
	},
	color: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	id: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	idBoard: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	name: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	},
	uses: {
		trelloType: null,
		isAutoProp: true,
		get: {}
	}
};

module.exports = label;
