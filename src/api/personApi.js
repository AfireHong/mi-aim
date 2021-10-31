import { departmentData } from "../mockData/staffData.js";
import { messageData } from "../mockData/messageData";
// import { get } from "../utils/request";
export function getDepartmentData() {
  // 这里应该是数据请求
  // return get("/department", {}, { mock: false });
  return new Promise((resolve) => {
    resolve(departmentData);
  });
}
export function getMessageData() {
  return new Promise((resolve) => {
    resolve(messageData);
  });
}
