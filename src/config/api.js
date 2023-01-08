import axios from "axios";

export const API = axios.create({
  baseURL: 'https://api.kontenbase.com/query/api/v1/93e98b64-6c71-44d0-a918-45d5aaa3a904'
})