# Termii Node SDK

![npm (scoped)](https://img.shields.io/npm/v/termii-nodejs-client?color=%23FF7B37&style=flat-square) ![npm](https://img.shields.io/npm/dm/termii-nodejs-client?style=flat-square) ![Twitter Follow](https://img.shields.io/twitter/follow/peoray_?style=social)

Nodejs SDK for [Termii](https://termii.com) messaging platform written in typescript

## Table of content

- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [License](#license)

## Prerequisite

Node v16 and higher is required. To make sure you have them available on your machine, try running the following command.

```sh
 node -v
```
## Getting Started

To get started with this SDK, create an account on [Termii](https://accounts.termii.com/#/register) if you haven't already.
You can then retrieve your API keys from your Termii dashboard.

## Installation

This SDK can be installed with npm or yarn or pnpm.

```sh
# using npm
npm install termii-nodejs-client
# using yarn
yarn install termii-nodejs-client
# using pnpm
pnpm add termii-nodejs-client
```

## Usage

Import and Initialize the library

```ts
// use modules
import { Termii } from 'termii-nodejs-client';
// use cjs
const {Termii} = require('termii-nodejs-client')

const termii = new Termii('YOUR_API_KEY');
```

Instantiate the Termii class

```ts
const termii = new Termii('YOUR_API_KEY');
```

> **Warning**
Be sure to keep your API Credentials securely in environment variables.

## Documentation

Available Services exposed by the SDK

### Sender ID

A Sender ID is the name or number that identifies the sender of an SMS message.

#### Fetch Sender ID

```ts
// returns the first 15 sender ids
const senderIds = await termii.message.fetchSenderIDs()

// to get the next page of sender ids 
const senderIds = await termii.message.fetchSenderIDs(2)
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/sender-id#fetch-sender-id)


#### Create Sender ID

```ts
// import the request sender id interface from the sdk
import { type IRequestSenderID } from 'termii-nodejs-client';

const message: IRequestSenderID = {
    sender_id: 'acme',
    usecase: 'Testing! Working!! This is it!!!',
    company: 'Metalabs',
}

const senderIds = await termii.message.requestSenderID(payload)
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/sender-id#request-sender-id)

### Message

This API allows businesses send text messages to their customers across different messaging channels. 

#### Send message

```ts
// import the request sender id interface from the sdk
import { type ISendMessage } from 'termii-nodejs-client';

const message: ISendMessage = {
     to: "2347880234567",
     from: "talert",
     sms: "Hi there, testing Termii",
     type: "plain",
     channel: "generic",
     api_key: "Your API Key",
     media: {
      url: "https://media.example.com/file",
      caption: "your media file"
  }    
}

const senderIds = await termii.message.sendMessage(payload)
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/messaging-api#send-message)

#### Send Bulk message

```ts
// import the request sender id interface from the sdk
import { type ISendMessage } from 'termii-nodejs-client';

const message: ISendMessage = {
     to: ["23490555546", "23423490126999","23490555546"],
     from: "talert",
     sms: "Hi there, testing Termii",
     type: "plain",
     channel: "generic"
}

const senderIds = await termii.message.sendBulkMessage(payload)
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/messaging-api#send-bulk-message)

## License

[MIT](https://github.com/peoray/termii-nodejs-client/blob/main/LICENSE)