import { isNil } from 'ramda';

import trelloObj from './trelloObj';
import action from './obj/action';
import board from './obj/board';
import card from './obj/card';
import checklist from './obj/checklist';
import label from './obj/label';
import list from './obj/list';
import member from './obj/member';
import notification from './obj/notification';
import organization from './obj/organization';
import token from './obj/token';
import webhook from './obj/webhook';

const trelloFactory = () => {
	const creators = {
		action,
		board,
		card,
		checklist,
		label,
		list,
		member,
		notification,
		organization,
		token,
		webhook
	};

	const getCreatorForObjectType = (objType) => {
		const creator = creators[objType];
		return isNil(creator) ? trelloObj : creator;
	};

	const createTrelloObject = (params) => {
		const creator = getCreatorForObjectType(params.objType);
		return creator(params);
	};

	return Object.freeze({
		createTrelloObject
	});
};

export default trelloFactory();
