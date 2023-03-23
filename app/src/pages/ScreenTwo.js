import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const ScreenTwo = function () {
  const { previousText, finalTextArray } = useSelector(({ form }) => {
    return form;
  });

  let previousString = null;

  const cards = finalTextArray.map((string, index) => {
    const isIdentical = string === previousString;
    previousString = string;

    return (
      <Card
        identicalClass={isIdentical ? 'card-repeated' : ''}
        key={index}
        string={string}
        index={index}
      />
    );
  });

  // Returns a Boolean if the array length matches the Set size
  // Note:(no repeated values are in Sets)
  const noRepeatedStrings =
    finalTextArray.length === new Set(finalTextArray).size;

  return (
    <section className="screen-two">
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>

        <div>
          {noRepeatedStrings ? (
            <>
              <h2>Success</h2>
              <h3>
                PreviousString: {previousText} <br />
                Resultant String: {finalTextArray.join('')}
              </h3>
            </>
          ) : (
            <h2>Includes Duplicate Strings {`${finalTextArray.join('')}`}</h2>
          )}
        </div>
      </div>

      <div className="card-list">{cards}</div>
    </section>
  );
};

export default ScreenTwo;
