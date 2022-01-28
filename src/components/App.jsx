import React from 'react';
import Card from './Card.jsx';
import emojipedia from '../emojipedia';

function getEmoji(emojidetail) {
    return(
        <Card
            key={emojidetail.id}
            emoji={emojidetail.emoji}
            name={emojidetail.name}
            meaning={emojidetail.meaning}
        />
    )}

function App() {
    return (
        <div>
            <h1><span>Emojipedia</span></h1>

            <dl className='dictionary'>
                {emojipedia.map(getEmoji)}
            </dl>
        </div>
    )
}

export default App;

