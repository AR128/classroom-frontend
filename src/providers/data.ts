import { MOCK_SUBJECTS } from "@/constants/mock-data";
import {
  DataProvider,
  GetListParams,
  GetListResponse,
  BaseRecord,
} from "@refinedev/core";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") return { data: [] as TData[], total: 0 };
    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },
  getOne: async (params) => {
    throw new Error("This function is not present in mock");
  },
  create: async (params) => {
    throw new Error("This function is not present in mock");
  },
  update: async (params) => {
    throw new Error("This function is not present in mock");
  },
  deleteOne: async (params) => {
    throw new Error("This function is not present in mock");
  },
  getApiUrl: () => "",
};
