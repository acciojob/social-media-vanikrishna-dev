import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notificationAdded, selectAllNotifications } from './notificationsSlice';

export default function NotificationsList() {
  const dispatch = useDispatch();
  const notifications = useSelector(selectAllNotifications);

  return (
    <section>
      <h2>Notifications</h2>
      <button className="button" onClick={() => dispatch(notificationAdded())}>
        Refresh Notifications
      </button>
      <section className="notificationsList">
        {notifications.map((n) => (
          <div key={n.id}>
            <p>{n.message}</p>
          </div>
        ))}
      </section>
    </section>
  );
}