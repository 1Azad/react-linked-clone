/* eslint-disable react/react-in-jsx-scope */

import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post';
import { useState, useEffect } from 'react'
import db from "./firebase";
import firebase from 'firebase';
function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data,
                }
            )))
        })
    }, []
    )
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('post').add({
            name: 'Sonny sanga',
            description: 'this is a treat',
            meassage: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>

                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#7005f9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7433E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
                </div>
            </div>
            {/* Posts*/}
            {posts.map((post) =>
                (<Post />)
            )}

            <Post name="Sonny sangha " description="This is a test" meassage="Wow this is workload" />


        </div>
    );
}

export default Feed

