// libs import
import { message } from "antd";
import moment from "moment-timezone";

/**
 * default http response callback error
 */
export const defaultHttpResponseCbError = (url: string, err: any) => {
  message.error("ERROR detail in console");
  // eslint-disable-next-line no-console
  console.log("URL：", url);
  // eslint-disable-next-line no-console
  console.log("Detail：", err);
};

export const sortListBPMN = (a: any, b: any) =>
  moment.tz(b.deploymentTime, "Asia/Ho_Chi_Minh").diff(Date.now(), "seconds") -
  moment.tz(a.deploymentTime, "Asia/Ho_Chi_Minh").diff(Date.now(), "seconds");
