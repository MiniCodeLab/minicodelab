export const getPostAuthor = (author: string | string[]) =>
  typeof author === 'string' ? author : author.join(', ');
