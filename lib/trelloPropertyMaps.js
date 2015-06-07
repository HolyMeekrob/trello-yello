"use strict";

const action = {
	board: { type: 'board', fields: 'all' },
	card: { type: 'card', fields: 'all' },
	data: 'default',
	date: 'default',
  id: 'default',
	idMemberCreator: 'default',
	list: { type: 'list', fields: 'all' },
	memberCreator: { type: 'member', fields: 'all' },
	type: 'default'
};

const attachment = { };

const board = {
	actions: { type: 'action', fields: 'all', filter: 'all', limit: '1000', member: 'false', memberCreator: 'false' },
	cards: { type: 'card', fields: 'all', filter: 'all' },
	checklists: { type: 'checklist', checkItem_fields: 'all', filter: 'all' },
	closed: 'default',
	dateLastActivity: 'default',
	dateLastView: 'default',
	desc: 'default',
	descData: 'default',
	id: 'default',
	idOrganization: 'default', // Create organization
	invitations: 'default', // Array of what? Members?
	invited: 'default',
	labelNames: 'default',
	labels: { type: 'label', fields: 'all', limit: '1000' },
	lists: { type: 'list', fields: 'all',  filter: 'all' },
	members: { type: 'member', fields: 'all', filter: 'all' },
	membersInvited: { type: 'member', fields: 'all' },
	memberships: 'default',
	name: 'default',
	organization: { type: 'organization', fields: 'all' },
	pinned: 'default',
	powerUps: 'default',
	prefs: 'default',
	shortLink: 'default',
	shortUrl: 'default',
	starred: 'default',
	subscribed: 'default',
	url: 'default'
};

const card = {
	actions: { type: 'action', fields: 'all', filter: 'all', limit: '1000',  member: 'false', memberCreator: 'false' },
	badges: 'default',
	board: { type: 'board', fields: 'all' },
	checkItemStates: 'default',
	checklists: { type: 'checklist', checkItem_fields: 'all', fields: 'all', filter: 'all' },
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
	list: { type: 'list', fields: 'all' },
	manualCoverAttachment: 'default',
	members: { type: 'member', fields: 'all' },
	membersVoted: { type: 'member', fields: 'all' },
	name: 'default',
	pos: 'default',
	shortLink: 'default',
	shortUrl: 'default',
	subscribed: 'default',
	url: 'default',
};

const checklist = {
	board: { type: 'board', fields: 'all' },
	cards: { type: 'card', fields: 'all', filter: 'all' },
	checkItems: 'default',
	id: 'default',
	idBoard: 'default',
	idCard: 'default',
	name: 'default',
	pos: 'default'
};

const label = {
	board: { type: 'board', fields: 'all' },
	color: 'default',
	id: 'default',
	idBoard: 'default',
	name: 'default',
	uses: 'default'
};

const list = {
	actions: { type: 'action', fields: 'all', filter: 'all', limit: '1000', member: 'false', memberCreator: 'false' },
	board: { type: 'board', fields: 'all' },
	cards: { type: 'card', fields: 'all', filter: 'all' },
	id: 'default',
	name: 'default',
	closed: 'default',
	idBoard: 'default',
	pos: 'default',
	subscribed: 'default'
};

const member = {
	actions: { type: 'action', fields: 'all', filter: 'all', limit: '1000', member: 'false', memberCreator: 'false' },
	avatarHash: 'default',
	avatarSource: 'default',
	boards: { type: 'board', fields: 'all', filter: 'all' },
	bio: 'default',
	bioData: 'default',
	cards: { type: 'card', fields: 'all', filter: 'all' },
	confirmed: 'default',
	email: 'default',
	fullName: 'default',
	gravatarHash: 'default',
	id: 'default',
	idBoards: 'default',
	idBoardsPinned: 'default',
	idOrganizations: 'default',
	idPremOrgsAdmin: 'default',
	initials: 'default',
	loginTypes: 'default',
	memberType: 'default',
	notifications: { type: 'notification', fields: 'all', filter: 'all', limit: '1000', memberCreator: 'false', read_filter: 'all' },
	oneTimeMessagesDismissed: 'default',
	organizations: { type: 'organization', fields: 'all', filter: 'all' },
	organizationsInvited: { type: 'organization', fields: 'all', filter: 'all' },
	prefs: 'default',
	premiumFeatures: 'default',
	products: 'default',
	status: 'default',
	tokens: { type: 'token', filter: 'all' },
	trophies: 'default',
	uploadedAvatarHash: 'default',
	url: 'default',
	username: 'default'
};

const notification = {
	board: { type: 'board', fields: 'all' },
	card: { type: 'card', fields: 'all' },
	data: 'default',
	date: 'default',
	id: 'default',
	idMemberCreator: 'default',
	list: { type: 'list', fields: 'all' },
	member: { type: 'member', fields: 'all' },
	memberCreator: { type: 'member', fields: 'all' },
	organizations: { type: 'organization', fields: 'all' },
	type: 'default',
	unread: 'default'
};

const organization = {
	actions: { type: 'action', fields: 'all', filter: 'all', limit: '1000', member: 'false', memberCreator: 'false' },
	billableMemberCount: 'default',
	boards: { type: 'action', fields: 'all', filter: 'all' },
	desc: 'default',
	descData: 'default',
	displayName: 'default',
	id: 'default',
	idBoards: 'default',
	invitations: 'default',
	invited: 'default',
	logoHash: 'default',
	members: { type: 'member', fields: 'all', filter: 'all' },
	membersInvited: { type: 'member', fields: 'all' },
	memberships: 'default',
	name: 'default',
	powerUps: 'default',
	prefs: 'default',
	premiumFeatures: 'default',
	products: 'default',
	url: 'default',
	website: 'default'
};

const token = {
	dateCreated: 'default',
	dateExpires: 'default',
	id: 'default',
	idMember: 'default',
	identifier: 'default',
	member: { type: 'member', fields: 'all' },
	permissions: 'default',
	webhooks: { type: 'webhook' }
};

const webhook = {
	active: 'default',
	callbackURL: 'default',
	description: 'default',
	id: 'default',
	idModel: 'default',
};

module.exports = {
  action: action,
	board: board,
	card: card,
	checklist: checklist,
	label: label,
	list: list,
	member: member,
	notification: notification,
	organization: organization,
	token: token,
	webhook: webhook
};
