[Map](#map)

# Class: Webhook

* [trello-yello](trello.md)
  * [~get()](#get) ⇒ <code>Object</code>
  * [~getId(callback)](#getId) ⇒ <code>Object</code>
  * [~set(params)](#set) ⇒ <code>Object</code>
  * [~del(params)](#del) ⇒ <code>Object</code>
  * [~isActive(callback)](#isActive) ⇒ <code>Object</code>
  * [~getCallbackUrl(callback)](#getCallbackUrl) ⇒ <code>Object</code>
  * [~getDescription(callback)](#getDescription) ⇒ <code>Object</code>
  * [~getWatchId(callback)](#getWatchId) ⇒ <code>Object</code>
  * [~activate(callback)](#activate) ⇒ <code>Object</code>
  * [~deactivate(callback)](#deactivate) ⇒ <code>Object</code>
  * [~setCallbackUrl(params)](#setCallbackUrl) ⇒ <code>Object</code>
  * [~setDescription(params)](#setDescription) ⇒ <code>Object</code>
  * [~setWatchId(params)](#setWatchId) ⇒ <code>Object</code>

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

<a name="isActive"></a>
## isActive(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to true if the webhook is active

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getCallbackUrl"></a>
## getCallbackUrl(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the webhook's callback URL

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDescription"></a>
## getDescription(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the webhook's description

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getWatchId"></a>
## getWatchId(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the id of the model that the
webhook is watching

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="activate"></a>
## activate(callback) ⇒ <code>Object</code>
Activates the webhook.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="deactivate"></a>
## deactivate(callback) ⇒ <code>Object</code>
Deactivates the webhook.

**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setCallbackUrl"></a>
## setCallbackUrl(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.callbackUrl | <code>String</code> | the callback URL. Must be a valid URL that is reachable with a HEAD request |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setDescription"></a>
## setDescription(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.description | <code>String</code> | the webhook's description |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setWatchId"></a>
## setWatchId(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.watchId | <code>String</code> | the id of the model to watch |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

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
