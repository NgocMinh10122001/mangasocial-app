import axios, { AxiosInstance } from "axios";

export class ApiClient {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      url: "https://www.youtube.com/watch?v=BD9OP4-scSY&list=PLRb-vAn1juPTqQ25wH7EBSAj4IJjBjOl0&index=16/",
      timeout: 10000,
    });
  }
}
