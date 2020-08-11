import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Mark Zingerburger',
      url: 'https://api.time.com/wp-content/uploads/2019/04/mark-zuckerberg-time-100-2019.jpg?quality=85&zoom=2',
    },
    {
      name: 'Steves Jobs',
      url: 'https://media.wired.com/photos/5932639bedfced5820d10022/master/w_1025,c_limit/steve-jobs.jpg',
    },
    {
      name: 'Jeff Bezos',
      url: 'https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg',
    },
    {
      name: 'Bill Gates',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg',
    },
    {
      name: 'Warren Buffett',
      url:
        'https://smallcaps.com.au/wp-content/uploads/2020/05/Warren-Buffett-teaching-valuable-lessons-COVID-19-airline-stocks-sell-business-investment.jpg',
    },
    {
      name: 'Bernard Arnault',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg/1200px-Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg',
    },
  ]);

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction);

    if (direction === 'left') {
      console.log('no');
    } else {
      console.log('oh yea');
    }
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen');
  };
  return (
    <div className='tinderCards__cardContainer'>
      {people.map((person) => (
        <TinderCard
          className='swipe'
          key={person.name}
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen(person.name)}
          preventSwipe={['up', 'down']}>
          <div style={{ backgroundImage: `url(${person.url})` }} className='card'>
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
