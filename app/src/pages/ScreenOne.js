import { clearTextInput, updateText } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ScreenOne = function () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get "text" State from Store
  const text = useSelector(({ form }) => {
    return form.text;
  });

  const handleTextChange = function (e) {
    // Update "text" state in formSlice
    dispatch(updateText(e.target.value));
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    // Alert user if the text input is empty or contains white space onye
    if (text === '' || !text.trim().length) {
      alert('Please Provide a non-empty value');
      return;
    }

    // Update "finalText" state in formSlice
    dispatch(clearTextInput());

    // redirect to second screen
    navigate('screenTwo');
  };

  return (
    <section className="screen-one">
      <form onSubmit={handleSubmit}>
        <input value={text} onChange={handleTextChange} type="text" />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default ScreenOne;
