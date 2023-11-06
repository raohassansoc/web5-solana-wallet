import { NextResponse } from 'next/server';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const secret = process.env.ENCRYPTION_KEY;
const port = process.env.END_POINT;

export const POST = async (req, res) => {
    const data = await req.json();
  try {
    const apiUrl = `${port}/send-non-native`;
    const postData = {
      privateKey: jwt.sign(data.privateKey, secret),
      recipientAddress: data.recipientAddress,
      tokenMintAddress:data.tokenMintAddress,
      amount: data.amount
    };
    const response = await axios.post(apiUrl, postData);
    const token = response.data;

    return NextResponse.json({ token },{ status: 200 });
  } catch (error) {
    const errorResponse = {
      success: false,
      message: 'Could not fetch the wallet data',
    };
    return NextResponse.json({
        success: false, errorResponse,
    },{ status: 404 });
  }
};

