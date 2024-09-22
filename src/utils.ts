export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const formatDate = (inputDate: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const formattedDate: string = new Date(inputDate).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};
