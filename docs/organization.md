[Map](#map)

# Class: Organization

* [trello-yello](trello.md)
  * [~get()](#get) ⇒ <code>Object</code>
  * [~getId(callback)](#getId) ⇒ <code>Object</code>
  * [~set(params)](#set) ⇒ <code>Object</code>
  * [~del(params)](#del) ⇒ <code>Object</code>
  * [~getActions(callback)](#getActions) ⇒ <code>Object</code>
  * [~getBillableMemberCount(callback)](#getBillableMemberCount) ⇒ <code>Object</code>
  * [~getBoards(callback)](#getBoards) ⇒ <code>Object</code>
  * [~getDescription(callback)](#getDescription) ⇒ <code>Object</code>
  * [~getDescriptionData(callback)](#getDescriptionData) ⇒ <code>Object</code>
  * [~getDisplayName(callback)](#getDisplayName) ⇒ <code>Object</code>
  * [~getLogoHash(callback)](#getLogoHash) ⇒ <code>Object</code>
  * [~getMembers(callback)](#getMembers) ⇒ <code>Object</code>
  * [~getInvitedMembers(callback)](#getInvitedMembers) ⇒ <code>Object</code>
  * [~getMemberships(callback)](#getMemberships) ⇒ <code>Object</code>
  * [~getName(callback)](#getName) ⇒ <code>Object</code>
  * [~getPowerUps(callback)](#getPowerUps) ⇒ <code>Object</code>
  * [~getPreferences(callback)](#getPreferences) ⇒ <code>Object</code>
  * [~getPremiumFeatures(callback)](#getPremiumFeatures) ⇒ <code>Object</code>
  * [~getProducts(callback)](#getProducts) ⇒ <code>Object</code>
  * [~getUrl(callback)](#getUrl) ⇒ <code>Object</code>
  * [~getWebsite(callback)](#getWebsite) ⇒ <code>Object</code>
  * [~setDescription(params)](#setDescription) ⇒ <code>Object</code>
  * [~setDisplayName(params)](#setDisplayName) ⇒ <code>Object</code>
  * [~setMemberType(params)](#setMemberType) ⇒ <code>Object</code>
  * [~addNonMember(params)](#addNonMember) ⇒ <code>Object</code>
  * [~activateMember(callback)](#activateMember) ⇒ <code>Object</code>
  * [~deactivate(callback)](#deactivate) ⇒ <code>Object</code>
  * [~setName(params)](#setName) ⇒ <code>Object</code>
  * [~setAssociatedDomain(params)](#setAssociatedDomain) ⇒ <code>Object</code>
  * [~setOrgBoardVisibilityLevel(params)](#setOrgBoardVisibilityLevel) ⇒ <code>Object</code>
  * [~setPrivateBoardVisibilityLevel(params)](#setPrivateBoardVisibilityLevel) ⇒ <code>Object</code>
  * [~setPublicBoardVisibilityLevel(params)](#setPublicBoardVisibilityLevel) ⇒ <code>Object</code>
  * [~disableExternalMembers(callback)](#disableExternalMembers) ⇒ <code>Object</code>
  * [~enableExternalMembers(callback)](#enableExternalMembers) ⇒ <code>Object</code>
  * [~setGoogleAppsVersion(params)](#setGoogleAppsVersion) ⇒ <code>Object</code>
  * [~setVisibilityLevel(params)](#setVisibilityLevel) ⇒ <code>Object</code>
  * [~setWebsite(params)](#setWebsite) ⇒ <code>Object</code>
  * [~removeLogo(callback)](#removeLogo) ⇒ <code>Object</code>
  * [~removeMember(params)](#removeMember) ⇒ <code>Object</code>
  * [~removeAssociatedDomain(callback)](#removeAssociatedDomain) ⇒ <code>Object</code>

<a name="get"></a>
## get() ⇒ <code>Object</code>
Asynchronously retrieves a property value from Trello. If the property
hasn't yet been populated, or it is dirty, then a network call to Trello
is made. Otherwise, the property is returned from memory. An error will
be returned if the property doesn't exist or is not a gettable property.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the property value

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params.propName | <code>String</code> |  | the name of the property to retrieve |
| params.skipValidation | <code>Boolean</code> | <code>false</code> | (*optional*) if true, skips local validation of the property path ||  |  |  | (*optional*)  ||
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |

<a name="getId"></a>
## getId(callback) ⇒ <code>Object</code>
Gets the id of the Trello object.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the id

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete. This is optional, as a Promise is returned. |

<a name="set"></a>
## set(params) ⇒ <code>Object</code>
Sets the given property using the new values passed in. If a property name
is not included, then the object itself is set using the new values.

**Kind**: inner method
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

**Kind**: inner method
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
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the organization's [actions](action.md). This is an array of [action](action.md) objects.

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getBillableMemberCount"></a>
## getBillableMemberCount(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the number of billable members
in the organization

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getBoards"></a>
## getBoards(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the organization's [boards](board.md). This is an array of [board](board.md) objects.

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDescription"></a>
## getDescription(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the organization's description

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDescriptionData"></a>
## getDescriptionData(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the organization's description
data

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDisplayName"></a>
## getDisplayName(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the organization's display name

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getLogoHash"></a>
## getLogoHash(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to organization's logo's hash

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getMembers"></a>
## getMembers(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the organization's [members](member.md). This is an array of [member](member.md) objects.

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getInvitedMembers"></a>
## getInvitedMembers(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the [members](member.md) that are invited to the organization. This is an array of [member](member.md) objects.

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getMemberships"></a>
## getMemberships(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to organization's memberships

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getName"></a>
## getName(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the organization's name

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPowerUps"></a>
## getPowerUps(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the organization's powerUps

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPreferences"></a>
## getPreferences(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the organization-wide
preferences

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPremiumFeatures"></a>
## getPremiumFeatures(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the premium features accesible
to the organization

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getProducts"></a>
## getProducts(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the organization's products

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getUrl"></a>
## getUrl(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the url for the organization's
profile

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getWebsite"></a>
## getWebsite(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the organization's website

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setDescription"></a>
## setDescription(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.description | <code>String</code> | the organization's description |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setDisplayName"></a>
## setDisplayName(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.displayName | <code>String</code> | the organization's display name |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setMemberType"></a>
## setMemberType(params) ⇒ <code>Object</code>
Sets the member type for the given member. The member is added to the
organization if they weren't already in it.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.memberId | <code>String</code> | the id of the member to update |
| params.memberType | <code>String</code> | the type of member to set. Valid values are 'admin', 'normal', or 'observer'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addNonMember"></a>
## addNonMember(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params |  |  | the method parameters object |
| params.email | <code>String</code> |  | email address to invite |
| params.fullName | <code>String</code> |  | full name of invitee |
| params.memberType | <code>String</code> | <code>&#x27;normal&#x27;</code> | (*optional*) member type to assign to the user. Valid values are 'admin', 'normal', or 'observer'. |
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete |

<a name="activateMember"></a>
## activateMember(callback) ⇒ <code>Object</code>
Activates the member within the organization.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="deactivate"></a>
## deactivate(callback) ⇒ <code>Object</code>
Deactivates the member within the organization.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setName"></a>
## setName(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.name | <code>String</code> | the name of the organization. Must be at least three characters long and contain only lowercase letters, numbers, and underscores. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setAssociatedDomain"></a>
## setAssociatedDomain(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.domain | <code>String</code> | the Google Apps domain to link this organization to. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setOrgBoardVisibilityLevel"></a>
## setOrgBoardVisibilityLevel(params) ⇒ <code>Object</code>
Sets the visibility of organization-visibile boards owned by the
organization.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.visibilityLevel | <code>String</code> | the visibility level of the boards. Valid values are 'admin', 'none', or 'org'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setPrivateBoardVisibilityLevel"></a>
## setPrivateBoardVisibilityLevel(params) ⇒ <code>Object</code>
Sets the visibility of private-visibile boards owned by the organization.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.visibilityLevel | <code>String</code> | the visibility level of the boards. Valid values are 'admin', 'none', or 'org'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setPublicBoardVisibilityLevel"></a>
## setPublicBoardVisibilityLevel(params) ⇒ <code>Object</code>
Sets the visibility of public-visibile boards owned by the organization.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.visibilityLevel | <code>String</code> | the visibility level of the boards. Valid values are 'admin', 'none', or 'org'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="disableExternalMembers"></a>
## disableExternalMembers(callback) ⇒ <code>Object</code>
Disables external members for the organization.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="enableExternalMembers"></a>
## enableExternalMembers(callback) ⇒ <code>Object</code>
Enables external members for the organization.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setGoogleAppsVersion"></a>
## setGoogleAppsVersion(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.version | <code>Number</code> | the Google Apps version. Valid values are 1 or 2. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setVisibilityLevel"></a>
## setVisibilityLevel(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.visibilityLevel | <code>String</code> | the visibility level of the organization. Valid values are 'private' or 'public'. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setWebsite"></a>
## setWebsite(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.website | <code>String</code> | the organization's website |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeLogo"></a>
## removeLogo(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeMember"></a>
## removeMember(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.memberId | <code>String</code> | the member to remove. This can also be a username or organization name. |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeAssociatedDomain"></a>
## removeAssociatedDomain(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

### Map
* [Action](action.md)
* [Board](board.md)
* [Card](card.md)
* [Checklist](checklist.md)
* [Label](label.md)
* [List](list.md)
* [Member](member.md)
* [Notification](notification.md)
* [Token](token.md)
* [Webhook](webhook.md)
