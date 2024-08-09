import { IManga, IMangaDetail } from "@/type";
import { ApiClient } from "../ApiClient";

export class MangaClient extends ApiClient {
  async fetchAllManga(): Promise<IMangaDetail[]> {
    let res = await this.axiosInstance.get<IMangaDetail[]>("allmanga");
    if (res.status) {
      return res.data;
    } else {
      throw new Error("error fetching!");
    }
  }
}
