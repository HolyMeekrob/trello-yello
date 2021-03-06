# Trello Yello
![Build status](https://travis-ci.org/HolyMeekrob/trello-yello.svg?branch=master)

## Introduction
**Trello Yello** is a high-level object-oriented wrapper for the Trello API. It greatly simplifies the process of interacting with the [Trello public API][api] and allows you to script nearly every action available through their API in an easy-to-learn, easy-to-use manner.

## Table of contents
- [What is Trello?](#what-is-trello)
- [Why use **Trello Yello**?](#why-use-trello-yello)
- [Installation](#installation)
- [Quirks](#quirks)
- [Getting Started](#getting-started)
- [Using **Trello Yello**](#using-trello-yello)
- [Retrieving data](#retrieving-data)
- [Setting data](#setting-data)
- [Deleting data](#deleting-data)
- [Querying trello](#querying-trello)
- [More examples](#more-examples)
- [Build your own query](#build-your-own-query)
- [What's up with the name?](#whats-up-with-the-name)
- [Contributing](#contributing)
- [Etc](#etc)
- [License](#license)
- [Full documentation][docs]

## What is Trello?
Trello is a free web application that helps with project organization, simple to-do lists, notetaking, etc. You can take a tour [here][tour].

## Why use Trello Yello?
While Trello's API provides a great deal of utility and power, it is a bit unwieldy to work with. A good deal of effort is spent building complex HTTP queries and parsing large JSON objects. **Trello Yello** handles all of that for you, and lets you work with objects and operations that map directly to the Trello elements that you're used to.

## Installation
```
npm install trello-yello
```

## Quirks
**Trello Yello** has several quirks that are worth mentioning.
- Most functions are asynchronous as they require network communication with the Trello API. These functions will return a [`Promise`][promises] and will also accept an optional callback function ([error-first][callbacks]).
- **Trello Yello** will be intelligent about making network connections, reducing them as much as it is able. But for any operation that *may* result in a network operation, the return type is still a `Promise`. It may just be a `Promise` that is resolved immediately.
- All objects returned by **Trello Yello** are frozen using `Object.freeze()` ([reference][object-freeze]). This keeps the API intact, prevents potential errors through inadvertent overrides, and makes communicating about **Trello Yello** with others less likely to lead to confusion. The idea was taken from Douglas Crockford's talk Javascript: The Better Parts ([video][crockford]).
- Because of the above, you will never `new` an object in **Trello Yello**.
- All **Trello Yello** functions take exactly zero or one parameters. If multiple values can be passed in, that parameter will be an object with arguments as its properties, including callbacks. Please refer to the [full documentation][docs] for details on all functions.

## Getting Started
**Trello Yello** requires both an application key and a user token. Here are instructions on how to get those:

1. You will need to generate your application key from Trello. You can do so [here][generate-key]. More information can be found from Trello [here][key-info].
2. You will also need a token from Trello. A token is tied to a user which may or may not be the same user as the application key. The application key simply gives you access to the API. The token gives you specific permissions to a user account. See the examples [here][token-info] and the documentation [here][token-docs].
3. Trello's full guide to getting started can be found [here][guide]

An example URL for getting a token that has all permissions and never expires (don't worry, you can delete it later from your settings or even through **Trello Yello**):
```
https://trello.com/1/authorize?key=YourKeyHere&name=Trello Yello&expiration=never&response_type=token&scope=read,write,account
```

## Using Trello Yello
Getting a reference to the module:
```javascript
var trello = require('trello-yello');
```
Now you will need to instantiate the trello service.
```javascript
var trelloService = trello({key: 'yourKey', token: 'yourToken'});
```
## Retrieving data
Great! Now you have the (Trello) world at your fingers. The first thing you need to do is get a Trello Object. For example, let's say you want to rename a Card and you know its id.
```javascript
trelloService.getCard(id).then(function (card) {
  card.setName({ name: 'newName' });
}).catch(function (err) {
  // handle err
});
```
A lot of the time you won't know the id. Let's say you want to retrieve a board that the user belongs to, but all you know is the name.
```javascript
var myBoard;
var myBoards;
trelloService.getCurrentUser().getBoards().then(function (boards) {
  myBoards = boards;
  // Return a Promise that resolves to an array of board names in order
  return Promise.all(boards.map(function (board) { return board.getName(); }))
}).then(function (boardNames) {
  var index = boardNames.indexOf('myBoardName');
  myBoard = myBoards[index];
  // Do something with myBoard
}).catch(function (err) {
  // handle err
});
```
From here you can make changes to the board, or access objects on the board such as cards, lists, labels, or the board's organization, and perform actions on those.

## Setting data
What if you want to change the name of your list?
```javascript
list.setName({ name: 'My new list name' });
```

## Deleting data
Maybe you have a webhook that you're not using anymore
```javascript
webhook.del();
```

Or you can delete properties on an object. Maybe you want to remove a label from a card.
```javascript
card.removeLabelByColor({ color: orange });
```

## Querying Trello
You can run searches on Trello easily.
```javascript
trelloService.search({query: 'taco'}).then(function (response) {
  console.log(response);
}).catch(function (err) {
  // handle err
});
```

## More examples
```javascript
// Setting the name of the green label for a board:
trelloService.getBoard(boardId).setLabelName({ color: 'green', name: 'new name'});

// Archiving all the cards in a list
trelloService.getList(listId).archiveAllCards();

// Adding a comment to a card
trelloService.getCard(cardId).addComment({ comment: 'The comment to add.' });

// Getting all of the user's unread notifications
var allNotifications;
var unreadNotifications;
trelloService.getCurrentUser().getNotifications().then(function (notifications) {
  allNotifications = notifications;
  return Promise.all(notifications.map(function (n) {
		return n.isUnread();
	}));
}).then(function (unreadArray) {
  unreadNotifications = allNotifications.filter(function (notification, index) {
    return unreadArray[index];
  });
  // Do something with unreadNotifications
}).catch(function (err) {
  // handle err
});

// Deleting a checklist item
trelloService.getChecklist(checklistId).removeChecklistItem({ checklistItemId: 'id' });

// Deleting a label
trelloService.getLabel(labelId).del();
```

## Build your own query
Most Trello API operations have specific functions associated with the type of object being operated on. However, for experienced users, you can build your own Trello query.
```javascript
// Performing a GET operation on the Trello API. Trello object is an object such as a card or a list
var property = trelloObject.get({ propName: 'propertyName' });

// Performing a PUT or POST operation on the Trello API
trelloObject.set({
  propName: 'query/path/to/propertyName',
  values: { valueType: newValue },
  preferNonIdempotence: false // Optional. If true, and if Trello supports a POST and a PUT for the given property, Trello Yello will perform a POST. If there's only one type of update operation, then this value is ignored
});

// Here's a specific example for updating an organization's description
organization.set({ propName: 'desc', values: { value: 'new description' } });

// Update a member's saved search
member.set({ propName: 'savedSearches/' + savedSearchId, values: { name: 'newName', query: 'newQuery', position: 'newPosition' }});
```
**Trello Yello** will check internally if the query you have is a valid API call. This prevents creating a network connection when the application knows it will fail. However, there may be times where **Trello Yello** is either out of date, or doesn't support the specific operation you are trying to perform. In this case, set the parameters property `skipValidation` to `true`. The above example would thus become:
```javascript
member.set({ propName: 'savedSearches/' + savedSearchId , values: { name: 'newName', query: 'newQuery', position: 'newPosition' }, skipValidation: true });
```

## What's up with the name?
Well, aside from the obvious rhyme, and the reference to the beverage [Mello Yello][mello-yello], using Trello Yello should be refreshing. Like an ice cold citrus drink on a hot summer day. I don't know. It's a name. What more do you want from me?

## Contributing
Anyone is welcome to contribute! Please follow the [recommended GitHub steps][contribute].

## Etc
- Code: [https://github.com/HolyMeekrob/trello-yello/][code]
- npm: [https://www.npmjs.com/package/trello-yello/][npm]
- Trello: [https://www.trello.com][trello]

## License
Released under the [MIT][mit-license] license.

[docs]: https://github.com/HolyMeekrob/trello-yello/blob/master/docs/trello.md
[issue]: https://github.com/HolyMeekrob/trello-yello/issues
[api]: https://trello.com/docs/api/index.html
[tour]: https://trello.com/tour
[generate-key]: https://trello.com/1/appKey/generate
[key-info]: https://trello.com/docs/gettingstarted/index.html#application-key
[token-info]: https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user
[token-docs]: https://trello.com/docs/gettingstarted/authorize.html
[callbacks]: http://thenodeway.io/posts/understanding-error-first-callbacks/
[guide]: https://trello.com/docs/gettingstarted/index.html
[promises]: https://promisesaplus.com/
[mello-yello]: http://www.melloyello.com/
[mit-license]: http://opensource.org/licenses/MIT
[object-freeze]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
[crockford]: https://www.youtube.com/watch?v=PSGEjv3Tqo0
[code]: https://github.com/HolyMeekrob/trello-yello/
[npm]: https://www.npmjs.com/package/trello-yello/
[trello]: https://www.trello.com
[contribute]: https://guides.github.com/activities/contributing-to-open-source/#contributing
