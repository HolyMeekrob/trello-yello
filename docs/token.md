[Map](#map)

# Class: Token

* [trello-yello](trello.md)
  * [~get()](#get) ⇒ <code>Object</code>
  * [~getId(callback)](#getId) ⇒ <code>Object</code>
  * [~set(params)](#set) ⇒ <code>Object</code>
  * [~del(params)](#del) ⇒ <code>Object</code>
  * [~getDateCreated(callback)](#getDateCreated) ⇒ <code>Object</code>
  * [~getDateExpires(callback)](#getDateExpires) ⇒ <code>Object</code>
  * [~getIdentifier(callback)](#getIdentifier) ⇒ <code>Object</code>
  * [~getMember(callback)](#getMember) ⇒ <code>Object</code>
  * [~getPermissions(callback)](#getPermissions) ⇒ <code>Object</code>
  * [~getWebhooks(callback)](#getWebhooks) ⇒ <code>Object</code>
  * [~addWebhook(params)](#addWebhook) ⇒ <code>Object</code>
  * [~removeWebhook(params)](#removeWebhook) ⇒ <code>Object</code>

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

<a name="getDateCreated"></a>
## getDateCreated(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the timestamp that the token
was created  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getDateExpires"></a>
## getDateExpires(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the timestamp that the token
expires  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getIdentifier"></a>
## getIdentifier(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the name of the app that
requested the token  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getMember"></a>
## getMember(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the member that the token
belongs to. This is a member object.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getPermissions"></a>
## getPermissions(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the token's permissions  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="getWebhooks"></a>
## getWebhooks(callback) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the webhooks associated with
this token. This is an array of webhook objects.  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="addWebhook"></a>
## addWebhook(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to the new webhook object  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.watchId | <code>String</code> | the id of the model to watch |
| params.callbackUrl | <code>String</code> | the url of the webhook's callback |
| params.description | <code>String</code> | (*optional*) the description of the webhook |
| params.callback | <code>function</code> | (*optional*) the callback function once the operation is complete |

<a name="removeWebhook"></a>
## removeWebhook(params) ⇒ <code>Object</code>
**Kind**: global function  
**Returns**: <code>Object</code> - a Promise that resolves to a truthy value if successful  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | the method parameters object |
| params.webhookId | <code>String</code> | the webhook to delete |
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
* [Webhook](webhook.md)
