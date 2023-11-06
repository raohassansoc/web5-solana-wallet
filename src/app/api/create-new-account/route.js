import { NextResponse } from 'next/server';
import axios from 'axios';
import { verifyToken } from '@/function';
const port = process.env.END_POINT;

export const GET = async (req, res) => {
  try {
    const response = await axios.get(`${port}/create-new-wallet`);
    const token = response.data.data;
    const decrypt = verifyToken(token);
    return NextResponse.json({ decrypt },{ status: 200 });
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

