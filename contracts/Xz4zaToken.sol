pragma solidity >=0.5.0 <0.6.0;

import './erc20zeppelin.sol';
import './utils/Safemath.sol';
import './Ownable.sol';


contract Xz4zaToken is ERC20, Ownable {
	using Safemath for uint256;


    uint256 public tokenPriceForEth;

    constructor(uint256 _initTokenPriceForEth, uint256 _initTotalSupply) ERC20('Xz4zaToken', 'XZT') {
        _totalSupply = _initTotalSupply;
        tokenPriceForEth = _initTokenPriceForEth;
        _balances[this] = _initTotalSupply / 100 * 90; // 90% on the balance of the contract
        _balances[owner()] = _initTotalSupply - _balances[this]; // on the balance of the owner contract
        emit Transfer(this, owner(), _balances[owner()]);
    }

    function Sale() payable public returns(bool) {
    	reqire(_balances[this] > 0);
	    	uint256 amountInToken = tokenPriceForEth * msg.value / 1000000000000000000;
	    	if (amountInTokens > _balances[this]) {
	    		amountInTokens = _balances[this];
	    		uint256 returnChangeInWei = amountInTokens * 1000000000000000000 / 1000;
	    		msg.sender.transfer(msg.value - returnChangeInWei); 
	    	}
	    	reqire(amountInTokens > 0);
            _balances[msg.sender] += amountInTokens;
            _balances[this] -= amountInTokens;
            emit Transfer(this, msg.sender, amountInTokens);
	}

    function setTokenPrice(uint256 _price) public onlyOwner {
    	tokenPriceForEth = _price;
    }

	function getBalanceContract() public {
		balanceOf(this);
	}

	function withdraw() public onlyOwner {
		reqire(_balances[this] <= 0);
		owner().transfer(this.balance);
	}

}