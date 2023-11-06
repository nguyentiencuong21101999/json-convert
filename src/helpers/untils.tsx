export const getFullDateAndTimeToDay = (timeParse?: Date): string => {
  const today = timeParse ? timeParse : new Date();
  const date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1;
  const year = today.getFullYear();
  const hour =
    today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  const minute =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();

  const second =
    today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();
  const day = `${date}/${month}/${year}`;
  const time = `${hour}:${minute}:${second}`;

  return `${time} - ${day}`;
};

export const convertNumber = (value: number) => {
  if (value >= 1000) {
    var suffixes = ["", "k", "m", "b", "t"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue: number | string = parseFloat(
      (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
        2
      )
    );
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
  }
  return value;
};
