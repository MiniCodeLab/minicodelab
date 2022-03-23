import { readFileSync } from 'fs';
import { join } from 'path';
import { Video } from 'types/common';

export const DATA_SOURCES_PATH = 'data-sources';
export const CALENDAR_PATH = 'calendar';

export const getCalendarContent = (): Video[] => {
  const stringMetadata = readFileSync(
    join(process.cwd(), `${DATA_SOURCES_PATH}/${CALENDAR_PATH}.json`)
  ).toString();

  return JSON.parse(stringMetadata) as Video[];
};
