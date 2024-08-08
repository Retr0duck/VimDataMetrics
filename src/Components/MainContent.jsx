import React from 'react';
import Card from './Card';

function MainContent() {
  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <Card title="Card 1" text="This is a card." />
        </div>
        <div className="col-md-4 mb-4">
          <Card title="Card 2" text="This is another card." />
        </div>
        <div className="col-md-4 mb-4">
          <Card title="Card 3" text="This is a third card." />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
