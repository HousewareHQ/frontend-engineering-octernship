import { useDispatch } from 'react-redux';
import { deleteFinalDulicates } from '../store';
import { BsTrash3 } from 'react-icons/bs';

const Card = function ({ identicalClass, string, index }) {
  const dispatch = useDispatch();

  const handleDelete = function (strValue, strIndex) {
    dispatch(
      deleteFinalDulicates({
        strValue,
        strIndex,
      })
    );
  };

  return (
    <div className={`card ${identicalClass}`}>
      {string}
      <BsTrash3 onClick={handleDelete.bind(this, string, index)} />
    </div>
  );
};

export default Card;
