import { useState } from "react";
import { Card, CardContent, IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    padding: "1rem",
  },
  card: {
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
});

function Screen2(props) {
  const [originalString, setOriginalString] = useState(
    props.location.state.string
  );
  const [string, setString] = useState(props.location.state.string);
  const [success, setSuccess] = useState(false);
  const classes = useStyles();

  function deleteDuplicates(char) {
    const newString = string.split(char).join("");
    setString(newString);

    // check if there are any other duplicates
    const found = newString.indexOf(char) !== -1;
    if (!found) {
      const newOriginalString = originalString.split(char).join("");
      setOriginalString(newOriginalString);
    }
  }

  return (
    <div>
      <IconButton onClick={() => props.history.goBack()}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4">Original String: {originalString}</Typography>
      {success ? (
        <Typography variant="h4">Resultant String: {string}</Typography>
      ) : (
        <div className={classes.cardContainer}>
          {[...string].map((char, index) => (
            <Card
              key={`${char}-${index}`}
              className={classes.card}
              style={{
                backgroundColor: `rgb(${char.charCodeAt(0)}, 100, 100)`,
              }}
            >
              <IconButton onClick={() => deleteDuplicates(char)}>
                <DeleteIcon />
              </IconButton>
              <CardContent>{char}</CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Screen2;
