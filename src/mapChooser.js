/** @format */

function mapChooser(fileName) {
  if (!fileName) {
    return 'default.jpg';
  }
  return fileName + '.jpg';
}

export default mapChooser;
