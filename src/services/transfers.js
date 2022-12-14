import axios from "axios";

export const getTransferSends = async (senderId) => {
  const URL_API = "https://sesion19-back.herokuapp.com/transfers";
  try {
    const response = await axios.get(`${URL_API}?senderId=${senderId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getTransferReceipts = async (receiptId) => {
  const URL_API = "https://sesion19-back.herokuapp.com/transfers";
  try {
    const response = await axios.get(`${URL_API}?receiptId=${receiptId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
