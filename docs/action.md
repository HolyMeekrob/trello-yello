[Map](#map)

# Class: Action

* [trello-yello](trello.md)
  * [~get()](#get) ⇒ <code>Object</code>
  * [~getId(callback)](#getId) ⇒ <code>Object</code>
  * [~set(params)](#set) ⇒ <code>Object</code>
  * [~del(params)](#del) ⇒ <code>Object</code>
  * [~getBoard(callback)](#getBoard) ⇒ <code>Object</code>
  * [~getCard(callback)](#getCard) ⇒ <code>Object</code>
  * [~getData(callback)](#getData) ⇒ <code>Object</code>
  * [~getDate(callback)](#getDate) ⇒ <code>Object</code>
  * [~getDisplay(callback)](#getDisplay) ⇒ <code>Object</code>
  * [~getEntities(callback)](#getEntities) ⇒ <code>Object</code>
  * [~getList(callback)](#getList) ⇒ <code>Object</code>
  * [~getMember(callback)](#getMember) ⇒ <code>Object</code>
  * [~getCreator(callback)](#getCreator) ⇒ <code>Object</code>
  * [~getOrganization(callback)](#getOrganization) ⇒ <code>Object</code>
  * [~getType(callback)](#getType) ⇒ <code>Object</code>
  * [~setText(params)](#setText) ⇒ <code>Object</code>

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

<a name="getBoard"></a>
## getBoard(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the action's board. This is a
board object.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getCard"></a>
## getCard(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the action's card. This is a
card object.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getData"></a>
## getData(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to action data  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDate"></a>
## getDate(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to action's date  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDisplay"></a>
## getDisplay(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to action's display values  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getEntities"></a>
## getEntities(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to action's entities  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getList"></a>
## getList(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the action's list. This is a
list object.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getMember"></a>
## getMember(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to action's member. This is a
member object.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getCreator"></a>
## getCreator(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member who created the
action. This is a member object.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getOrganization"></a>
## getOrganization(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to action's organization. This is
an organization object.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getType"></a>
## getType(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to action's type  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="setText"></a>
## setText(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.text | <code>String</code> | the action text |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

### Map
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
