[Map](#map)

# Class: Board

## Class functions
* [trello-yello](trello.md)
  * [~get()](#get) ⇒ <code>Object</code>
  * [~getId(callback)](#getId) ⇒ <code>Object</code>
  * [~set(params)](#set) ⇒ <code>Object</code>
  * [~del(params)](#del) ⇒ <code>Object</code>
  * [~getActions(callback)](#getActions) ⇒ <code>Object</code>
  * [~getAmISubscribed(callback)](#getAmISubscribed) ⇒ <code>Object</code>
  * [~getBoardStars(callback)](#getBoardStars) ⇒ <code>Object</code>
  * [~getCards(callback)](#getCards) ⇒ <code>Object</code>
  * [~getChecklists(callback)](#getChecklists) ⇒ <code>Object</code>
  * [~isClosed(callback)](#isClosed) ⇒ <code>Object</code>
  * [~getLastActivityDate(callback)](#getLastActivityDate) ⇒ <code>Object</code>
  * [~getLastViewedDate(callback)](#getLastViewedDate) ⇒ <code>Object</code>
  * [~getDescription(callback)](#getDescription) ⇒ <code>Object</code>
  * [~getDescriptionData(callback)](#getDescriptionData) ⇒ <code>Object</code>
  * [~getInvitations(callback)](#getInvitations) ⇒ <code>Object</code>
  * [~getInvited(callback)](#getInvited) ⇒ <code>Object</code>
  * [~getLabels(callback)](#getLabels) ⇒ <code>Object</code>
  * [~getLabelNames(callback)](#getLabelNames) ⇒ <code>Object</code>
  * [~getLists(callback)](#getLists) ⇒ <code>Object</code>
  * [~getMembers(callback)](#getMembers) ⇒ <code>Object</code>
  * [~getInvitedMembers(callback)](#getInvitedMembers) ⇒ <code>Object</code>
  * [~getMemberships(callback)](#getMemberships) ⇒ <code>Object</code>
  * [~getMyPreferences(callback)](#getMyPreferences) ⇒ <code>Object</code>
  * [~getName(callback)](#getName) ⇒ <code>Object</code>
  * [~getOrganization(callback)](#getOrganization) ⇒ <code>Object</code>
  * [~getPinned(callback)](#getPinned) ⇒ <code>Object</code>
  * [~getPreferences(callback)](#getPreferences) ⇒ <code>Object</code>
  * [~getPowerUps(callback)](#getPowerUps) ⇒ <code>Object</code>
  * [~getShortLink(callback)](#getShortLink) ⇒ <code>Object</code>
  * [~getShortUrl(callback)](#getShortUrl) ⇒ <code>Object</code>
  * [~isStarred(callback)](#isStarred) ⇒ <code>Object</code>
  * [~getUrl(callback)](#getUrl) ⇒ <code>Object</code>
  * [~close(callback)](#close) ⇒ <code>Object</code>
  * [~reopen(callback)](#reopen) ⇒ <code>Object</code>
  * [~setDescription(params)](#setDescription) ⇒ <code>Object</code>
  * [~setOrganization(params)](#setOrganization) ⇒ <code>Object</code>
  * [~setLabelName(params)](#setLabelName) ⇒ <code>Object</code>
  * [~addMemberAndSetType(params)](#addMemberAndSetType) ⇒ <code>Object</code>
  * [~setMemberType(params)](#setMemberType) ⇒ <code>Object</code>
  * [~setMembershipType(params)](#setMembershipType) ⇒ <code>Object</code>
  * [~setEmailPosition(params)](#setEmailPosition) ⇒ <code>Object</code>
  * [~setEmailList(params)](#setEmailList) ⇒ <code>Object</code>
  * [~showListGuide(callback)](#showListGuide) ⇒ <code>Object</code>
  * [~hideListGuide(callback)](#hideListGuide) ⇒ <code>Object</code>
  * [~showSidebar(callback)](#showSidebar) ⇒ <code>Object</code>
  * [~hideSidebar(callback)](#hideSidebar) ⇒ <code>Object</code>
  * [~showSidebarActivity(callback)](#showSidebarActivity) ⇒ <code>Object</code>
  * [~hideSidebarActivity(callback)](#hideSidebarActivity) ⇒ <code>Object</code>
  * [~showSidebarActions(callback)](#showSidebarActions) ⇒ <code>Object</code>
  * [~hideSidebarActions(callback)](#hideSidebarActions) ⇒ <code>Object</code>
  * [~showSidebarMembers(callback)](#showSidebarMembers) ⇒ <code>Object</code>
  * [~hideSidebarMembers(callback)](#hideSidebarMembers) ⇒ <code>Object</code>
  * [~setName(params)](#setName) ⇒ <code>Object</code>
  * [~setBackground(params)](#setBackground) ⇒ <code>Object</code>
  * [~enableCalendarFeed(callback)](#enableCalendarFeed) ⇒ <code>Object</code>
  * [~disableCalendarFeed(callback)](#disableCalendarFeed) ⇒ <code>Object</code>
  * [~setCardAging(params)](#setCardAging) ⇒ <code>Object</code>
  * [~enableCardCovers(callback)](#enableCardCovers) ⇒ <code>Object</code>
  * [~disableCardCovers(callback)](#disableCardCovers) ⇒ <code>Object</code>
  * [~setCommentsPermissions(params)](#setCommentsPermissions) ⇒ <code>Object</code>
  * [~setInvitationsPermissions(params)](#setInvitationsPermissions) ⇒ <code>Object</code>
  * [~setVisibility(params)](#setVisibility) ⇒ <code>Object</code>
  * [~enableSelfJoin(callback)](#enableSelfJoin) ⇒ <code>Object</code>
  * [~disableSelfJoin(callback)](#disableSelfJoin) ⇒ <code>Object</code>
  * [~setVotingPermissions(params)](#setVotingPermissions) ⇒ <code>Object</code>
  * [~subscribe(callback)](#subscribe) ⇒ <code>Object</code>
  * [~unsubscribe(callback)](#unsubscribe) ⇒ <code>Object</code>
  * [~generateCalendarKey(callback)](#generateCalendarKey) ⇒ <code>Object</code>
  * [~generateEmailKey(callback)](#generateEmailKey) ⇒ <code>Object</code>
  * [~addLabel(params)](#addLabel) ⇒ <code>Object</code>
  * [~addList(params)](#addList) ⇒ <code>Object</code>
  * [~markAsViewed(callback)](#markAsViewed) ⇒ <code>Object</code>
  * [~addPowerUp(params)](#addPowerUp) ⇒ <code>Object</code>
  * [~removeMember(params)](#removeMember) ⇒ <code>Object</code>
  * [~removePowerUp(params)](#removePowerUp) ⇒ <code>Object</code>

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

<a name="getActions"></a>
## getActions(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the board's actions. This is an
array of action objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getAmISubscribed"></a>
## getAmISubscribed(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to true if the user is subscribed
to the board  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getBoardStars"></a>
## getBoardStars(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the board's stars  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getCards"></a>
## getCards(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the board's cards. This is
an array of card objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getChecklists"></a>
## getChecklists(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to all of the board's checklists.
This is an array of checklist objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="isClosed"></a>
## isClosed(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to true if the board is closed  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getLastActivityDate"></a>
## getLastActivityDate(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the timestamp of the board's
last activity  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getLastViewedDate"></a>
## getLastViewedDate(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the timestamp of the board's
last viewing  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDescription"></a>
## getDescription(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the board's descrsiption  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDescriptionData"></a>
## getDescriptionData(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the board's description data  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getInvitations"></a>
## getInvitations(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a list of the board's current
invitations  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getInvited"></a>
## getInvited(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to true if the current user has
an invitation to the board  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getLabels"></a>
## getLabels(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the board's labels. This is
an array of label objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getLabelNames"></a>
## getLabelNames(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to board's label names  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getLists"></a>
## getLists(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the board's lists. This is an
array of list objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getMembers"></a>
## getMembers(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the board's members. This is
an array of member objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getInvitedMembers"></a>
## getInvitedMembers(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the members that are invited
to the board. This is an array of member objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getMemberships"></a>
## getMemberships(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to board's memberships  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getMyPreferences"></a>
## getMyPreferences(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the user's preferences for the
board  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getName"></a>
## getName(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to board's name  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getOrganization"></a>
## getOrganization(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to board's organization. This is
an organization object.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPinned"></a>
## getPinned(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to true if the board has been
pinned  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPreferences"></a>
## getPreferences(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the board's settings  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPowerUps"></a>
## getPowerUps(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the board's power ups  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getShortLink"></a>
## getShortLink(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the shortform version of the
board's link  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getShortUrl"></a>
## getShortUrl(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the shortform version of the
board's url  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="isStarred"></a>
## isStarred(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to true if the board is starred
by the current user  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getUrl"></a>
## getUrl(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the longform version of the
board's url  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="close"></a>
## close(callback) ⇒ <code>Object</code>
Closes the board.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="reopen"></a>
## reopen(callback) ⇒ <code>Object</code>
Reopens the board.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setDescription"></a>
## setDescription(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.description | <code>String</code> | the new description |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setOrganization"></a>
## setOrganization(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.organizationId | <code>String</code> | the id of the organization |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setLabelName"></a>
## setLabelName(params) ⇒ <code>Object</code>
Sets the name for the label of the given color.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.color | <code>String</code> | the color for the name change |
| params.name | <code>String</code> | the new name for the color |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addMemberAndSetType"></a>
## addMemberAndSetType(params) ⇒ <code>Object</code>
Sets the member type for a member with the given information. If they are
not already a member on the board, they are added as one.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params |  |  | the method parameters object |
| params.email | <code>String</code> |  | the email address of the member |
| params.fullName | <code>String</code> |  | the full name of the member |
| params.memberType | <code>String</code> | <code>&#x27;normal&#x27;</code> | (*optional*) the member type to set for the user. Valid values are 'admin', 'normal', and 'observer'. |
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete |

<a name="setMemberType"></a>
## setMemberType(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.memberId | <code>String</code> | the member's id |
| params.memberType | <code>String</code> | the member type to set for the user. Valid values are 'admin', 'normal', and 'observer'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setMembershipType"></a>
## setMembershipType(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params |  |  | the method parameters object |
| params.membershipId | <code>String</code> |  | the membershipId |
| params.membershipType | <code>String</code> |  | the membership type to set for the user. Valid values are 'admin', 'normal', and 'observer'. |
| params.memberFields | <code>String</code> | <code>&#x27;fullName,username&#x27;</code> | (*optional*) a comma-separated list of member fields for the membership. Can be 'all' or any collection of the following: 'avatarHash', 'bio', 'bioData', 'confirmed', 'fullName', 'idPremOrgsAdmin', 'initials', 'memberType', 'products', 'status', 'url', 'username'. |
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete |

<a name="setEmailPosition"></a>
## setEmailPosition(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.emailPosition | <code>String</code> | The position on a list that emailed cards will be set to. Valid values are 'top' and 'bottom'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setEmailList"></a>
## setEmailList(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.emailListId | <code>String</code> | the list Id that emailed cards will appear on |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="showListGuide"></a>
## showListGuide(callback) ⇒ <code>Object</code>
Shows the list guide.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="hideListGuide"></a>
## hideListGuide(callback) ⇒ <code>Object</code>
Hides the list guide.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="showSidebar"></a>
## showSidebar(callback) ⇒ <code>Object</code>
Shows the sidebar.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="hideSidebar"></a>
## hideSidebar(callback) ⇒ <code>Object</code>
Hides the sidebar.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="showSidebarActivity"></a>
## showSidebarActivity(callback) ⇒ <code>Object</code>
Shows the activity section of the sidebar.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="hideSidebarActivity"></a>
## hideSidebarActivity(callback) ⇒ <code>Object</code>
Hide the activity section of the sidebar.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="showSidebarActions"></a>
## showSidebarActions(callback) ⇒ <code>Object</code>
Shows the board actions section of the sidebar.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="hideSidebarActions"></a>
## hideSidebarActions(callback) ⇒ <code>Object</code>
Hides the board actions section of the sidebar.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="showSidebarMembers"></a>
## showSidebarMembers(callback) ⇒ <code>Object</code>
Shows the members section of the sidebar.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="hideSidebarMembers"></a>
## hideSidebarMembers(callback) ⇒ <code>Object</code>
Hides the members section of the sidebar.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setName"></a>
## setName(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.name | <code>String</code> | the new name for the board |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setBackground"></a>
## setBackground(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.background | <code>String</code> | the new background. This must be a standard background name or the id of a custom background. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="enableCalendarFeed"></a>
## enableCalendarFeed(callback) ⇒ <code>Object</code>
Enables the board's calendar feed feature.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="disableCalendarFeed"></a>
## disableCalendarFeed(callback) ⇒ <code>Object</code>
Disables the board's calendar feed feature.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setCardAging"></a>
## setCardAging(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.cardAgingType | <code>String</code> | the card aging type. Valid values are 'regular' and 'pirate'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="enableCardCovers"></a>
## enableCardCovers(callback) ⇒ <code>Object</code>
Enables card covers for the board.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="disableCardCovers"></a>
## disableCardCovers(callback) ⇒ <code>Object</code>
Disables card covers for the board.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setCommentsPermissions"></a>
## setCommentsPermissions(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.permissionsLevel | <code>String</code> | the permissions level for the board's comments. Allowed values are disabled, members, observers, org, public. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setInvitationsPermissions"></a>
## setInvitationsPermissions(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.memberLevel | <code>String</code> | the level of member that can send invitations to the board. Allowed values are admins and members. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setVisibility"></a>
## setVisibility(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.visibility | <code>string</code> | the group that a member must belong to in order to be invited to the board. Valid values are 'org', 'private', and 'public'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="enableSelfJoin"></a>
## enableSelfJoin(callback) ⇒ <code>Object</code>
Allows a member to join without invitation.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="disableSelfJoin"></a>
## disableSelfJoin(callback) ⇒ <code>Object</code>
Disallows members to join without invitation.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setVotingPermissions"></a>
## setVotingPermissions(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.permissionLevel | <code>String</code> | the level of member that is allowed to vote on cards. Valid values are 'disabled', 'members', 'observers', 'org', and 'public'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="subscribe"></a>
## subscribe(callback) ⇒ <code>Object</code>
Subscribes the user to the board.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="unsubscribe"></a>
## unsubscribe(callback) ⇒ <code>Object</code>
Unsubscribes the user from the board.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="generateCalendarKey"></a>
## generateCalendarKey(callback) ⇒ <code>Object</code>
Generates a calendar key.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the new calendar key  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="generateEmailKey"></a>
## generateEmailKey(callback) ⇒ <code>Object</code>
Generates an email key.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the new email key  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addLabel"></a>
## addLabel(params) ⇒ <code>Object</code>
Adds a new label to the board with the given name.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a label object for the
new label  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.name | <code>String</code> | the name of the label |
| params.color | <code>String</code> | the color of the label |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addList"></a>
## addList(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a list object for the new list  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params |  |  | the method parameters object |
| params.name | <code>String</code> |  | the name of the new list |
| params.position | <code>String</code> &#124; <code>Number</code> | <code>&#x27;top&#x27;</code> | (*optional*) the position of the list. Valid value are 'top', 'bottom', or a positive number. |
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete |

<a name="markAsViewed"></a>
## markAsViewed(callback) ⇒ <code>Object</code>
Mark the board as viewed by the user.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addPowerUp"></a>
## addPowerUp(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.powerUp | <code>String</code> | the powerUp to add to the board. Valid values are 'calendar', 'cardAging', 'recap', and 'voting'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeMember"></a>
## removeMember(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.memberId | <code>String</code> | member to remove from the board |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removePowerUp"></a>
## removePowerUp(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.powerUp | <code>String</code> | the powerUp to remove from the board. Valid values are 'calendar', 'cardAging', 'recap', and 'voting'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

### Map
* [Action](action.md)
* [Card](card.md)
* [Checklist](checklist.md)
* [Label](label.md)
* [List](list.md)
* [Member](member.md)
* [Notification](notification.md)
* [Organization](organization.md)
* [Token](token.md)
* [Webhook](webhook.md)
