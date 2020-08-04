const convertNumberToTime = (number) => {
  let time = "";
  const hours = Math.floor(number / 60);
  const minutes = number - hours * 60;
  if (hours >= 1) {
    time += `${hours} hour `;
  }
  if (minutes > 0) {
    time += `${minutes} min`;
  }

  return time;
};

export default convertNumberToTime;
