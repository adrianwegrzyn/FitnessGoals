import firebase from 'firebase';

class Fire {
    constructor() {
        this.init();
        this.observeAuth();
        console.ignoredYellowBox = [
            'Setting a timer'
        ];
    }

    observeAuth = () =>
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

    onAuthStateChanged = user => {
        if (!user) {
            try {

                firebase.auth().signInAnonymously();
            } catch ({ message }) {
                alert(message);
            }
        }
    };

    init = () =>
        firebase.initializeApp({
            apiKey: "AIzaSyAh6u0lfGmo3MAcO2jFjMBIiCbt5EYfw4A",
            authDomain: "chat-bb771.firebaseapp.com",
            databaseURL: "https://chat-bb771.firebaseio.com",
            projectId: "",
            storageBucket: "chat-bb771.appspot.com",
            messagingSenderId: "957325058198"
        });

    get ref() {
        return firebase.database().ref('messages');
    }

    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;

        const timestamp = new Date(numberStamp);

        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    };

    off() {
        this.ref.off();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            const message = {
                text,
                user,
                createdAt: new Date(),
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };

    append = message => this.ref.push(message);
}
Fire.shared = new Fire();
export default Fire;