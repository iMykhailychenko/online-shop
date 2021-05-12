import { ReactNotificationOptions, store } from 'react-notifications-component';

const defaultOptions: ReactNotificationOptions = {
    insert: 'bottom',
    container: 'bottom-right',
    slidingEnter: {
        duration: 300,
        timingFunction: 'ease-out',
        delay: 0,
    },
    slidingExit: {
        duration: 300,
        timingFunction: 'ease-out',
        delay: 0,
    },
    dismiss: {
        duration: 5_000,
        showIcon: true,
        click: false,
    },
    touchSlidingExit: {
        swipe: {
            duration: 300,
            timingFunction: 'ease-out',
            delay: 0,
        },
        fade: {
            duration: 300,
            timingFunction: 'ease-out',
            delay: 0,
        },
    },
};

interface INotifications {
    success: (title?: string, message?: string) => void;
    error: (title?: string, message?: string) => void;
    info: (title?: string, message?: string) => void;
}

const notifications: INotifications = {
    success: (title = 'Success!', message = 'Success!'): void => {
        store.addNotification({
            title,
            message,
            type: 'success',
            ...defaultOptions,
        });
    },
    error: (
        title = 'Danger!',
        message = 'Oops, Something went wrong. Please, reload your browser and try again!',
    ): void => {
        store.addNotification({
            title,
            message,
            type: 'danger',
            ...defaultOptions,
        });
    },
    info: (title = 'Info!', message = 'Info!'): void => {
        store.addNotification({
            title,
            message,
            type: 'info',
            ...defaultOptions,
        });
    },
};

export default notifications;
