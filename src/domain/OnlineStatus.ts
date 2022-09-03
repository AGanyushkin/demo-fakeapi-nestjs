
export enum OnlineStatusEnum {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE'
}

export interface OnlineStatus {
  accountId: string
  status: OnlineStatusEnum
}
