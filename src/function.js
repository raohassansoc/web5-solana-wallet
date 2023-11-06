import axios from "axios";
import jwt from 'jsonwebtoken';

const secret = process.env.ENCRYPTION_KEY;

export function verifyToken(token) {
    if (typeof token !== 'string') {
      return null;
    }
  
    try {
      const payload = jwt.verify(token, secret);
      return payload;
    } catch (error) {
      return null;
    }
}

export function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
  
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      alert('Address copy attempt was ' + msg);
    } catch (err) {
      console.error('Error copying text to clipboard:', err);
    }
  
    document.body.removeChild(textArea);
}

export async function createAccount(){
    const response = await axios.get(`/api/create-wallet`);
    if(!response){
        console.error(error);
    }
    return response.data.decrypt
}

export async function createNewAccount(){
    const response = await axios.get(`/api/create-new-account`);
    if(!response){
        console.error(error);
    }
    return response.data.decrypt
}

export async function getBalance(address) {
    try {
      const apiUrl = `/api/wallet-ballance`;
      const postData = {
        walletAddress: address,
      };
      const response = await axios.post(apiUrl, postData);
      if (response.status === 200) {
        return response.data.token;
      } else {
        console.error(`Unexpected response status: ${response.status}`);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
}

export async function getTokens(address) {
    try {
      const apiUrl = `/api/token-list`;
      const postData = {
        walletAddress: address,
      };  
      const response = await axios.post(apiUrl, postData);
      if (response.status === 200) {
        return response.data.token;
      } else {
        console.error(`Unexpected response status: ${response.status}`);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
}

export async function importAccount(key) {
  try {
      const apiUrl = `/api/import-with-Key`;
      const postData = {
        key: key,
      };  
      const response = await axios.post(apiUrl, postData);
      if (response.status === 200) {
        return response.data.token;
      } else {
        console.error(`Unexpected response status: ${response.status}`);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
}

export async function importAccountMnemonic(words) {
  try {
      const apiUrl = `/api/import-with-mnemonic`;
      const postData = {
        words: words,
      };  
      const response = await axios.post(apiUrl, postData);
      if (response.status === 200) {
        return response.data.token;
      } else {
        console.error(`Unexpected response status: ${response.status}`);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
}

export async function sendNative(key, address, amount) {
    try {
      const apiUrl = `/api/send-native`;
  
      const postData = {
        key: key,
        address: address,
        amount: amount 
        };
   
      const response = await axios.post(apiUrl, postData);
      if (response.status === 200) {
        return response.data.token;
      } else {
        console.error(`Unexpected response status: ${response.status}`);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return error;
    }
}

export async function sendNONNative(key, address, amount , token) {
    try {
      const apiUrl = `/api/send-non-native`;
  
      const postData = {
        privateKey: key,
        recipientAddress: address,
        tokenMintAddress:token,
        amount: amount
      };
  
      const response = await axios.post(apiUrl, postData);
  
      if (response.status === 200) {
        return response.data.token;
      } else {
        console.error(`Unexpected response status: ${response.status}`);
        return null;
      }
    } catch (error) {
      console.error('Error:', error);
      return error;
    }
}

