export const isValidDate = (dateString: string): boolean => {
  const [days, month, year] = dateString.split("/");
  const date = new Date(`${year}/${month}/${days}`);

  const checkIfDate = (): boolean => !Number.isNaN(date.valueOf());
  const checkIfCorrect = (): boolean => date.getDate() === Number(days);

  return checkIfDate() && checkIfCorrect();
};
