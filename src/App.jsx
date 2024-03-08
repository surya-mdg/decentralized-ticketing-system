import { useState, useEffect} from "react";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import abi from "@/utils/Test.json";
import * as buffer from "buffer";

import HomePage from "@/pages/HomePage";
import EventsPage from "@/pages/users-pages/EventsPage";
import RootLayout from "@/Layouts/RootLayout";
import PageNotFound from "@/pages/page-not-found";
import BookEvent from "@/pages/users-pages/BookEvent";
import BookedTicket from "@/pages/users-pages/BookedTicket";
import VerifyTicketEventPage from "@/pages/verify-ticket/VerifyTicketEventPage";
import VerifyTIckTokenPage from "@/pages/VerifyTIckTokenPage";
import CheckTicket from "@/pages/users-pages/CheckTicket";

window.Buffer = buffer.Buffer;

const getEthereumObject = () => window.ethereum;
const contractAdd = "0x700b6A60ce7EaaEA56F065753d8dcB9653dbAD35";
const contractAbi = abi.abi;

function App() {
  const [account, setAccount] = useState("0x00000000000");
  const [contract, setContract] = useState({});
  const [event, setEvent] = useState({tokenId: 0, name: "Harmony Haven Live", time: "15:00 | 19/09/2024", location: "Neon Nights Club, Brickton", seat: "middle"});
  const [ticket, setTicket] = useState({tokenId: 0, name: "Harmony Haven Live", time: "15:00 | 19/09/2024", location: "Neon Nights Club, Brickton", seat: "middle"});
  const [cost, setCost] = useState({ticketCost: 0.01});
  

  useEffect(() => {
    console.log(event);
  }, [event]);

  const findAuthorizedAccount = async () => {
    //Gets authorized accounts
    const ethereum = getEthereumObject();

    try {
      if (ethereum == null) {
        console.log("findAuthorizedAccount: Metamask not found");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length == 0) {
        console.log("findAuthorizedAccount: No authorized accounts found");
        requestAuthorization();
      } else {
        setAccount(accounts[0]);
        getContract(ethereum);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const requestAuthorization = async () => {
    //Requests for account authorization and gets it
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts.length == 0) {
      console.log("requestAuthorization: Account authorization denied");
    } else {
      setAccount(accounts[0]);
      getContract(ethereum);
    }
  };

  const getContract = async (ethereum) => {
    //Signs and gets contract
    try {
      const provider = new Web3Provider(getEthereumObject());
      const signer = provider.getSigner();
      const ticketContract = new ethers.Contract(
        contractAdd,
        contractAbi,
        signer
      );
      setContract(ticketContract);
      await testContract();
      console.log("App: Got contract");
    } catch (error) {
      console.log(error);
    }
  };

  const testContract = async () => {
    //Function to test contract
    //await contract.getTokenId();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout login={findAuthorizedAccount} contract={contract} contractAdd={contractAdd}/>}>
          <Route path="/" element={<HomePage />} />
          {/*  user event pages  */}
          <Route path="/events" element={<EventsPage event={setEvent}/>} />
          <Route path="/book-event" element={<BookEvent event={event} contract={contract} setEvent={setEvent} cost={cost}/>} />
          <Route path="/book/ticket" element={<BookedTicket event={event} account={account}/>} />
          {/*  verification  ticket pages  */}
          <Route path="/verify-event" element={<VerifyTicketEventPage contract={contract} setTicket={setTicket}/>} />
          <Route path="/verify-ticket" element={<VerifyTIckTokenPage event={ticket} account={account}/>} />
          <Route path="/check-ticket" element={<CheckTicket contract={contract} setTicket={setTicket}/>} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
