"use strict";

const card = {
	actions: { type: 'action', limit: 1000, filter: 'all', member: false },
	attachments: { type: 'attachment' },
	badges: 'default',
	board: { type: 'board' },
	checkItemStates: 'default',
	checklists: { type: 'checklist', checkItem_fields: "name,nameData,pos,state,type" },
	closed: 'default',
	dateLastActivity: 'default',
	desc: 'default',
	descData: 'default',
	due: 'default',
	email: 'default',
	id: 'default',
	idAttachmentCover: 'default',
	idChecklists: 'default',
	idLabels: 'default',
	idList: 'default',
	idMembersVoted: 'default',
	idShort: 'default',
	labels: { type: 'label' },
	list: { type: 'list' },
	manualCoverAttachment: 'default',
	members: { type: 'member', fields: 'all' },
	membersVoted: { type: 'member', fields: 'all' },
	name: 'default',
	pos: 'default',
	shortLink: 'default',
	shortUrl: 'default',
	stickers: { },
	subscribed: 'default',
	url: 'default',
};

const attachment: { };

// TODO: Action has a data object which can contain any and all of: board, list, card. Figure out a way (hopefully generic) to capture these as TrelloObj objects.
const action = {
  id: 'default'
}

module.exports = {
	card: card,
  action: action
};
