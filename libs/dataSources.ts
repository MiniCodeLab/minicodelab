import { readFileSync } from 'fs';
import { join } from 'path';
import { Author, Video } from 'types/common';

export const DATA_SOURCES_PATH = 'data-sources';
export const CALENDAR_PATH = 'calendar';
export const AUTHOR_PATH = 'authors';

export const getCalendarContent = (): Video[] => {
  const stringMetadata = readFileSync(
    join(process.cwd(), `${DATA_SOURCES_PATH}/${CALENDAR_PATH}.json`)
  ).toString();

  return JSON.parse(stringMetadata) as Video[];
};

export const getAuthorsData = (): Author[] => {
  const stringMetadata = readFileSync(
    join(process.cwd(), `${DATA_SOURCES_PATH}/${AUTHOR_PATH}.json`)
  ).toString();

  return JSON.parse(stringMetadata) as Author[];
};
