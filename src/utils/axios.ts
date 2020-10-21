// types
import { AXIOS_CONFIG } from "@/types/common";
// others
import { AXIOS_INSTANCE } from "@/configs/enviroments";

const axiosFetch = (axiosConfig: AXIOS_CONFIG) => AXIOS_INSTANCE(axiosConfig);

export { axiosFetch };
