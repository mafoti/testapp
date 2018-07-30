# Query Ethereum Name Service Contract Events
A NodeJs project Query Ethereum Name Service Contract Events.

## Get Started

1) Clone app from [repository](https://github.com/mafoti/testapp):
```
$ git clone https://github.com/mafoti/testapp.git
```
2) cd to created directory and install packages
```
$ cd testapp
$ npm install
```

3) Start NodeJs Server
```
$ npm start
```

4) Use the web interface at [http://localhost:3000](http://localhost:3000)

5) Select a date to query 'BidRevealed' events since that date.

6) Click Search

7) Retrieved events will be listed on the page

## Settings

Web3 provider and contract address are set in analytics.js file.

The default web3 provider is set to an infura app.
```
web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/v3/620e96cb5db6446dbffda63c211b0768'));
```


