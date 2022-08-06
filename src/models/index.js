// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Weekday = {
  "SUNDAY": "SUNDAY",
  "MONDAY": "MONDAY",
  "TUESDAY": "TUESDAY",
  "WEDNESDAY": "WEDNESDAY",
  "THURSDAY": "THURSDAY",
  "FRIDAY": "FRIDAY",
  "SATURDAY": "SATURDAY"
};

const { User, Schedule } = initSchema(schema);

export {
  User,
  Schedule,
  Weekday
};