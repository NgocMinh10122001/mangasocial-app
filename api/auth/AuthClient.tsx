import { IManga, IMangaDetail } from "@/type";
import { IUserData } from "@/type/auth/user";
import axios from "axios";
import { ApiClient } from "../ApiClient";

interface IUserRes {
  account: IUserData;
  errCode: string | number;
  message: string;
}
export class AuthClient extends ApiClient {
  async login(email: string, password: string): Promise<IUserRes> {
    let res = await this.axiosInstance.post("login", {
      email,
      password,
    });
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("error fetching!");
    }
  }

  async register(email: string, password: string): Promise<IUserRes> {
    let res = await this.axiosInstance.post("register", {
      email,
      password,
    });
    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("error fetching!");
    }
  }
}
