import React from 'react';
import './app.css';
import SingleComment from './components/SingleComment';
import UserCard from './components/UserCard';
import profile1 from './image/1.png';
import profile2 from './image/2.png';
import profile3 from './image/3.png';

const App = () => {
    return (
        <div className="app">
            <div className="appBody">
                <UserCard>
                    <div className="userPost">My name is Vikrant Shrestha.</div>

                    <SingleComment
                        name="Vikrant Shrestha"
                        date="Today at 5:00pm"
                        text="Fantastic, Nice outfit!!!"
                        picture={profile1}
                    />

                    <SingleComment
                        name="Adeet Gede"
                        date="Today at 6:00pm"
                        text="Fabulous, it's nice!!!"
                        picture={profile2}
                    />

                    <SingleComment
                        name="Rozeel Gedaless"
                        date="Today at 5:00pm"
                        text="Gorgeous, very very beautiful!!!"
                        picture={profile3}
                    />
                </UserCard>
            </div>
        </div>
    );
};

export default App;
