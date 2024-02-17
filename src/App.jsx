import { useState } from 'react'
import { ethers } from "ethers";
import { Web3Provider } from '@ethersproject/providers';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import abi from "./utils/Test.json";
import * as buffer from "buffer";
import './App.css'

import Home from './components/Home.jsx';
import VerifyTicket from './components/VerifyTicket.jsx';

window.Buffer = buffer.Buffer;

const getEthereumObject = () => window.ethereum;
const contractAdd = "0x700b6A60ce7EaaEA56F065753d8dcB9653dbAD35";
const contractAbi = abi.abi;

function App() {
    const [account, setAccount] = useState("0x00000000000");
    const [contract, setContract] = useState({});

    const findAuthorizedAccount = async () => { //Gets authorized accounts
        const ethereum = getEthereumObject();
        
        try{
            if(ethereum == null){
                console.log("findAuthorizedAccount: Metamask not found");
                return;
            }

            const accounts = await ethereum.request({method: "eth_accounts"});

            if(accounts.length == 0){
                console.log("findAuthorizedAccount: No authorized accounts found");
                requestAuthorization();
            }
            else{
                setAccount(accounts[0]);
                getContract(ethereum);
            }
            } catch(error){
                console.log(error);
        }
    }

    const requestAuthorization = async () =>{ //Requests for account authorization and gets it
        const accounts = await ethereum.request({method: "eth_requestAccounts"});

        if(accounts.length == 0){
            console.log("requestAuthorization: Account authorization denied");
        }
        else{
            setAccount(accounts[0]);
            getContract(ethereum);
        }
    }

    const getContract = async (ethereum) => { //Signs and gets contract
        try{
            const provider = new Web3Provider(getEthereumObject());
            const signer = provider.getSigner();
            const ticketContract = new ethers.Contract(contractAdd, contractAbi, signer);
            setContract(ticketContract);
        } catch(error){
            console.log(error);
        }
    }

    const testContract = async() => { //Function to test contract
        console.log(await contract.GetName());
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/verify' element={<VerifyTicket/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
