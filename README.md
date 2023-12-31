# Termii Nodejs Client

![npm (scoped)](https://img.shields.io/npm/v/termii-nodejs-client?color=%23FF7B37&style=flat-square) ![npm](https://img.shields.io/npm/dm/termii-nodejs-client?style=flat-square)

Nodejs SDK for [Termii](https://termii.com) messaging platform written in typescript

## Table of content

- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Available Services exposed by the SDK](#available-services-exposed-by-the-sdk)
  - [Sender ID API](#sender-id-api)
    - [Fetch Sender ID](#fetch-sender-id)
    - [Create Sender ID](#create-sender-id)
  - [Messaging API](#messaging-api)
    - [Send Message](#send-message)
    - [Send Bulk Message](#send-bulk-message)
  - [Number API](#number-api)
    - [Send Message with Number](#send-message-with-number)
  - [Templates API](#templates-api)
    - [Device Template (Send Message with Template)](#device-template-send-message-with-template)
  - [Campaign API](#campaign-api)
    - [Phonebooks](#phonebooks)
      - [Fetch Phonebooks](#fetch-phonebooks)
      - [Create Phonebook](#create-phonebook)
      - [Update Phonebook](#update-phonebook)
      - [Delete Phonebook](#delete-phonebook)
    - [Contacts](#contacts)
      - [Fetch contacts by phonebook ID](#fetch-contacts-by-phonebook-id)
      - [Add single contact to phonebook](#add-single-contact-to-phonebook)
      - [Delete contact](#delete-contact)
    - [Campaign](#campaign)
      - [Fetch campaigns](#fetch-campaigns)
      - [Fetch campaign history](#fetch-campaign-history)
      - [Send a campaign](#send-a-campaign)
  - [Token API](#token-api)
    - [Send Token](#send-token)
    - [Voice Token](#voice-token)
    - [Voice Call](#voice-call)
    - [Email Token](#email-token)
    - [Verify Token](#verify-token)
    - [In App Token](#in-app-token)
  - [Insights API](#insights-api)
    - [Balance](#balance)
    - [Search](#search)
    - [Status](#status)
    - [History](#history)
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

// Instantiate the Termii class
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
  to: "23490126727",
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
  to: ["23490126727", "23490126728","23490126729"],
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
  to: "23490126727",
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
  phone_number: '23490126727',
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

Find more details about the parameters and response for the above method [here](https://developers.termii.com/templates#device-template)

## Campaign API

### Phonebooks

Create, view & manage phonebooks using these APIs. Each phonebook can be identified by a unique ID, which makes it easier to edit or delete a phonebook.

#### Fetch Phonebooks

```ts
// import the phonebook interfaces from the sdk
import type { IFetchPhonebooksResponse } from 'termii-nodejs-client';

const response = await termii.message.fetchPhonebooks()

// to fetch another page - pass the page number to the method
const response = await termii.message.fetchPhonebooks(2)
console.log(response) // IFetchPhonebooksResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/phonebook#fetch-phonebooks)

#### Create Phonebook

```ts
// import the phonebook interfaces from the sdk
import type { IPhonebookResponse, IPhonebook, } from 'termii-nodejs-client';

const payload: IPhonebook = {
  phonebook_name: 'Test',
  description: 'Phonebook for test',
}

const response = await termii.message.createPhonebook(payload)
console.log(response) // IPhonebookResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/phonebook#create--a-phonebook)

#### Update Phonebook

```ts
// import the phonebook interfaces from the sdk
import type { IPhonebookResponse, IPhonebook, } from 'termii-nodejs-client';

const payload: IPhonebook = {
  phonebook_name: 'Update testTest',
  description: 'Updated Phonebook for test',
}

const response = await termii.message.updatePhonebook('phonebook_id', payload)
console.log(response) // IPhonebookResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/phonebook#update-phonebook)

#### Delete Phonebook

```ts
// import the phonebook interfaces from the sdk
import type { IPhonebookResponse } from 'termii-nodejs-client';

const response = await termii.message.deletePhonebook('phonebook_id')
console.log(response) // IPhonebookResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/phonebook#delete-phonebook)

### Contacts

Contacts API allows you manage (i.e. edit, update, & delete) contacts in your phonebook.

#### Fetch contacts by phonebook ID

```ts
// import the contact interfaces from the sdk
import type { IFetchContactsResponse } from 'termii-nodejs-client';

const response = await termii.message.fetchContacts('phonebook_id')

// to fetch another page - pass the page number to the method after the phonebook ID
const response = await termii.message.fetchContacts('phonebook_id', 2)
console.log(response) // IFetchContactsResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/contacts#fetch-contacts-by-phonebook-id)

#### Add single contact to phonebook

```ts
// import the contact interfaces from the sdk
import type { ICreateContact, ICreateContactResponse } from 'termii-nodejs-client';

const payload: ICreateContact = {
  phone_number: '812369234901267276237',
  email_address: 'test@gmail.com',
  first_name: 'test',
  last_name: 'contact',
  company: 'Termii',
  country_code: '234',
}

const response = await termii.message.createContact('phonebook_id', payload)
console.log(response) // ICreateContactResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/contacts#add-single-contacts-to-phonebook)

#### Delete contact

```ts
// import the contact interfaces from the sdk
import type { IDeleteContactResponse } from 'termii-nodejs-client';

const response = await termii.message.deleteContact('contact_id')
console.log(response) // IDeleteContactResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/contacts#delete-phonebook)

### Campaign

Using the campaign APIs, you can view, manage and send a campaign to a phonebook.

#### Fetch campaigns

```ts
// import the campaign interfaces from the sdk
import type { IFetchCampaignsResponse } from 'termii-nodejs-client';

const response = await termii.message.fetchCampaigns()

// to fetch another page - pass the page number to the method
const response = await termii.message.fetchCampaigns(2)
console.log(response) // IFetchCampaignsResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/campaign#fetch-campaigns)

#### Fetch campaign history

```ts
// import the campaign interfaces from the sdk
import type { fetchCampaignHistoryResponseData } from 'termii-nodejs-client';

const response = await termii.message.fetchCampaigns('campaign_id')

// to fetch another page - pass the page number to the method after campaign ID
const response = await termii.message.fetchCampaigns('campaign_id', 2)
console.log(response) // fetchCampaignHistoryResponseData
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/campaign#fetch-campaign-history)

#### Send a campaign

```ts
// import the campaign interfaces from the sdk
import type { ISendCampaign, ISendCampaignResponse } from 'termii-nodejs-client';

const payload: ISendCampaign = {
  api_key: "Your API KEY",
  country_code: "234",
  sender_id: "Termii",
  message: "Welcome to Termii.",
  channel: "generic",
  message_type: "Plain",
  phonebook_id: "2d9f4a02-85b8-45e5-9f5b-30f93ef472e2",
  delimiter: ",",
  remove_duplicate: "yes",
  campaign_type: "personalized",
  schedule_time: "30-06-2021 6:00",
  schedule_sms_status: "scheduled"
}

const response = await termii.message.sendCampaign(payload)

console.log(response) // ISendCampaignResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/campaign#send-a-campaign)

### Token API

The Token API allows businesses generate, send and verify one-time-passwords.

#### Send Token

```ts
// import the token interfaces from the sdk
import type { ISendToken, ISendTokenResponse } from 'termii-nodejs-client';

const payload: ISendToken = {
  message_type: 'NUMERIC',
  to: '23490126727',
  from: 'Acme',
  channel: 'generic',
  pin_attempts: 3,
  pin_time_to_live: 1,
  pin_length: 4,
  pin_placeholder: '< 1234 >',
  message_text: 'Your verification code is 1234',
}

const response = await termii.token.sendToken(payload)

console.log(response) // ISendTokenResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/send-token)

#### Voice Token

```ts
// import the token interfaces from the sdk
import type { ISendVoiceToken, ISendVoiceTokenResponse } from 'termii-nodejs-client';

const payload: ISendVoiceToken = {
  phone_number: '23490126727',
  pin_attempts: 3,
  pin_time_to_live: 1,
  pin_length: 4,
}

const response = await termii.token.sendVoiceToken(payload)

console.log(response) // ISendVoiceTokenResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/voice-token)

#### Voice Call

```ts
// import the token interfaces from the sdk
import type { IMakeVoiceCall, IMakeVoiceCallResponse } from 'termii-nodejs-client';

const payload: IMakeVoiceCall = {
  phone_number: '23490126727',
  code: 12345
}

const response = await termii.token.makeVoiceCall(payload)

console.log(response) // IMakeVoiceCallResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/voice-call)

#### Email Token

```ts
// import the token interfaces from the sdk
import type { sendEmailToken, ISendEmailTokenResponse } from 'termii-nodejs-client';

const payload: sendEmailToken = {
  email_address: 'test@test.com',
  code: '33443',
  email_configuration_id: 'fad4f438-655d-399a-a50a-b93e11b41323'
}

const response = await termii.token.sendEmailToken(payload)

console.log(response) // ISendEmailTokenResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/email-token)

#### Verify Token

```ts
// import the token interfaces from the sdk
import type { IVerifyToken, IVerifyTokenResponse } from 'termii-nodejs-client';

const payload: IVerifyToken = {
  pin_id: 'c8dcd048-5e7f-4347-8c89-4470c3af0b',
  pin: '15017',
}

const response = await termii.token.verifyToken(payload)

console.log(response) // IVerifyTokenResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/verify-token)

#### In App Token

```ts
// import the token interfaces from the sdk
import type { IInAppToken, IInAppTokenResponse } from 'termii-nodejs-client';

const payload: IInAppToken = {
  pin_type: 'NUMERIC',
  phone_number: '2348109477743',
  pin_attempts: 3,
  pin_time_to_live: 0,
  pin_length: 4,
}

const response = await termii.token.inAppToken(payload)

console.log(response) // IInAppTokenResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/in-app-token)

### Insights API

#### Balance

```ts
// import the insights interfaces from the sdk
import type { IGetBalanceResponse } from 'termii-nodejs-client';

const response = await termii.insights.getBalance()

console.log(response) // IGetBalanceResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/balance)

#### Search

```ts
// import the insights interfaces from the sdk
import type { ISearchPayload, ISearchResponse } from 'termii-nodejs-client';

const payload: ISearchPayload = {
  phone_number: '2348109477743',
}

const response = await termii.insights.search(payload)

console.log(response) // ISearchResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/search)

#### Status

```ts
// import the insights interfaces from the sdk
import type { IStatusPayload, IStatusResponse } from 'termii-nodejs-client';

const payload: IStatusPayload = {
  phone_number: '2348109477743',
  country_code: "NG"
}

const response = await termii.insights.getStatus(payload)

console.log(response) // IStatusResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/status)

#### History

```ts
// import the insights interfaces from the sdk
import type { IHistoryPayload, IHistoryResponse } from 'termii-nodejs-client';

// to get the history of the messages
const response = await termii.insights.getHistory()

// to get the history of a single message
const payload: IHistoryPayload = {
  message_id: '5508751839629937023',
}
const response = await termii.insights.getHistory(payload)

console.log(response) // IHistoryResponse
```

Find more details about the parameters and response for the above method [here](https://developers.termii.com/history)

## License

[MIT](https://github.com/peoray/termii-nodejs-client/blob/main/LICENSE)

[Back to Top](#table-of-content)