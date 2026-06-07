import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello World',
    user: '1',
    date: new Date().toISOString(),
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More interesting content',
    user: '2',
    date: new Date().toISOString(),
    reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId,
            date: new Date().toISOString(),
            reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const post = state.find((p) => p.id === id);
      if (post) {
        post.title = title;
        post.content = content;
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const post = state.find((p) => p.id === postId);
      if (post) {
        post.reactions[reaction]++;
      }
    },
  },
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
export const selectAllPosts = (state) => state.posts;
export const selectPostById = (state, postId) =>
  state.posts.find((p) => p.id === postId);