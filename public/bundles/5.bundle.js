webpackJsonp([5],{

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.fetchEpisode = exports.removeEpisode = exports.updateEpisode = exports.fetchEpisodes = exports.createEpisode = undefined;var _actions = __webpack_require__(15);







var createEpisode = function createEpisode(data) {return function (dispatch) {
    dispatch({
      type: _actions.CREATE_EPISODE,
      payload: data });

  };};

var fetchEpisodes = function fetchEpisodes(seasonId) {return function (dispatch) {
    dispatch({
      type: _actions.FETCH_EPISODES,
      seasonId: seasonId });

  };};

var fetchEpisode = function fetchEpisode(id) {return function (dispatch) {
    dispatch({
      type: _actions.FETCH_EPISODE,
      id: id });

  };};

var updateEpisode = function updateEpisode(id, data) {return function (dispatch) {
    dispatch({
      type: _actions.UPDATE_EPISODE,
      id: id,
      payload: data });

  };};

var removeEpisode = function removeEpisode(id) {return function (dispatch) {
    dispatch({
      type: _actions.REMOVE_EPISODE,
      id: id });

  };};exports.

createEpisode = createEpisode;exports.fetchEpisodes = fetchEpisodes;exports.updateEpisode = updateEpisode;exports.removeEpisode = removeEpisode;exports.fetchEpisode = fetchEpisode;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(0);
var _reactRedux = __webpack_require__(40);

var _episodes = __webpack_require__(1127);
var _common = __webpack_require__(409);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var







EpisodePage = function (_Component) {_inherits(EpisodePage, _Component);function EpisodePage() {_classCallCheck(this, EpisodePage);return _possibleConstructorReturn(this, (EpisodePage.__proto__ || Object.getPrototypeOf(EpisodePage)).apply(this, arguments));}_createClass(EpisodePage, [{ key: 'componentDidMount', value: function componentDidMount()
    {var _props =
      this.props,id = _props.match.params.id,onFetchEpisode = _props.onFetchEpisode;
      onFetchEpisode(id);
    } }, { key: 'render', value: function render()

    {var
      episode = this.props.episode;
      var seasonId = episode ? episode.season : null;

      if (episode) {
        return (
          React.createElement('div', null,
            React.createElement(_common.GoBack, { to: '/seasons/' + seasonId + '/show', label: '\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0441\u043F\u0438\u0441\u043A\u0443 \u0441\u0435\u0440\u0438\u0439' }),
            React.createElement('div', null,
              episode.number, ' ', episode.name)));



      }

      return null;
    } }]);return EpisodePage;}(_react.Component);


var mapStateToProps = function mapStateToProps(state) {return {
    episode: state.episode };};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {return {
    onFetchEpisode: function onFetchEpisode(id) {
      dispatch((0, _episodes.fetchEpisode)(id));
    } };};exports.default =


(0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EpisodePage);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

});