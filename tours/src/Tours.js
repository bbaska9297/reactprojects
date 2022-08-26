import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  return <section>
    <div className='title'>
      <h2>Our tours</h2>
      <div className='underline'></div>
      <div>
        {tours.map((tour) => {
          //id for unique identification and map is used to display
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
          //to return all params from API we need to use spread operator
        })}
      </div>
    </div>
  </section>;
};

export default Tours;
