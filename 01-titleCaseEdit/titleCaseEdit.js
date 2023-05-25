function titleCaseEdit(title) {
  const words = title.toLowerCase().split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const revisedTitle = capitalizedWords.join(' ');
  return revisedTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;
