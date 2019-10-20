import React from 'react';
import CardRowData from '../src/components/common/CardRowData/CardRowData';

export default {
  title: 'SW CardRowData',
};

export const cardRowData = () => {
  return (
    <div>
      <CardRowData label='Firstname: '>Martin</CardRowData>
      <CardRowData label='Lastname: '>Radev</CardRowData>
    </div>
  )
}
