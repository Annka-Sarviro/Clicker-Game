function showOff(elem) {
  elem.style.opacity = `0`;
  elem.style.left = `0px`;
  elem.style.top = `0px`;
  elem.style.width = `0px`;
  elem.style.height = `0px`;
  elem.style.transition = 'opacity 1s ease';
}

export default showOff;
