"use strict";

const card = {
	actions: { type: 'action', subObjType: 'actions', limit: 1000, filter: 'all', member: false },
	attachments: { },
	badges: 'default',
	checkItemStates: 'default',
	closed: 'default',
	dateLastActivity: 'default',
	desc: 'default',
	descData: 'default',
	due: 'default',
	email: 'default',
	id: 'default',
	idAttachmentCover: 'default', // add attachment
	idBoard: 'default', // add board
	idChecklists: 'default', // add checklists
	idLabels: 'default', // add labels
	idList: 'default', // add list
	idMembers: 'default', // add members
	idMembersVoted: 'default', // add membersVoted
	idShort: 'default',
	manualCoverAttachment: 'default', // is this an id? if so, we need an object reference too
	name: 'default',
	pos: 'default',
	shortLink: 'default',
	shortUrl: 'default',
	stickers: { },
	subscribed: 'default', // is this id's? If so, we need an array of objects
	url: 'default',
};

const action = {
  id: 'default',
}

module.exports = {
	card: card,
  action: action
};
