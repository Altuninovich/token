pragma solidity >=0.5.0 <0.6.0;

import './erc20zeppelin.sol';
import './utils/Safemath.sol';


contract Xz4zaToken is ERC20 {
	using SafeMath for uint256;


    uint256 public tokenPriceForEth;

    constructor(uint256 _initTokenPriceForEth, uint256 _initTotalSupply) ERC20('Xz4zaToken', 'XZT') public {
        _totalSupply = _initTotalSupply;
        tokenPriceForEth = _initTokenPriceForEth;
        _balances[address(this)] = _initTotalSupply / 100 * 90; // 90% on the balance of the contract
        _balances[owner()] = _initTotalSupply - _balances[address(this)]; // on the balance of the owner contract
        emit Transfer(address(this), owner(), _balances[owner()]);
    }

    function Sale() payable public returns (bool) {
    	require(_balances[address(this)] > 0);
	    	uint256 amountInTokens = tokenPriceForEth * msg.value / 1000000000000000000;
	    	if (amountInTokens > _balances[address(this)]) {
	    		amountInTokens = _balances[address(this)];
	    		uint256 returnChangeInWei = amountInTokens * 1000000000000000000 / 1000;
	    		msg.sender.transfer(msg.value - returnChangeInWei); 
	    	}
	    	require(amountInTokens > 0);
            _balances[msg.sender] += amountInTokens;
            _balances[address(this)] -= amountInTokens;
            emit Transfer(address(this), msg.sender, amountInTokens);
            return true;
	}

    function setTokenPrice(uint256 _price) public onlyOwner {
    	tokenPriceForEth = _price;
    }

    function getTokenPrice() public view returns (uint) {
    	return tokenPriceForEth;
    }

    function transferd(address _to, uint256 _amount) public payable {
    	transfer(_to, _amount);
    }

    function sendTokensFromContractAddress(address _to, uint256 _amount) public payable onlyOwner {
    	require(_balances[address(this)] >= _amount);
    	_balances[address(this)] -= _amount;
    	_balances[_to] += _amount;
    	emit Transfer(address(this), _to, _amount);
    }

	function getBalanceContract() public {
		balanceOf(address(this));
	}

	function withdraw() public payable onlyOwner {
		require(_balances[address(this)] <= 0);
		selfdestruct(msg.sender);
		//owner().transfer(address(this).balance);
	}

}
