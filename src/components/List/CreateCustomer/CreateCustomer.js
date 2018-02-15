import React from 'react';
import './CreateCustomer.css';

export default function CreateCustomer({startNewcustomer}) {
  return (
    <div id="CreateCustomerBtn__container">
      <button id="CreateCustomer__btn" onClick={startNewcustomer}> New Customer </button>
    </div>
  )
}
