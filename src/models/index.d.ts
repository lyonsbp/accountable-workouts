import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Weekday {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY"
}



type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly email?: string | null;
  readonly active?: boolean | null;
  readonly Schedules?: (Schedule | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Schedule {
  readonly id: string;
  readonly day?: Weekday | keyof typeof Weekday | null;
  readonly time?: string | null;
  readonly notify_before_mins?: number | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Schedule, ScheduleMetaData>);
  static copyOf(source: Schedule, mutator: (draft: MutableModel<Schedule, ScheduleMetaData>) => MutableModel<Schedule, ScheduleMetaData> | void): Schedule;
}