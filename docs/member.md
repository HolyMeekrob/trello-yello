[Map](#map)

# Class: Member

* [trello-yello](trello.md)
  * [~get()](#get) ⇒ <code>Object</code>
  * [~getId(callback)](#getId) ⇒ <code>Object</code>
  * [~set(params)](#set) ⇒ <code>Object</code>
  * [~del(params)](#del) ⇒ <code>Object</code>
  * [~getActions(callback)](#getActions) ⇒ <code>Object</code>
  * [~getAvatarHash(callback)](#getAvatarHash) ⇒ <code>Object</code>
  * [~getAvatarSource(callback)](#getAvatarSource) ⇒ <code>Object</code>
  * [~getBio(callback)](#getBio) ⇒ <code>Object</code>
  * [~getBioData(callback)](#getBioData) ⇒ <code>Object</code>
  * [~getBoardBackgrounds(callback)](#getBoardBackgrounds) ⇒ <code>Object</code>
  * [~getBoards(callback)](#getBoards) ⇒ <code>Object</code>
  * [~getBoardsInvited(callback)](#getBoardsInvited) ⇒ <code>Object</code>
  * [~getBoardStars(callback)](#getBoardStars) ⇒ <code>Object</code>
  * [~getCards(callback)](#getCards) ⇒ <code>Object</code>
  * [~getConfirmed(callback)](#getConfirmed) ⇒ <code>Object</code>
  * [~getCustomBoardBackgrounds(callback)](#getCustomBoardBackgrounds) ⇒ <code>Object</code>
  * [~getCustomEmoji(callback)](#getCustomEmoji) ⇒ <code>Object</code>
  * [~getCustomStickers(callback)](#getCustomStickers) ⇒ <code>Object</code>
  * [~getEmail(callback)](#getEmail) ⇒ <code>Object</code>
  * [~getFullName(callback)](#getFullName) ⇒ <code>Object</code>
  * [~getGravatarHash(callback)](#getGravatarHash) ⇒ <code>Object</code>
  * [~getPinnedBoards(callback)](#getPinnedBoards) ⇒ <code>Object</code>
  * [~getInitials(callback)](#getInitials) ⇒ <code>Object</code>
  * [~getLoginTypes(callback)](#getLoginTypes) ⇒ <code>Object</code>
  * [~getMemberType(callback)](#getMemberType) ⇒ <code>Object</code>
  * [~getNotifications(callback)](#getNotifications) ⇒ <code>Object</code>
  * [~getOneTimeMessagesDismissed(callback)](#getOneTimeMessagesDismissed) ⇒ <code>Object</code>
  * [~getOrganizations(callback)](#getOrganizations) ⇒ <code>Object</code>
  * [~getOrganizationsInvited(callback)](#getOrganizationsInvited) ⇒ <code>Object</code>
  * [~getPreferences(callback)](#getPreferences) ⇒ <code>Object</code>
  * [~getPremiumFeatures(callback)](#getPremiumFeatures) ⇒ <code>Object</code>
  * [~getProducts(callback)](#getProducts) ⇒ <code>Object</code>
  * [~getSavedSearches(callback)](#getSavedSearches) ⇒ <code>Object</code>
  * [~getStatus(callback)](#getStatus) ⇒ <code>Object</code>
  * [~getTokens(callback)](#getTokens) ⇒ <code>Object</code>
  * [~getTrophies(callback)](#getTrophies) ⇒ <code>Object</code>
  * [~getUploadedAvatarHash(callback)](#getUploadedAvatarHash) ⇒ <code>Object</code>
  * [~getUrl(callback)](#getUrl) ⇒ <code>Object</code>
  * [~getUsername(callback)](#getUsername) ⇒ <code>Object</code>
  * [~setAvatarSource(params)](#setAvatarSource) ⇒ <code>Object</code>
  * [~setBio(params)](#setBio) ⇒ <code>Object</code>
  * [~updateBoardStar(params)](#updateBoardStar) ⇒ <code>Object</code>
  * [~updateCustomBoardBackground(params)](#updateCustomBoardBackground) ⇒ <code>Object</code>
  * [~setFullName(params)](#setFullName) ⇒ <code>Object</code>
  * [~setInitials(params)](#setInitials) ⇒ <code>Object</code>
  * [~enableColorBlindMode(callback)](#enableColorBlindMode) ⇒ <code>Object</code>
  * [~disableColorBlindMode(callback)](#disableColorBlindMode) ⇒ <code>Object</code>
  * [~setLocale(params)](#setLocale) ⇒ <code>Object</code>
  * [~setEmailSummariesHourly(callback)](#setEmailSummariesHourly) ⇒ <code>Object</code>
  * [~setEmailSummariesInstantly(callback)](#setEmailSummariesInstantly) ⇒ <code>Object</code>
  * [~setEmailSummariesNever(callback)](#setEmailSummariesNever) ⇒ <code>Object</code>
  * [~updateSavedSearch(params)](#updateSavedSearch) ⇒ <code>Object</code>
  * [~setUsername(params)](#setUsername) ⇒ <code>Object</code>
  * [~addAvatar(params)](#addAvatar) ⇒ <code>Object</code>
  * [~addBoardStar(params)](#addBoardStar) ⇒ <code>Object</code>
  * [~addCustomBoardBackground(params)](#addCustomBoardBackground) ⇒ <code>Object</code>
  * [~addCustomEmoji(params)](#addCustomEmoji) ⇒ <code>Object</code>
  * [~addCustomSticker(params)](#addCustomSticker) ⇒ <code>Object</code>
  * [~setOneTimeMessagesDismissed(params)](#setOneTimeMessagesDismissed) ⇒ <code>Object</code>
  * [~addSavedSearch(params)](#addSavedSearch) ⇒ <code>Object</code>
  * [~removeBoardStar(params)](#removeBoardStar) ⇒ <code>Object</code>
  * [~removeCustomBoardBackground(params)](#removeCustomBoardBackground) ⇒ <code>Object</code>
  * [~removeCustomSticker(params)](#removeCustomSticker) ⇒ <code>Object</code>
  * [~removeSavedSearch(params)](#removeSavedSearch) ⇒ <code>Object</code>

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
**Returns**: <code>Object</code> - a Promise that resolves to the member's actions. This is an
array of action objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getAvatarHash"></a>
## getAvatarHash(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's avatar hash  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getAvatarSource"></a>
## getAvatarSource(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the source URL for the
member's avatar  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getBio"></a>
## getBio(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to member's bio  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getBioData"></a>
## getBioData(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to an object containing the
member's bio data  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getBoardBackgrounds"></a>
## getBoardBackgrounds(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to all of the backgrounds the
member is eligible to use  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getBoards"></a>
## getBoards(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's boards. This is an
array of board objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getBoardsInvited"></a>
## getBoardsInvited(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the boards that the member is
invited to. This is an array of board objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getBoardStars"></a>
## getBoardStars(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's board stars  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getCards"></a>
## getCards(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's cards. This is an
array of card objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getConfirmed"></a>
## getConfirmed(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to true if the member's account
has been confirmed  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getCustomBoardBackgrounds"></a>
## getCustomBoardBackgrounds(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's custom
backgrounds  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getCustomEmoji"></a>
## getCustomEmoji(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to member's custom emoji  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getCustomStickers"></a>
## getCustomStickers(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's custom stickers  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getEmail"></a>
## getEmail(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's email address  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getFullName"></a>
## getFullName(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to member's full name  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getGravatarHash"></a>
## getGravatarHash(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to member's Gravatar hash  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPinnedBoards"></a>
## getPinnedBoards(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the id's of the boards that
the member has pinned.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getInitials"></a>
## getInitials(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's initials  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getLoginTypes"></a>
## getLoginTypes(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's login types  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getMemberType"></a>
## getMemberType(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to member's type  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getNotifications"></a>
## getNotifications(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to member's notifications. This
is an array of notification objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getOneTimeMessagesDismissed"></a>
## getOneTimeMessagesDismissed(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the types of messages that
are dismissed for the member  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getOrganizations"></a>
## getOrganizations(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the organizations that the
member belongs to. This is an array of organization objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getOrganizationsInvited"></a>
## getOrganizationsInvited(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the organizations that the
member is invited to. This is an array of organization objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPreferences"></a>
## getPreferences(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's preferences  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPremiumFeatures"></a>
## getPremiumFeatures(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the premium features that the
member has available  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getProducts"></a>
## getProducts(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's products  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getSavedSearches"></a>
## getSavedSearches(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's saved searches  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getStatus"></a>
## getStatus(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's activity status  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getTokens"></a>
## getTokens(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's active tokens  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getTrophies"></a>
## getTrophies(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to member's trophies  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getUploadedAvatarHash"></a>
## getUploadedAvatarHash(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's uploaded avatar
hash  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getUrl"></a>
## getUrl(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the url of the member's
profile page  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getUsername"></a>
## getUsername(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member's username  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setAvatarSource"></a>
## setAvatarSource(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.source | <code>String</code> | the source of the avatar. Valid values are 'gravatar', 'upload', or 'none'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setBio"></a>
## setBio(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.bio | <code>String</code> | the member's bio |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="updateBoardStar"></a>
## updateBoardStar(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.boardStarId | <code>String</code> | the board star to update |
| params.boardId | <code>String</code> | (*optional*) the board id to move the board star to |
| params.position | <code>String</code> &#124; <code>Number</code> | (*optional*) the position of the board star. Valid values are 'top', 'bottom', or a positive number. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="updateCustomBoardBackground"></a>
## updateCustomBoardBackground(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.boardBackgroundId | <code>String</code> | the board background id |
| params.tile | <code>Boolean</code> | (*optional*) whether or not to tile the background |
| params.brightness | <code>String</code> | (*optional*) the brightness of the background. Valid values are 'dark', 'light', or 'unknown'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setFullName"></a>
## setFullName(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.fullName | <code>String</code> | the member's full name |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setInitials"></a>
## setInitials(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.initials | <code>String</code> | the member's initials. This must be a string of length 1-4 that doesn't begin or end with a space. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="enableColorBlindMode"></a>
## enableColorBlindMode(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="disableColorBlindMode"></a>
## disableColorBlindMode(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setLocale"></a>
## setLocale(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.locale | <code>String</code> | the member's locale |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setEmailSummariesHourly"></a>
## setEmailSummariesHourly(callback) ⇒ <code>Object</code>
Sets the member's preference for email summaries to hourly.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setEmailSummariesInstantly"></a>
## setEmailSummariesInstantly(callback) ⇒ <code>Object</code>
Sets the member's preference for email summaries to immediately.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setEmailSummariesNever"></a>
## setEmailSummariesNever(callback) ⇒ <code>Object</code>
Turns off email summaries for member.

**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="updateSavedSearch"></a>
## updateSavedSearch(params, the) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.savedSearchId | <code>String</code> | the saved search to update |
| params.name | <code>String</code> | (*optional*) the name of the saved search |
| params.query | <code>String</code> | (*optional*) the search query |
| the | <code>String</code> &#124; <code>Number</code> | saved search's position. Valid values are 'top', 'bottom', or a positive number. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setUsername"></a>
## setUsername(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.username | <code>String</code> | the member's username. Must have a length of at least three characters. Only lowercase letters, underscores, and numbers are allowed. Must be unique. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addAvatar"></a>
## addAvatar(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.file | <code>File</code> | the avatar file |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addBoardStar"></a>
## addBoardStar(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the id of the new board star  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.boardId | <code>String</code> | the id of the board that is getting the star |
| params.position | <code>String</code> &#124; <code>Number</code> | the position of the board star. Valid values are 'top', 'bottom', or a positive number. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addCustomBoardBackground"></a>
## addCustomBoardBackground(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the id of the new custom
board background  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.file | <code>File</code> | the image file |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addCustomEmoji"></a>
## addCustomEmoji(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the id of the new custom emoji  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.file | <code>File</code> | the image file for the emoji |
| params.name | <code>String</code> | the name of the emojy |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addCustomSticker"></a>
## addCustomSticker(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the id of the new custom
sticker  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.file | <code>File</code> | the image file for the sticker |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setOneTimeMessagesDismissed"></a>
## setOneTimeMessagesDismissed(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.messageType | <code>String</code> | the type of message to dismiss |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addSavedSearch"></a>
## addSavedSearch(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the id of the new saved search  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.name | <code>String</code> | the name of the saved search |
| params.query | <code>String</code> | the query to save |
| params.position | <code>String</code> | the position of the search. Valid values are 'top', 'bottom', or a positive number. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeBoardStar"></a>
## removeBoardStar(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.boardStarId | <code>String</code> | the board star to remove |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeCustomBoardBackground"></a>
## removeCustomBoardBackground(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.boardBackgroundId | <code>String</code> | the id of the custom board background to remove |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeCustomSticker"></a>
## removeCustomSticker(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.customStickerId | <code>String</code> | the id of the custom sticker to remove |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeSavedSearch"></a>
## removeSavedSearch(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.savedSearchId | <code>String</code> | the id of the saved search to remove |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

### Map
* [Action](action.md)
* [Board](board.md)
* [Card](card.md)
* [Checklist](checklist.md)
* [Label](label.md)
* [List](list.md)
* [Notification](notification.md)
* [Organization](organization.md)
* [Token](token.md)
* [Webhook](webhook.md)
