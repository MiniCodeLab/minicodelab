// Server response types
export type TitleProperty = {
  type: 'text';
  text: { content: string; link: null };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null;
};

export type RichTextProperty = {
  type: 'text';
  text: {
    content: string;
    link: null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: null;
};

export type FileProperty = {
  name: string;
  type: 'file';
  file: {
    url: string;
    expiry_time: string;
  };
};

export type MultiSelectProperty = {
  id: string;
  name: string;
  color: string;
};

export type DateProperty = {
  start: string;
}

export type TableProperty = {
  id: string;
  type: 'title' | 'files' | 'rich_text' | 'multi_select';
  files?: FileProperty[];
  multi_select?: MultiSelectProperty[];
  rich_text: RichTextProperty[];
  title?: TitleProperty[];
  date?: any
};

export type DatabaseResponse = {
  results: {
    object: string;
    id: string;
    cover: null;
    icon: {
      type: 'file';
      file: {
        url: string;
        expiry_time: string;
      };
    };
    parent: {
      type: 'database_id';
      database_id: string;
    };
    archived: false;
    properties: Record<string, TableProperty>;
  }[];
};

// Client code types -> TODO: DATES 
export type Post = {
  id: string;
  title: string;
  cover: string;
  author: string;
  description: string;
  tags: any;
  url: string;
  post_id: string;
  date: string
};

// Client code types -> TODO: DATES 
export type Calendar = {
  id: string;
  title: string;
  cover: string;
  description: string;
  tags: any;
  date: string
}