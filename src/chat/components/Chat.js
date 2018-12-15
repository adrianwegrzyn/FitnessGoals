import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire'


class Chat extends React.Component<> {
    constructor(){
        super();
        console.ignoredYellowBox = ['Setting a timer'];
    }

    state = {
        messages: [],
    };

    componentDidMount() {
        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            })))
    };

    componentWillUnmount() {
        Fire.shared.off();
    }

    get user() {
        // Return our name and our UID for GiftedChat to parse
        return {
            name: 'Adrian',
            _id: Fire.shared.uid,
        };
    }

    render() {


        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={Fire.shared.send}
                user={this.user}
            />
        );
    }
}
export default Chat;
