[Map](#map)

# Class: Card

* [trello-yello](trello.md)
  * [~get()](#get) ⇒ <code>Object</code>
  * [~getId(callback)](#getId) ⇒ <code>Object</code>
  * [~set(params)](#set) ⇒ <code>Object</code>
  * [~del(params)](#del) ⇒ <code>Object</code>
  * [~getAmISubscribed(callback)](#getAmISubscribed) ⇒ <code>Object</code>
  * [~getActions(callback)](#getActions) ⇒ <code>Object</code>
  * [~getAddCommentEmail(callback)](#getAddCommentEmail) ⇒ <code>Object</code>
  * [~getAttachmentCoverId(callback)](#getAttachmentCoverId) ⇒ <code>Object</code>
  * [~getAttachments(callback)](#getAttachments) ⇒ <code>Object</code>
  * [~getBadges(callback)](#getBadges) ⇒ <code>Object</code>
  * [~getBoard(callback)](#getBoard) ⇒ <code>Object</code>
  * [~getCheckItemStates(callback)](#getCheckItemStates) ⇒ <code>Object</code>
  * [~getChecklists(callback)](#getChecklists) ⇒ <code>Object</code>
  * [~getDescription(callback)](#getDescription) ⇒ <code>Object</code>
  * [~getDescriptionData(callback)](#getDescriptionData) ⇒ <code>Object</code>
  * [~getDueDate(callback)](#getDueDate) ⇒ <code>Object</code>
  * [~isArchived(callback)](#isArchived) ⇒ <code>Object</code>
  * [~getLastActivityDate(callback)](#getLastActivityDate) ⇒ <code>Object</code>
  * [~getLabels(callback)](#getLabels) ⇒ <code>Object</code>
  * [~getList(callback)](#getList) ⇒ <code>Object</code>
  * [~getLongUrl(callback)](#getLongUrl) ⇒ <code>Object</code>
  * [~getMembers(callback)](#getMembers) ⇒ <code>Object</code>
  * [~getMembersVoted(callback)](#getMembersVoted) ⇒ <code>Object</code>
  * [~getName(callback)](#getName) ⇒ <code>Object</code>
  * [~getPosition(callback)](#getPosition) ⇒ <code>Object</code>
  * [~getShortId(callback)](#getShortId) ⇒ <code>Object</code>
  * [~getShortLink(callback)](#getShortLink) ⇒ <code>Object</code>
  * [~getShortUrl(callback)](#getShortUrl) ⇒ <code>Object</code>
  * [~getStickers(callback)](#getStickers) ⇒ <code>Object</code>
  * [~archive(callback)](#archive) ⇒ <code>Object</code>
  * [~unarchive(callback)](#unarchive) ⇒ <code>Object</code>
	* [~setDescription(params, description)](#setDescription) ⇒ <code>Object</code>
  * [~setDueDate(params)](#setDueDate) ⇒ <code>Object</code>
  * [~setCover(params)](#setCover) ⇒ <code>Object</code>
  * [~removeCover(callback)](#removeCover) ⇒ <code>Object</code>
  * [~setBoard(params)](#setBoard) ⇒ <code>Object</code>
  * [~setList(params)](#setList) ⇒ <code>Object</code>
  * [~setMembers(params)](#setMembers) ⇒ <code>Object</code>
  * [~setLabels(params)](#setLabels) ⇒ <code>Object</code>
  * [~setName(params)](#setName) ⇒ <code>Object</code>
  * [~setPosition(params)](#setPosition) ⇒ <code>Object</code>
  * [~updateSticker(params)](#updateSticker) ⇒ <code>Object</code>
  * [~subscribe(callback)](#subscribe) ⇒ <code>Object</code>
  * [~unsubscribe(callback)](#unsubscribe) ⇒ <code>Object</code>
  * [~addComment(params)](#addComment) ⇒ <code>Object</code>
  * [~addAttachment(params)](#addAttachment) ⇒ <code>Object</code>
  * [~convertChecklistItemToCard(params)](#convertChecklistItemToCard) ⇒ <code>Object</code>
  * [~addChecklist(params)](#addChecklist) ⇒ <code>Object</code>
  * [~addLabelById(params)](#addLabelById) ⇒ <code>Object</code>
  * [~addLabelByColor(params)](#addLabelByColor) ⇒ <code>Object</code>
  * [~addMember(params)](#addMember) ⇒ <code>Object</code>
  * [~addmarkNotificationsRead(callback)](#addmarkNotificationsRead) ⇒ <code>Object</code>
  * [~setMemberVoteToYes(params)](#setMemberVoteToYes) ⇒ <code>Object</code>
  * [~addSticker(params)](#addSticker) ⇒ <code>Object</code>
  * [~removeComment(params)](#removeComment) ⇒ <code>Object</code>
  * [~removeAttachment(params)](#removeAttachment) ⇒ <code>Object</code>
  * [~removeLabelId(params)](#removeLabelId) ⇒ <code>Object</code>
  * [~removeLabelByColor(params)](#removeLabelByColor) ⇒ <code>Object</code>
  * [~removeMember(params)](#removeMember) ⇒ <code>Object</code>
  * [~setMemberVoteToNo(params)](#setMemberVoteToNo) ⇒ <code>Object</code>
  * [~removeSticker(params)](#removeSticker) ⇒ <code>Object</code>

<a name="get"></a>
## get() ⇒ <code>Object</code>
Asynchronously retrieves a property value from Trello. If the property
hasn't yet been populated, or it is dirty, then a network call to Trello
is made. Otherwise, the property is returned from memory. An error will
be returned if the property doesn't exist or is not a gettable property.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the property value  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params.propName | <code>String</code> |  | the name of the property to retrieve |
| params.skipValidation | <code>Boolean</code> | <code>false</code> | (*optional*) if true, skips local validation of the property path ||  |  |  | (*optional*)  ||
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |

<a name="getId"></a>
## getId(callback) ⇒ <code>Object</code>
Gets the id of the Trello object.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the id  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |

<a name="set"></a>
## set(params) ⇒ <code>Object</code>
Sets the given property using the new values passed in. If a property name
is not included, then the object itself is set using the new values.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value. The exact
nature of this value is currently undefined and may change in the future.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>Object</code> |  | the parameters object |
| params.values | <code>Object</code> | <code>{}</code> | (*optional*) the new values |
| params.propName | <code>String</code> |  | the name of the property you are setting. If propName isn't included, then params.values is set on the object itself. |
| params.preferNonIdempotence | <code>Boolean</code> | <code>false</code> | (*optional*) only relevant when the given property name can be modified both in an idempotent and a non-idempotent way. In that case, we default to the idempotent operation. As an example, if you set the labels on a card in an idempotent way, then it will replace all of the existing labels with the labels that were passed in. If you do it in a non-idempotent way, then the passed in labels will be added to the card, but existing labels will not be modified. |
| params.skipValidation | <code>Boolean</code> | <code>false</code> | (*optional*) if true, skips local validation of the property path |
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |

<a name="del"></a>
## del(params) ⇒ <code>Object</code>
Deletes the given property. If no property is given, then the Trello
object itself gets deleted.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value. The exact
nature of this value is currently undefined and may change in the future  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params | <code>Object</code> |  | the method parameters object |
| params.propName | <code>String</code> |  | (*optional*) the property to delete. If this is not included, then the object itself will be deleted. |
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |
| params.skipValidation | <code>Boolean</code> | <code>false</code> | (*optional*) if true, skips local validation of the property path |

<a name="getAmISubscribed"></a>
## getAmISubscribed(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to true if the user is subscribed
to the card  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getActions"></a>
## getActions(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the card's actions. This is an
array of action objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getAddCommentEmail"></a>
## getAddCommentEmail(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the email address which, when
new emails are received, will add a comment to the card  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getAttachmentCoverId"></a>
## getAttachmentCoverId(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the id of the attachment used
as the card's cover  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getAttachments"></a>
## getAttachments(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the card's attachments  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getBadges"></a>
## getBadges(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the card's badges  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getBoard"></a>
## getBoard(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a board object representing
the card's board  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getCheckItemStates"></a>
## getCheckItemStates(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the state of the card's
checklist items  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getChecklists"></a>
## getChecklists(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the card's checklists. This
is an array of checklist objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDescription"></a>
## getDescription(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the card's description  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDescriptionData"></a>
## getDescriptionData(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the card's description data  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDueDate"></a>
## getDueDate(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the card's dueDate,
or null if it doesn't have one  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="isArchived"></a>
## isArchived(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to true if the card has been
archived  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getLastActivityDate"></a>
## getLastActivityDate(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the timestamp of the last
activity performed on the card  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getLabels"></a>
## getLabels(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the card's labels  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getList"></a>
## getList(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to list that the card belongs to.
This is a list object.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getLongUrl"></a>
## getLongUrl(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to card's longform url  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getMembers"></a>
## getMembers(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the card's members. This is
an array of member objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getMembersVoted"></a>
## getMembersVoted(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the members who have voted for
this card. This is an array of member objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getName"></a>
## getName(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the card's name  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPosition"></a>
## getPosition(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to card's position  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getShortId"></a>
## getShortId(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to shortform version of the
card's id  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getShortLink"></a>
## getShortLink(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to shortform version of the
card's link  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getShortUrl"></a>
## getShortUrl(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to shortform version of the
card's url  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getStickers"></a>
## getStickers(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to objects representing the
card's stickers  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="archive"></a>
## archive(callback) ⇒ <code>Object</code>
Archives the card.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="unarchive"></a>
## unarchive(callback) ⇒ <code>Object</code>
Unarchives the card.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setDescription"></a>
## setDescription(params, description) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| description | <code>String</code> | the new description |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setDueDate"></a>
## setDueDate(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.dueDate | <code>Date</code> | the due date or null to remove the due date |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setCover"></a>
## setCover(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.attachmentCoverId | <code>String</code> | the id of the attachment to use as the card's cover |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeCover"></a>
## removeCover(callback) ⇒ <code>Object</code>
Removes the cover from the card.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setBoard"></a>
## setBoard(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.boardId | <code>String</code> | the board to move the card to |
| params.listId | <code>String</code> | (*optional*) the list to move the card to. If this isn't included, then the card will be moved to the board's first list. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setList"></a>
## setList(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.listId | <code>String</code> | the list to move the card to |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setMembers"></a>
## setMembers(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.memberIds | <code>String</code> | a comma-separated list of member id's. The card will have these members and no others. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setLabels"></a>
## setLabels(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.colors | <code>String</code> | a comma-separated list of colors, or 'all' for all colors. The card will have these label colors and no others. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setName"></a>
## setName(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.name | <code>String</code> | the new name of the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setPosition"></a>
## setPosition(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.position | <code>Number</code> | the new position of the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="updateSticker"></a>
## updateSticker(params) ⇒ <code>Object</code>
Edits the sticker using the given values.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.stickerId | <code>String</code> | the id of the sticker to edit |
| params.top | <code>Number</code> | (*optional*) the top coordinate of the sticker |
| params.left | <code>Number</code> | (*optional*) the left coordinate of the sticker |
| params.zIndex | <code>Number</code> | (*optional*) the z-index of the sticker |
| params.rotate | <code>Number</code> | (*optional*) the rotation value of the sticker |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="subscribe"></a>
## subscribe(callback) ⇒ <code>Object</code>
Subscribe the user to the card.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="unsubscribe"></a>
## unsubscribe(callback) ⇒ <code>Object</code>
Unsubscribe the user from the card.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addComment"></a>
## addComment(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to an action object representing
the new comment  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.comment | <code>String</code> | the comment to add to the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addAttachment"></a>
## addAttachment(params) ⇒ <code>Object</code>
Adds an attachment to the card. You can either add a file using form data
or a url.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.file | <code>String</code> | (*optional*) the file data to add |
| params.url | <code>String</code> | (*optional*) the url of the file to add |
| params.name | <code>String</code> | (*optional*) the name of the file |
| params.mimeType | <code>String</code> | (*optional*) the mime type of the file. This is only used if params.file is set. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="convertChecklistItemToCard"></a>
## convertChecklistItemToCard(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a card object representing
then new card  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.checklistId | <code>String</code> | the id of the checklist item's parent checklist |
| params.checklistItemId | <code>String</code> | the id of the checklist item |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addChecklist"></a>
## addChecklist(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.checklistId | <code>String</code> | (*optional*) the id of the checklist to move to the card. If this is null or not included, then a new checklist is created. |
| params.name | <code>String</code> | (*optional*) the name of the checklist |
| params.cloneId | <code>String</code> | (*optional*) the id of the checklist to clone |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addLabelById"></a>
## addLabelById(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.labelId | <code>String</code> | the label to add to the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addLabelByColor"></a>
## addLabelByColor(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the label object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.color | <code>String</code> | the color of the label to add |
| params.name | <code>String</code> | (*optional*) the name on the label. If the color and name combination already exist on the board, then that label is used. If not, a new label is created with the given color and name combination. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addMember"></a>
## addMember(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.memberId | <code>String</code> | the id of the member to add to the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addmarkNotificationsRead"></a>
## addmarkNotificationsRead(callback) ⇒ <code>Object</code>
Mark all notifications related to the card as read.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setMemberVoteToYes"></a>
## setMemberVoteToYes(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.memberId | <code>String</code> | the id of the member who will give a yes vote on the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addSticker"></a>
## addSticker(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.image | <code>String</code> | the sticker image to add |
| params.top | <code>Number</code> | (*optional*) the top coordinate of the sticker |
| params.left | <code>Number</code> | (*optional*) the left coordinate of the sticker |
| params.zIndex | <code>Number</code> | (*optional*) the z-index of the sticker |
| params.rotate | <code>Number</code> | (*optional*) the rotation value of the sticker |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeComment"></a>
## removeComment(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.actionId | <code>String</code> | the id of the comment action to remove from the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeAttachment"></a>
## removeAttachment(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.attachmentId | <code>String</code> | the id of the attachment to remove from the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeLabelId"></a>
## removeLabelId(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.labelId | <code>String</code> | the id of the label to remove from the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeLabelByColor"></a>
## removeLabelByColor(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.color | <code>String</code> | the name of the cold to remove from the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeMember"></a>
## removeMember(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.memberId | <code>String</code> | the id of the member to remove from the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setMemberVoteToNo"></a>
## setMemberVoteToNo(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.memberId | <code>String</code> | the id of the member who will have their vote rescinded |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeSticker"></a>
## removeSticker(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.stickerId | <code>String</code> | the id of the sticker to remove from the card |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

### Map
* [Action](action.md)
* [Board](board.md)
* [Checklist](checklist.md)
* [Label](label.md)
* [List](list.md)
* [Member](member.md)
* [Notification](notification.md)
* [Organization](organization.md)
* [Token](token.md)
* [Webhook](webhook.md)
