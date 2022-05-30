function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as reactRouterDom from "https://cdn.skypack.dev/react-router-dom@6.3.0";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const sounds = [
{
  key: 'Q',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  key: 'W',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  key: 'E',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  key: 'A',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  key: 'S',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  key: 'D',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  key: 'Z',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  key: 'X',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  key: 'C',
  mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];




const App = () => /*#__PURE__*/
React.createElement("div", { id: "drum-machine", className: "container d-flex justify-content-center" }, /*#__PURE__*/
React.createElement("div", { id: "display", className: "display" },
sounds.map((sound, idx) => /*#__PURE__*/
React.createElement(Box, { text: sound.key, key: idx, audio: sound.mp3, id: "display" }))));








class Box extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "play",


    () => {
      this.audio.current.play();
    });this.audio = React.createRef();}

  render() {
    const { text, audio } = this.props;
    return /*#__PURE__*/(
      React.createElement("div", { className: "box text-center drum-pad", onClick: this.play, id: `drum-${text}` },
      text, /*#__PURE__*/
      React.createElement("audio", { ref: this.audio, src: audio, className: "clip", id: text })));


  }}


document.addEventListener('keydown', e => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if (audio) {
    const parent = audio.parentNode;
    parent.classList.add('act');

    audio.play();

    audio.addEventListener('ended', () => {
      parent.classList.remove('act');
    });
  }
});

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));