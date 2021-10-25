import { departmentData } from "../mockData/staffData.js";
export function getDepartmentData() {
  // 这里应该是数据请求
  return new Promise((resolve) => {
    resolve(departmentData);
  });
}
