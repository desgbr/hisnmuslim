import axios from "@/utils/axios-config";

export const getAzkarList = async (locale = 'ar') => {
  const config = {
    url: `/${locale}/husn_ar.json`,
    Headers:{
      "Content-Type": "application/json"
    }
  }
  try {
    const req = await axios(config)
    return req
  } catch (err) {
    return err
  }
}
export const getSingleZkr = async (locale = 'ar', id : string | undefined) => {
  const config = {
    url: `/${locale}/${id}.json`,
    Headers:{
      "Content-Type": "application/json"
    }
  }
  try {
    const req = await axios(config)
    return req
  } catch (err) {
    return err
  }
}