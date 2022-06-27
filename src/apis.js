export const fetchPosts = (userId) =>
  `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

export const getUser = (userId) =>
  `https://jsonplaceholder.typicode.com/users/${userId}`;
