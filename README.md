# Termii Node Client

![npm (scoped)](https://img.shields.io/npm/v/termii-nodejs-client?color=%23FF7B37&style=flat-square) ![npm](https://img.shields.io/npm/dm/termii-nodejs-client?style=flat-square) ![Twitter Follow](https://img.shields.io/twitter/follow/peoray_?style=social)

Nodejs SDK for [Termii](https://termii.com) messaging platform written in typescript

## Table of content

- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Available Services exposed by the SDK](#available-services-exposed-by-the-sdk)
  - [Sender ID](#sender-id)
    - [Fetch Sender ID](#fetch-sender-id)
    - [Create Sender ID](#create-sender-id)
  - [Messaging](#messaging)
    - [Send Message](#send-message)
    - [Send Bulk Message](#send-bulk-message)
  - [Number](#number)
    - [Send Message with Number](#send-message-with-number)
- [License](#license)

## Prerequisites

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
const { Termii } = require('termii-nodejs-client')

const termii = new Termii('YOUR_API_KEY');
```

Instantiate the Termii class

```ts
const termii = new Termii('YOUR_API_KEY');
```

> **Warning**
Be sure to keep your API Credentials securely in environment variables.

## Available Services exposed by the SDK

### Sender ID API

A Sender ID is the name or number that identifies the sender of an SMS message.

#### Fetch Sender ID

```ts
// import the sender id response interface from the sdk
import { type ISenderIDResponse } from 'termii-nodejs-client';

// returns the first 15 sender ids
const senderIds = await termii.message.fetchSenderIDs()

// to get the next page of sender ids 
const senderIds = await termii.message.fetchSenderIDs(2)
console.log(senderIds) // ISenderIDResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/sender-id#fetch-sender-id)

#### Create Sender ID

```ts
// import the request sender id interfaces from the sdk
import type { IRequestSenderID, IRequestSenderIDResponse } from 'termii-nodejs-client';

const payload: IRequestSenderID = {
  sender_id: 'acme',
  usecase: 'Testing! Working!! This is it!!!',
  company: 'Metalabs',
}

const response = await termii.message.requestSenderID(payload)
console.log(response) // IRequestSenderIDResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/sender-id#request-sender-id)

### Messaging API

This API allows businesses send text messages to their customers across different messaging channels.

#### Send Message

```ts
// import the message interfaces from the sdk
import type { ISendMessage, ISendMessageResponse } from 'termii-nodejs-client';

const payload: ISendMessage = {
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

const response = await termii.message.sendMessage(payload)
console.log(response) // ISendMessageResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/messaging-api#send-message)

#### Send Bulk Message

```ts
// import the message interfaces from the sdk
import type { ISendBulkMessage, ISendBulkMessageResponse } from 'termii-nodejs-client';

const payload: ISendBulkMessage = {
  to: ["23490555546", "23423490126999","23490555546"],
  from: "talert",
  sms: "Hi there, testing Termii",
  type: "plain",
  channel: "generic"
}

const response = await termii.message.sendBulkMessage(payload)
console.log(response) // ISendBulkMessageResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/messaging-api#send-bulk-message)

### Number API

This allows businesses send messages to customers using Termii's auto-generated messaging numbers that adapt to customers location.

#### Send Message with Number

```ts
// import the number interfaces from the sdk
import type { ISendMessageWithNumber, ISendMessageWithNumberResponse } from 'termii-nodejs-client';

const payload: ISendMessage = {
  to: "23490555546",
  sms: "Hi there, testing Termii"
}

const response = await termii.message.sendMessageWithNumber(payload)
console.log(response) // ISendMessageWithNumberResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/number#send-message)

### Templates API

This helps businesses set a template for the one-time-passwords (pins) sent to their customers via whatsapp or sms.

#### Device Template (Send Message with Template)

```ts
// import the template interfaces from the sdk
import type { IDeviceTemplate, IDeviceTemplateResponse } from 'termii-nodejs-client';

const payload: IDeviceTemplate = {
  phone_number: '+1234567890',
  device_id: 'device123',
  template_id: 'template456',
  data: {
    product_name: 'Dummy Product',
    otp: 123456,
    expiry_time: '2023-11-16T12:00:00Z',
  },
}

const response = await termii.message.sendMessageWithTemplate(payload)
console.log(response) // IDeviceTemplateResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/number#send-message)

## License

[MIT](https://github.com/peoray/termii-nodejs-client/blob/main/LICENSE)
