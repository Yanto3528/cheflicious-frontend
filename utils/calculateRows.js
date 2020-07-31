const calculateRows = (element, minRows = 1, maxRows = 5) => {
  // Line Height from styles
  const lineHeight = 15;
  // Padding vertical for textarea
  const paddingVertical = 30;

  const previousRows = element.rows;
  element.rows = minRows; // reset number of rows in textarea

  // Calculate textarea height
  const textareaScrollHeight = element.scrollHeight - paddingVertical;

  // Calculate current rows
  const currentRows = ~~(textareaScrollHeight / lineHeight);

  if (currentRows === previousRows) {
    element.rows = currentRows;
  }

  if (currentRows >= maxRows) {
    element.rows = maxRows;
    element.scrollTop = element.scrollHeight;
  }
  return currentRows < maxRows ? currentRows : maxRows;
};

export default calculateRows;
