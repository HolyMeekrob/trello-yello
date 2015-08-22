[Map](#map)

<a name="module_trello-yello"></a>
## trello-yello
An object-oriented wrapper for the Trello API.

**Main**: trello-yello

* [trello-yello](#module_trello-yello)
  * [~trello](#module_trello-yello..trello)
    * [trello(params)](#new_module_trello-yello..trello_new)
  * [~get(params)](#module_trello-yello..get) ⇒ <code>Object</code>
  * [~createBoard(params)](#module_trello-yello..createBoard) ⇒ <code>Object</code>
  * [~createCard(params)](#module_trello-yello..createCard) ⇒ <code>Object</code>
  * [~createChecklist(params)](#module_trello-yello..createChecklist) ⇒ <code>Object</code>
  * [~createLabel(params)](#module_trello-yello..createLabel) ⇒ <code>Object</code>
  * [~createList(params)](#module_trello-yello..createList) ⇒ <code>Object</code>
  * [~createOrganization(params)](#module_trello-yello..createOrganization) ⇒ <code>Object</code>
  * [~createWebhook(params)](#module_trello-yello..createWebhook) ⇒ <code>Object</code>
  * [~getAction(actionId)](#module_trello-yello..getAction) ⇒ <code>Object</code>
  * [~getBoard(boardId)](#module_trello-yello..getBoard) ⇒ <code>Object</code>
  * [~getCard(cardId)](#module_trello-yello..getCard) ⇒ <code>Object</code>
  * [~getChecklist(checklistId)](#module_trello-yello..getChecklist) ⇒ <code>Object</code>
  * [~getLabel(labelId)](#module_trello-yello..getLabel) ⇒ <code>Object</code>
  * [~getList(listId)](#module_trello-yello..getList) ⇒ <code>Object</code>
  * [~getMember(memberId)](#module_trello-yello..getMember) ⇒ <code>Object</code>
  * [~getNotification(notificationId)](#module_trello-yello..getNotification) ⇒ <code>Object</code>
  * [~getOrganization(organizationId)](#module_trello-yello..getOrganization) ⇒ <code>Object</code>
  * [~getToken(tokenId)](#module_trello-yello..getToken) ⇒ <code>Object</code>
  * [~getWebhook(webhookId)](#module_trello-yello..getWebhook) ⇒ <code>Object</code>
  * [~getCurrentUser()](#module_trello-yello..getCurrentUser) ⇒ <code>Object</code>
  * [~markAllNotificationsRead(callback)](#module_trello-yello..markAllNotificationsRead) ⇒ <code>Object</code>
  * [~search(params)](#module_trello-yello..search) ⇒ <code>Object</code>

<a name="module_trello-yello..trello"></a>
### trello-yello~trello
trello

**Kind**: inner class of <code>[trello-yello](#module_trello-yello)</code>
<a name="new_module_trello-yello..trello_new"></a>
#### trello(params)
Trello Yello's entry point for accessing the Trello API. It serves as both an
object factory for Trello objects as well as a platform for performing
operations that aren't associated with specific Trello objects, such as
queries against the Trello search engine.


| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the constructor parameters object |
| params.key | <code>String</code> | the application key for accessing Trello |
| params.token | <code>String</code> | a valid Trello API token |

<a name="module_trello-yello..get"></a>
### trello-yello~get(params) ⇒ <code>Object</code>
Retrieves an existing Trello object.

**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the retrieved trelloObj object

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.objType | <code>String</code> | the type of Trello object. Please refer to other documentation for the list of allowed types. |
| params.id | <code>String</code> | the ID of the Trello object |

<a name="module_trello-yello..createBoard"></a>
### trello-yello~createBoard(params) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - a Promise that resolves to the new [board](board.md)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>Object</code> |  | the method parameters object |
| params.name | <code>String</code> |  | the board's name |
| params.description | <code>String</code> |  | (*optional*) the board's description |
| params.organizationId | <code>String</code> |  | (*optional*) the board's organization |
| params.cloneId | <code>String</code> |  | (*optional*) the id of the existing board to clone |
| params.keepFromSource | <code>String</code> | <code>&#x27;all&#x27;</code> | (*optional*) a comma-separated list of properties to keep from the source board, or 'all' |
| params.powerUps | <code>String</code> |  | (*optional*) the powerUps to give the new board. This is a comma separated list of values that can include 'calendar', 'cardAging', 'recap', and 'voting'. |
| params.permissionLevel | <code>String</code> | <code>&#x27;default&#x27;</code> | (*optional*) the permissions level of the board. Valid values are 'org', 'private', and 'public'. |
| params.voting | <code>String</code> | <code>&#x27;disabled&#x27;</code> | (*optional*) the board permissions for voting. Valid values are 'disabled', 'members', 'observers', 'org', and 'public'. |
| params.comments | <code>String</code> | <code>&#x27;members&#x27;</code> | (*optional*) the board permissions for commenting. Valid values are 'disabled', 'members', 'observers', 'org', and 'public'. |
| params.invitations | <code>String</code> | <code>&#x27;members&#x27;</code> | (*optional*) the board permissions for sending invitations. Valid values are 'admins' and 'members'. |
| params.selfJoin | <code>Boolean</code> | <code>true</code> | (*optional*) the board permissions for allowing members to self join |
| params.cardCovers | <code>Boolean</code> | <code>true</code> | (*optional*) the board setting for card covers. |
| params.background | <code>String</code> | <code>&#x27;blue&#x27;</code> | (*optional*) the board's background |
| params.cardAging | <code>String</code> | <code>&#x27;regular&#x27;</code> | (*optional*) the board's card aging setting. Valid values are 'regular' and 'pirate'. |
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |

<a name="module_trello-yello..createCard"></a>
### trello-yello~createCard(params) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - a Promise that resolves to the new [card](card.md)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>Object</code> |  | the method parameters object |
| params.name | <code>String</code> |  | the card's name |
| params.listId | <code>String</code> |  | the id of the list the card will be added to |
| params.description | <code>String</code> |  | (*optional*) the card's description |
| params.position | <code>String</code> &#124; <code>Number</code> | <code>&#x27;bottom&#x27;</code> | (*optional*) the card's position. This can be 'top', 'bottom', or a positive number. |
| params.dueDate | <code>Date</code> |  | (*optional*) the card's due date. If not included, it won't have a due date. |
| params.labels | <code>String</code> |  | (*optional*) a comma-separated list of colors, or 'all' |
| params.memberIds | <code>String</code> |  | (*optional*) a comma-separated list of member id's that will be assigned to the card |
| params.labelIds | <code>String</code> |  | (*optional*) a comma-separated list of label id's that will be assigned to the card |
| params.urlSource | <code>String</code> |  | (*optional*) if included, a URL starting with http:// or https:// |
| params.fileSource | <code>File</code> |  | (*optional*) a file |
| params.sourceCardId | <code>String</code> |  | (*optional*) the id of the card to clone |
| params.keepFromSource | <code>String</code> | <code>&#x27;all&#x27;</code> | (*optional*) a comma-separated list of properties to keep from the source card, or 'all' |
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |

<a name="module_trello-yello..createChecklist"></a>
### trello-yello~createChecklist(params) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - a Promise that resolves to the new checklist

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>Object</code> |  | the method parameters object |
| params.name | <code>String</code> |  | the checklist's name |
| params.boardId | <code>String</code> |  | (*optional*) the id of the checklist's board |
| params.cardId | <code>String</code> |  | (*optional*) the id of the checklist's card |
| params.position | <code>String</code> &#124; <code>Number</code> | <code>&#x27;bottom&#x27;</code> | (*optional*) the checklist's position. Valid values are 'top', 'bottom', or a positive number. |
| params.cloneId | <code>String</code> |  | (*optional*) the id of a checklist to clone |
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |

<a name="module_trello-yello..createLabel"></a>
### trello-yello~createLabel(params) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - a Promise that resolves to the new label

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.name | <code>String</code> | the label's name |
| params.color | <code>String</code> | the label's color |
| params.boardId | <code>String</code> | the id of the label's board |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |

<a name="module_trello-yello..createList"></a>
### trello-yello~createList(params) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - a Promise that resolves to the new list

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>Object</code> |  | the method parameters object |
| params.name | <code>String</code> |  | the list's name |
| params.boardId | <code>String</code> |  | the id of the list's board |
| params.cloneId | <code>String</code> |  | (*optional*) the id of the list to clone |
| params.position | <code>String</code> &#124; <code>Number</code> | <code>&#x27;top&#x27;</code> | (*optional*) the position of the list. Valid values are 'top', 'bottom', or a positive number. |
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |

<a name="module_trello-yello..createOrganization"></a>
### trello-yello~createOrganization(params) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - a Promise that resolves to the new organization

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.name | <code>String</code> | (*optional*) the organization's name |
| params.displayName | <code>String</code> | (*optional*) the organization's display name |
| params.description | <code>String</code> | (*optional*) the organization's description |
| params.website | <code>String</code> | (*optional*) the organization's website. Must be a valid URL starting with 'http://', 'https://', or null. |

<a name="module_trello-yello..createWebhook"></a>
### trello-yello~createWebhook(params) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - a Promise that resolves to the new webhook object

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.watchId | <code>String</code> | the id of the model to watch |
| params.callbackUrl | <code>String</code> | the url of the webhook's callback |
| params.description | <code>String</code> | (*optional*) the description of the webhook |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="module_trello-yello..getAction"></a>
### trello-yello~getAction(actionId) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [action](action.md) object

| Param | Type | Description |
| --- | --- | --- |
| actionId | <code>String</code> | the id of the action |

<a name="module_trello-yello..getBoard"></a>
### trello-yello~getBoard(boardId) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [board](board.md) object

| Param | Type | Description |
| --- | --- | --- |
| boardId | <code>String</code> | the id of the board |

<a name="module_trello-yello..getCard"></a>
### trello-yello~getCard(cardId) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [card](card.md) object

| Param | Type | Description |
| --- | --- | --- |
| cardId | <code>String</code> | the id of the card |

<a name="module_trello-yello..getChecklist"></a>
### trello-yello~getChecklist(checklistId) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [checklist](checklist.md) object

| Param | Type | Description |
| --- | --- | --- |
| checklistId | <code>String</code> | the id of the checklist |

<a name="module_trello-yello..getLabel"></a>
### trello-yello~getLabel(labelId) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [label](label.md) object

| Param | Type | Description |
| --- | --- | --- |
| labelId | <code>String</code> | the id of the label |

<a name="module_trello-yello..getList"></a>
### trello-yello~getList(listId) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [list](list.md) object

| Param | Type | Description |
| --- | --- | --- |
| listId | <code>String</code> | the id of the list |

<a name="module_trello-yello..getMember"></a>
### trello-yello~getMember(memberId) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [member](member.md) object

| Param | Type | Description |
| --- | --- | --- |
| memberId | <code>String</code> | the id of the member |

<a name="module_trello-yello..getNotification"></a>
### trello-yello~getNotification(notificationId) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [notification](notification.md) object

| Param | Type | Description |
| --- | --- | --- |
| notificationId | <code>String</code> | the id of the notification |

<a name="module_trello-yello..getOrganization"></a>
### trello-yello~getOrganization(organizationId) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [organization](organization.md) object

| Param | Type | Description |
| --- | --- | --- |
| organizationId | <code>String</code> | the id of the organization |

<a name="module_trello-yello..getToken"></a>
### trello-yello~getToken(tokenId) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [token](token.md) object

| Param | Type | Description |
| --- | --- | --- |
| tokenId | <code>String</code> | the id of the token |

<a name="module_trello-yello..getWebhook"></a>
### trello-yello~getWebhook(webhookId) ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [webhook](webhook.md) object

| Param | Type | Description |
| --- | --- | --- |
| webhookId | <code>String</code> | the id of the webhook |

<a name="module_trello-yello..getCurrentUser"></a>
### trello-yello~getCurrentUser() ⇒ <code>Object</code>
**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the [member](member.md) object for the current user
<a name="module_trello-yello..markAllNotificationsRead"></a>
### trello-yello~markAllNotificationsRead(callback) ⇒ <code>Object</code>
Marks all notifications read by the user.

**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="module_trello-yello..search"></a>
### trello-yello~search(params) ⇒ <code>Object</code>
Runs a query against the Trello search engine.

**Kind**: inner method of <code>[trello-yello](#module_trello-yello)</code>
**Returns**: <code>Object</code> - the query result

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.query | <code>string</code> | the search query to run |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |

### Map
* [Action](action.md)
* [Board](board.md)
* [Card](card.md)
* [Checklist](checklist.md)
* [Label](label.md)
* [List](list.md)
* [Member](member.md)
* [Notification](notification.md)
* [Organization](organization.md)
* [Token](token.md)
* [Webhook](webhook.md)
