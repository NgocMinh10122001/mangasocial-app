import { IManga } from "@/type";
import { ApiClient } from "../ApiClient";

export class MangaClient extends ApiClient {
  async fetchAllManga(
    sv: string | number | string[],
    type: string,
    page?: string
  ): Promise<IManga[]> {
    let res = await this.axiosInstance.get<any[]>(
      `${sv}/manga/${type}/${page}`
    );

    if (res.status) {
      console.log("check 2", res.data[0].data);
      return res.data;
    } else {
      throw new Error("error fetching!");
    }
  }
}
