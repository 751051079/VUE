import service from "@/utils/request";

export function getUserInfo(params:any) {
    return service({
      url: '/user',
      method: 'get',
      params
    })
  }