// types
import { PAYLOAD } from ".";

export const reqPreprocessor = (payload: PAYLOAD) => ({
  data: null,
  searchParams: {
    limit: payload.limit,
  },
});
