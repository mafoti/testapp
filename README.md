# Query Ethereum Name Service Contract Events
A NodeJs project Query Ethereum Name Service Contract Events.

## Get Started

1) Get slockit.tar.gz file

2) Extract contents

3) cd to created directory and install packages
$ cd slockit
$ npm install

4) Start NodeJs Server
$ npm start

5) Use the web interface at [http://localhost:3000](http://localhost:3000)

6) Select a date to query 'BidRevealed' events since that date.

7) Click Search

8) Retrieved events will be listed on the page

## Settings

Web3 provider and contract address are set in analytics.js file.

The default web3 provider is set to an infura app.
```
web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/v3/620e96cb5db6446dbffda63c211b0768'));
```


