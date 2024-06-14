export interface RootState {
  user: {
    gmail: string;
  };
  devices: Device[];
}

export interface Device {
  attributes: {
    "decoder.timezone": string;
    deviceImage: string;
    deviceInactivityStart: number;
    "processing.copyAttributes": string;
    speedLimit: number;
    "web.reportColor": string;
  };
  calendarId: number;
  category: string | null;
  contact: string | null;
  disabled: boolean;
  expirationTime: string | null;
  groupId: number;
  id: string;
  lastUpdate: string;
  model: string | null;
  name: string;
  phone: string | null;
  positionId: number;
  protocol: string | null;
  status: string;
  uniqueId: string;
}
