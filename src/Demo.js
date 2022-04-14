import _ from 'loadsh';
import React, {useEffect, useState} from 'react';
import {Button, ButtonGroup, ToggleButton, Row, Col} from 'react-bootstrap';
import {ethers} from "ethers";
import Web3Modal from "web3modal";
import {
  myTokenAddress,
  myTokenAbiContext,
  myVendorAddress,
  myVendorAbiContext
} from "./ABI";

const providerOptions = {};

const web3Modal = new Web3Modal({
  network: "rinkeby",
  cachedProvider: true,
  providerOptions,
  theme: "dark"
});

export const truncateAddress = (address) => {
  if (!address) return "No Account";
  const match = address.match(
    /^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{2})$/
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

const Demo = () => {
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [myBalance, updateMyBalance] = useState();
  const [myJctBalance, updateMyJctBalance] = useState();
  const [error, setError] = useState("");
  const [myTokenContract, setMyTokenContract] = useState();
  const [myTokenContractTotalSupply, setMyTokenContractTotalSupply] = useState();
  const [totalSupplyDisplayMethod, setTotalSupplyDisplayMethod] = useState('1');
  const radios = [
    {name: 'Wei', value: '1'},
    {name: 'Eth', value: '2'},
  ];
  const [vendorContract, setVendorContract] = useState();
  const [vendorBalance, updateVendorBalance] = useState();
  const [mintData, setMint] = useState({
    address: '',
    amount: 0
  });
  const [buyToken, setBuyToken] = useState(0);

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();

      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  account && console.log("current wallet account: ", account);
  myTokenContract && console.log("myTokenContract: ", myTokenContract);
  vendorContract && console.log("vendorContract: ", vendorContract);

  if (error) {
    console.log("connect wallet failed: ", error);
  }

  return <div style={{maxWidth: "80%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
    <Row>
      <Button
        onClick={connectWallet}
      >
        Connect Wallet
      </Button>
    </Row>
    <br/>
    <Row>
      <div>
        <span>{`Connection Status: `}</span>
        {account ? (
          <span>Connected !</span>
        ) : (
          <span>Not connected !</span>
        )}
      </div>

      <div>
        <p>{`Account: ${truncateAddress(account)}`}</p>
        {
          provider && <Row>
            <Col>
              <label>get my eth balance: {myBalance && `${myBalance} ETH`} </label>
              <div>
                <Button
                  onClick={async () => {
                    const signer = library.getSigner();
                    const balance = await signer.getBalance();
                    updateMyBalance(ethers.utils.formatEther(balance));
                  }}
                >
                  get my eth balance
                </Button>
              </div>
            </Col>
            <Col>
              {
                myTokenContract && <>
                  <label>get my JCT balance: {myJctBalance && `${myJctBalance} JCT`} </label>
                  <div>
                    <Button
                      onClick={async () => {
                        const signer = library.getSigner();
                        const address = await signer.getAddress();
                        const balance = await myTokenContract.balanceOf(address);
                        updateMyJctBalance(ethers.utils.formatEther(balance));
                      }}
                    >
                      get my JCT balance
                    </Button>
                  </div>
                </>
              }
            </Col>
          </Row>
        }
      </div>
      <br/>
    </Row>

    <div style={{marginTop: '20px'}}>
      {
        myTokenContractTotalSupply &&
        <span>{`Total Supply: ${totalSupplyDisplayMethod === '2' ? ethers.utils.formatEther(myTokenContractTotalSupply) : myTokenContractTotalSupply} (${radios[totalSupplyDisplayMethod - 1].name})`}</span>
      }
      {
        myTokenContractTotalSupply && <ButtonGroup style={{marginLeft: '10px'}}>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-success' : 'outline-danger'}
              name="radio"
              value={radio.value}
              checked={totalSupplyDisplayMethod === radio.value}
              onChange={(e) => setTotalSupplyDisplayMethod(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      }
    </div>
    {
      provider && <Row>
        <Row style={{width: '50%'}}>
          <Col>
            <Button
              style={{whiteSpace: "nowrap"}}
              onClick={async () => {
                const signer = await library.getSigner();
                const contract = new ethers.Contract(myTokenAddress, myTokenAbiContext, signer);
                setMyTokenContractTotalSupply(await contract.totalSupply());
                setMyTokenContract(contract);
              }}
            >
              Connect JCT Contract and Get totalSupply
            </Button>
          </Col>
        </Row>
        <Row style={{maxWidth: '50%'}}>
          {
            myTokenContract && <Col>
              <Row>
                <label>Mint to:</label>
                <input type="text" placeholder='to address' value={mintData.address}
                       onChange={({target}) => setMint((prev) => ({...prev, address: target.value}))}/>
              </Row>
              <Row>
                <input type="number" value={mintData.amount}
                       onChange={({target}) => setMint((prev) => ({...prev, amount: target.value}))}/>
              </Row>
              <Row style={{marginTop: "20px", display: "flex", justifyContent: "center"}}>
                <Button
                  style={{width: "128px"}}
                  onClick={async () => {
                    if (!_.isEmpty(mintData.address) && mintData.amount > 0) {
                      try {
                        await myTokenContract.mint(mintData.address, ethers.utils.parseEther(`${mintData.amount}.0`))
                      } catch ({error}) {
                        const {message} = error;
                        window.alert(`Error: ${message}`);
                      }
                    }
                  }}
                >
                  Mint Token!
                </Button>
              </Row>
            </Col>
          }
        </Row>
      </Row>
    }
    <br/>

    <br/>

    {
      myTokenContract && <Row>
        <Row style={{width: '80%'}}>
          <Col>
            <Button
              style={{whiteSpace: "nowrap"}}
              onClick={async () => {
                const signer = await library.getSigner();
                const contract = new ethers.Contract(myVendorAddress, myVendorAbiContext, signer);
                const balance = await myTokenContract.balanceOf(myVendorAddress);
                updateVendorBalance(ethers.utils.formatEther(balance));
                setVendorContract(contract);
              }}
            >
              Connect Vendor Contract
            </Button>
          </Col>
          <Col style={{marginLeft: "10px"}}>
            {
              vendorBalance && vendorBalance > 0 && <span>
            Vendor Balance: {vendorBalance}
            </span>
            }
          </Col>
        </Row>
        <p>=======================================</p>

        {
          vendorContract && <div style={{marginBottom: "20px"}}>
            <Row style={{display: "flex", justifyContent: "center"}}>
              <label>Buy JCT (Use Eth)</label>
              <input style={{width: "50%"}} type="number" value={buyToken}
                     onChange={({target}) => setBuyToken(target.value)}/>
            </Row>
            <Row style={{marginTop: "20px", display: "flex", justifyContent: "center"}}>
              <Button
                style={{width: "128px"}}
                onClick={async () => {
                  if (buyToken > 0) {
                    await vendorContract.buyTokens({value: ethers.utils.parseEther(buyToken)})
                  }
                }}
              >
                Buy JCT!
              </Button>
            </Row>
          </div>
        }
      </Row>
    }
  </div>
};

export default Demo;