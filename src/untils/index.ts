import { ChannelType } from "@/commons/enum/channel";
import {
  format,
  isToday,
  isThisWeek,
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
} from "date-fns";

export function formatRelativeTime(timestamp: number) {
  const date = new Date(timestamp);
  const now = new Date();
  const secondsDiff = differenceInSeconds(now, date);
  const minutesDiff = differenceInMinutes(now, date);
  const hoursDiff = differenceInHours(now, date);

  if (secondsDiff < 60) {
    return `${secondsDiff}s ago`;
  } else if (minutesDiff < 60) {
    return `${minutesDiff}m ago`;
  } else if (hoursDiff < 24 && isToday(date)) {
    return format(date, "HH:mm");
  } else if (isThisWeek(date)) {
    return format(date, "iiii");
  }
  return format(date, "dd/MM/yyyy");
}

// Get Info Channel mapping
export const getInfoChannel = (channel: any, curUserId: string) => {
  if (channel.custom_type === ChannelType.CHANNEL_GROUP) {
    return {
      name: channel.name,
      imgCover: channel.cover_url,
    };
  }
  const partner = channel?.members.find((m: any) => m.user_id !== curUserId);
  return {
    name: partner.nickname,
    imgCover: partner.profile_url,
  };
};

export function convertArrToArrays<T = any>(
  arr: Array<T>,
  size: number
): Array<Array<T>> {
  var newArray: Array<Array<T>> = [];
  for (var i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
  }
  return newArray;
}
