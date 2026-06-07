import { createSlice } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    notificationAdded(state) {
      state.push(
        { id: '1', date: new Date().toISOString(), message: 'Tianna Jenkins reacted to your post', user: '1' },
        { id: '2', date: new Date().toISOString(), message: 'Kevin Grant commented on your post', user: '2' },
        { id: '3', date: new Date().toISOString(), message: 'Madison Price replied to you', user: '3' }
      );
    },
  },
});

export const { notificationAdded } = notificationsSlice.actions;
export default notificationsSlice.reducer;
export const selectAllNotifications = (state) => state.notifications;