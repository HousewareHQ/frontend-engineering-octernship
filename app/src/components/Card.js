import { useDispatch } from 'react-redux';
import { deleteFinalDulicates } from '../store';
import { BsTrash3 } from 'react-icons/bs';

const Card = function ({ identicalClass, string, index }) {
  console.log(identicalClass);
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
    <div className={`${identicalClass} card`}>
      {string}
      <BsTrash3 onClick={handleDelete.bind(this, string, index)} />
    </div>
  );
};

export default Card;
