import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import PropTypes from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { Card } from './shared';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <text-display>{item.text}</text-display>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
