import { NextResponse } from 'next/server';
import axios from 'axios';
const port = process.env.END_POINT;

export const POST = async (req, res) => {
    const data = await req.json();
  try {
    const apiUrl = `${port}/wallet-ballance`;
    const postData = {
        walletAddress: data.walletAddress,
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

