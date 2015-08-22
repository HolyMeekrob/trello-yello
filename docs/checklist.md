[Map](#map)

# Class: Checklist

* [trello-yello](trello.md)
  * [~get()](#get) ⇒ <code>Object</code>
  * [~getId(callback)](#getId) ⇒ <code>Object</code>
  * [~set(params)](#set) ⇒ <code>Object</code>
  * [~del(params)](#del) ⇒ <code>Object</code>
  * [~getBoard(callback)](#getBoard) ⇒ <code>Object</code>
  * [~getCard(callback)](#getCard) ⇒ <code>Object</code>
  * [~getCheckItems(callback)](#getCheckItems) ⇒ <code>Object</code>
  * [~getName(callback)](#getName) ⇒ <code>Object</code>
  * [~getPosition(callback)](#getPosition) ⇒ <code>Object</code>
  * [~setCard(params)](#setCard) ⇒ <code>Object</code>
  * [~setName(params)](#setName) ⇒ <code>Object</code>
  * [~setPosition(params)](#setPosition) ⇒ <code>Object</code>
  * [~addCheckItem(params)](#addCheckItem) ⇒ <code>Object</code>
  * [~removeChecklistItem(params)](#removeChecklistItem) ⇒ <code>Object</code>

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

<a name="getBoard"></a>
## getBoard(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a [board](board.md) object representing the checklist's [board](board.md)

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getCard"></a>
## getCard(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a an array of [card](card.md) objects
representing the checklist's [cards](card.md)

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getCheckItems"></a>
## getCheckItems(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to an array of checklist items

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getName"></a>
## getName(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the name of the checklist

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPosition"></a>
## getPosition(callback) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the checklist's position

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setCard"></a>
## setCard(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.cardId | <code>String</code> | the id of the card to move the checklist to |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setName"></a>
## setName(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.name | <code>String</code> | the name of the checklist |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setPosition"></a>
## setPosition(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.position | <code>Number</code> | the checklist's position |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addCheckItem"></a>
## addCheckItem(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to the id of the new checklist
item

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| params |  |  | the method parameters object |
| params.name | <code>String</code> |  | the name of the checklist item |
| params.position | <code>String</code> &#124; <code>Number</code> | <code>&#x27;bottom&#x27;</code> | (*optional*) the position of the checklist item. Valid values are 'top', 'bottom', or a positive number. |
| params.checked | <code>Boolean</code> | <code>false</code> | (*optional*) checked whether or not the checklist item should be checked |
| params.callback | <code>function</code> |  | (*optional*) the callback function once the operation is complete |

<a name="removeChecklistItem"></a>
## removeChecklistItem(params) ⇒ <code>Object</code>
**Kind**: inner method
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.checklistItemId | <code>String</code> | the id of the checklist item to delete |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

### Map
* [Action](action.md)
* [Board](board.md)
* [Card](card.md)
* [Label](label.md)
* [List](list.md)
* [Member](member.md)
* [Notification](notification.md)
* [Organization](organization.md)
* [Token](token.md)
* [Webhook](webhook.md)
