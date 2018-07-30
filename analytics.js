var Web3 = require('web3');
var abi = require('./abi.js');

var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/v3/620e96cb5db6446dbffda63c211b0768'));

var contractAddress = '0x6090A6e47849629b7245Dfa1Ca21D94cd15878Ef';

//Query BidRevealed events of the latest block
export const getPastEvents = function() {

	// Define the contract ABI
	var contractABI = abi.getABI();
	// Set the contract ABI and Address
	var contract = new web3.eth.Contract(contractABI, contractAddress);

	//Get all contract events
	return contract.getPastEvents('BidRevealed', {
	    fromBlock: 'latest',
	    toBlock: 'latest'
	}, function(error, events){
		return events;
	});
};

//Query BidRevealed past events specifing starting 'from' block. [from, 'latest']
export const getPastEventsWithTimestamps = function(from) {
	console.log("getPastEventsWithTimestamps from block " + from);
	// Define the contract ABI
	var contractABI = abi.getABI();
	// Set the contract ABI and Address
	var contract = new web3.eth.Contract(contractABI, contractAddress);

	//Get all contract events
	return contract.getPastEvents('BidRevealed', {
	    fromBlock: from,
	    toBlock: 'latest'
	}, function(error, events){
		console.log("error " + error);
		return events;
	});
};



export const getLastBlock = function() {
  return web3.eth.getBlock('latest', true);
};

//get latest block number
export const getLastBlockNumber = function() {
  return web3.eth.getBlockNumber();
};

//get latest block without transactions
function getBlock(number) {
    return web3.eth.getBlock(number, false);
}


export function findFromBlock(current, from) {
    return getBlock(current).then(function(result) {
    	console.log("findFromBlock current : "+ current + " current.timestamp : " + result.timestamp + " searching.timestamp " + from);
        if (result.timestamp >= from) {
             current = current - 5000;
             return findFromBlock(current, from);
        } else {
             return findFromBlockBinarySearch(current + 5000, current, from);
        }
    });
}


function findFromBlockBinarySearch(start, end, from) {
	if(start-end < 2) {
		return end;
	}
	var current = Math.floor((start + end)/2);
    return getBlock(current).then(function(result) {
    	console.log("findFromBlockBinarySearch start : " + start + " end : " + end + " current : " + current + " current.timestamp : " + result.timestamp + " " + from);
        if (result.timestamp <= from) {
             return findFromBlockBinarySearch(start, current, from);
        } else {
             return findFromBlockBinarySearch(current, end, from);
        }
    });
}