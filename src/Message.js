import React, { Component } from 'react';

const Message = (props) => {

  console.log('loadMessages: ', props);
  return (
    <div className='container'>
      <div className="row message read selected">
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a href="#">
            { props.message.subject }
          </a>
        </div>
        </div>
    </div>
  );
};

export default Message;
