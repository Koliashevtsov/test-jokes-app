import React from 'react';

import './joke-footer.scss';

const JokeFooter = ({ item, view }) => {
  const dateUpdatedMilesec = Date.parse(item.updated_at);
  const dateNowMilisec = Date.now();
  const dif = dateNowMilisec - dateUpdatedMilesec;
  const hoursAgo = Math.round(dif / 3600000) ;

  const clazzName = view === 'small' ? 'sml' : '';
  return (
    <div className="joke-footer">
      <div className="joke-updated">
        Last update: { hoursAgo } hours ago
      </div>
      {
        item.categories[0] &&
        <div className={`categories ${clazzName}`}>
          { item.categories[0] }
        </div>
      }
    </div>
  );
}
export default JokeFooter;
