pragma solidity ^0.4.23;

contract Voter {

  mapping(address => bool) registered;


	function register(address voters)public {
     registered[voters] = true;

	}

	function isVoting(address voters)view public returns (bool) {

		return registered[voters];
	}

}
