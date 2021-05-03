import React, { useState, useEffect } from "react";
import {Jumbotron, Container, InputGroup, FormControl, Button} from "react-bootstrap";
import Web3 from "web3";
import {myABI} from "./xz4zaTokenABI";

let xz4zaToken;
let web3js;


const startApp = () => {
    const xz4zaTokenAddress = "123456789";
    xz4zaToken = new web3js.eth.Contract(myABI, xz4zaTokenAddress);
}


window.addEventListener('load', function() {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      web3js = new Web3(window.web3.currentProvider);
    } else {
      // Handle the case where the user doesn't have web3. Probably
      // show them a message telling them to install Metamask in
      // order to use our app.
      xz4zaToken = null;
    }
    // Now you can start your app & access web3js freely:
    return web3js && startApp()
  
  })

  const getTotalBalanceTokens = () => {
      return xz4zaToken.metods.totalSupply().call();
  }
  const getTotalContractBalance = () => {
    return xz4zaToken.metods.getBalanceContract();
  } 


export const Token = () => {

    const [addressOwner, setAddressOwner] = useState(null);
    const [addressTo, setAddressTo] = useState(null);
    const [priceToken, setPriceToken] = useState(null);
    const [amountSubmitXZT, setAmountSubmitXZT] = useState(null);
    const [userAccount, setUserAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [totalBalanceTokens, setTotalBalanceTokens] = useState(null);
    const [totalContractBalance, setTotalContractBalance] = useState(null);

    useEffect(
        () => {
            if (!web3js) {
                return;
            }
            getTotalBalanceTokens().then(setTotalBalanceTokens);
            getTotalContractBalance().then(setTotalContractBalance);   
            let timer = setTimeout( async () => {
              // Check if account has changed
              if (web3js.eth.accounts[0] !== userAccount) {
              let res = web3js.eth.accounts[0];
              setUserAccount(await res);
              }
            }, 1000)
            return () => {
                clearTimeout(timer)
            }
        },[]
      )
    
    const changeOwner = (e) => {
        e.prevent.default();
        xz4zaToken.metods.transferOwnership(addressOwner).call();
    };
    const transferTokens = (e) => {
        e.prevent.default();
        xz4zaToken.metods.transfer(addressTo, amountSubmitXZT).send()
    };
    const changePrice = (e) => {
        e.prevent.default();
        xz4zaToken.metods.setTokenPrice(priceToken).call();
    };

    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h1>XZT</h1>
                    <p>{`total balance of tokens-${totalBalanceTokens}`}</p>  
                    <p>{` total contract balance-${totalContractBalance}`}</p>  
                    <p>{`user balance-${userBalance}`}</p>
                </Container>
            </Jumbotron>
            <div>
            <InputGroup className="mb-3">
                <FormControl
                    onChange={(e) => setAddressOwner(e.target.value)}
                    value={addressOwner}
                    placeholder="change the address of the owner of the contract"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">change owner</Button>
                </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <FormControl
                        onChange={(e) => setAmountSubmitXZT(e.target.value)}
                        value={amountSubmitXZT}
                        placeholder="amount XZT"
                        aria-label="Amount (to the nearest dollar)"
                    />
                </InputGroup.Prepend>
                    <FormControl
                       onChange={(e) => setAddressTo(e.target.value)}
                       value={addressTo}
                       placeholder="transfer tokens to address"
                       aria-label="Recipient's username"
                       aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">transfer tokens</Button>
                    </InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                    onChange={(e) => setPriceToken(e.target.value)}
                    value={priceToken}
                    placeholder="change token price"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">change price</Button>
                </InputGroup.Append>
            </InputGroup>
            </div>
        </>
    )
}