webpackJsonp([2],{

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Box = exports.Grid = undefined;var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  @media only screen and (min-width: 640px) {\n    margin-left: -15px;\n  }\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  @media only screen and (min-width: 640px) {\n    margin-left: -15px;\n  }\n']),_templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  margin-bottom: 15px;\n  position: relative;\n  &::before {\n    content: \'\';\n    padding-bottom: 150%;\n    display: block;\n  }\n  @media ', ' {\n    width: calc(50% - 15px);\n    margin-left: 15px;\n  }\n  @media ', ' {\n    width: calc(33% - 15px);\n  }\n  @media ', ' {\n    width: calc(25% - 15px);\n  }\n  @media ', ' {\n    width: calc(16.66% - 15px);\n  }\n  @media ', ' {\n    width: calc(12.5% - 15px);\n  }\n  ', ';\n  ', ';\n'], ['\n  width: 100%;\n  margin-bottom: 15px;\n  position: relative;\n  &::before {\n    content: \'\';\n    padding-bottom: 150%;\n    display: block;\n  }\n  @media ', ' {\n    width: calc(50% - 15px);\n    margin-left: 15px;\n  }\n  @media ', ' {\n    width: calc(33% - 15px);\n  }\n  @media ', ' {\n    width: calc(25% - 15px);\n  }\n  @media ', ' {\n    width: calc(16.66% - 15px);\n  }\n  @media ', ' {\n    width: calc(12.5% - 15px);\n  }\n  ', ';\n  ', ';\n']),_templateObject3 = _taggedTemplateLiteral(['\n      width: 50%;\n      @media ', ' {\n        width: calc(33% - 15px);\n      }\n      @media ', ' {\n        width: calc(25% - 15px);\n      }\n      @media ', ' {\n        width: calc(16.66% - 15px);\n      }\n      @media ', ' {\n        width: calc(12.5% - 15px);\n      }\n      @media ', ' {\n        width: calc(10% - 15px);\n      }\n    '], ['\n      width: 50%;\n      @media ', ' {\n        width: calc(33% - 15px);\n      }\n      @media ', ' {\n        width: calc(25% - 15px);\n      }\n      @media ', ' {\n        width: calc(16.66% - 15px);\n      }\n      @media ', ' {\n        width: calc(12.5% - 15px);\n      }\n      @media ', ' {\n        width: calc(10% - 15px);\n      }\n    ']),_templateObject4 = _taggedTemplateLiteral(['\n      &::before {\n        content: \'\';\n        padding-bottom: 75%;\n        display: block;\n      }\n    '], ['\n      &::before {\n        content: \'\';\n        padding-bottom: 75%;\n        display: block;\n      }\n    ']);var _styledComponents = __webpack_require__(173);var _styledComponents2 = _interopRequireDefault(_styledComponents);
var _media = __webpack_require__(1113);var _media2 = _interopRequireDefault(_media);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _taggedTemplateLiteral(strings, raw) {return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));}

var Grid = _styledComponents2.default.ul(_templateObject);







var Box = _styledComponents2.default.li(_templateObject2,








_media2.default.mobile,



_media2.default.tablet,


_media2.default.laptop,


_media2.default.desktop,


_media2.default.giant,


function (props) {return (
    props.small && (0, _styledComponents.css)(_templateObject3,


    _media2.default.mobile,


    _media2.default.tablet,


    _media2.default.laptop,


    _media2.default.desktop,


    _media2.default.giant));},



function (props) {return (
    props.orientation === 'gorizontal' && (0, _styledComponents.css)(_templateObject4));});exports.









Grid = Grid;exports.Box = Box;

/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _RaisedButton = __webpack_require__(1110);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RaisedButton2.default;

/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(10);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(6);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(8);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(17);

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__(91);

var _EnhancedButton = __webpack_require__(71);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _Paper = __webpack_require__(72);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (true) {
    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
    }
  }
}

function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      button = _context$muiTheme.button,
      raisedButton = _context$muiTheme.raisedButton,
      borderRadius = _context$muiTheme.borderRadius;
  var disabled = props.disabled,
      disabledBackgroundColor = props.disabledBackgroundColor,
      disabledLabelColor = props.disabledLabelColor,
      fullWidth = props.fullWidth,
      icon = props.icon,
      label = props.label,
      labelPosition = props.labelPosition,
      primary = props.primary,
      secondary = props.secondary,
      style = props.style;


  var amount = primary || secondary ? 0.4 : 0.08;

  var backgroundColor = raisedButton.color;
  var labelColor = raisedButton.textColor;

  if (disabled) {
    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
  } else if (primary) {
    backgroundColor = raisedButton.primaryColor;
    labelColor = raisedButton.primaryTextColor;
  } else if (secondary) {
    backgroundColor = raisedButton.secondaryColor;
    labelColor = raisedButton.secondaryTextColor;
  } else {
    if (props.backgroundColor) {
      backgroundColor = props.backgroundColor;
    }
    if (props.labelColor) {
      labelColor = props.labelColor;
    }
  }

  var buttonHeight = style && style.height || button.height;

  return {
    root: {
      display: 'inline-block',
      transition: _transitions2.default.easeOut(),
      minWidth: fullWidth ? '100%' : button.minWidth
    },
    button: {
      height: buttonHeight,
      lineHeight: buttonHeight + 'px',
      width: '100%',
      padding: 0,
      borderRadius: borderRadius,
      transition: _transitions2.default.easeOut(),
      backgroundColor: backgroundColor,
      // That's the default value for a button but not a link
      textAlign: 'center'
    },
    label: {
      position: 'relative',
      opacity: 1,
      fontSize: raisedButton.fontSize,
      letterSpacing: 0,
      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
      fontWeight: raisedButton.fontWeight,
      margin: 0,
      userSelect: 'none',
      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      color: labelColor
    },
    icon: {
      verticalAlign: 'middle',
      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
      marginRight: label && labelPosition === 'before' ? 12 : 0
    },
    overlay: {
      height: buttonHeight,
      borderRadius: borderRadius,
      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
      transition: _transitions2.default.easeOut(),
      top: 0
    },
    ripple: {
      color: labelColor,
      opacity: !(primary || secondary) ? 0.1 : 0.16
    }
  };
}

var RaisedButton = function (_Component) {
  (0, _inherits3.default)(RaisedButton, _Component);

  function RaisedButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RaisedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      keyboardFocused: false,
      touched: false,
      initialZDepth: 0,
      zDepth: 0
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.setState({
          zDepth: _this.state.initialZDepth + 1
        });
      }
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }
    }, _this.handleMouseUp = function (event) {
      _this.setState({
        zDepth: _this.state.initialZDepth
      });
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.state.keyboardFocused) {
        _this.setState({
          zDepth: _this.state.initialZDepth,
          hovered: false
        });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.state.keyboardFocused && !_this.state.touched) {
        _this.setState({
          hovered: true
        });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth + 1
      });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleTouchEnd = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth
      });

      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;

      _this.setState({
        zDepth: zDepth,
        keyboardFocused: keyboardFocused
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RaisedButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var zDepth = this.props.disabled ? 0 : 1;
      this.setState({
        zDepth: zDepth,
        initialZDepth: zDepth
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var zDepth = nextProps.disabled ? 0 : 1;
      var nextState = {
        zDepth: zDepth,
        initialZDepth: zDepth
      };

      if (nextProps.disabled) {
        nextState.hovered = false;
      }

      this.setState(nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          buttonStyle = _props.buttonStyle,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          disabledBackgroundColor = _props.disabledBackgroundColor,
          disabledLabelColor = _props.disabledLabelColor,
          fullWidth = _props.fullWidth,
          icon = _props.icon,
          label = _props.label,
          labelColor = _props.labelColor,
          labelPosition = _props.labelPosition,
          labelStyle = _props.labelStyle,
          overlayStyle = _props.overlayStyle,
          primary = _props.primary,
          rippleStyle = _props.rippleStyle,
          secondary = _props.secondary,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);

      var buttonEventHandlers = disabled ? {} : {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onKeyboardFocus: this.handleKeyboardFocus
      };

      var labelElement = label && _react2.default.createElement(
        'span',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)), key: 'labelElement' },
        label
      );

      var iconCloned = icon && (0, _react.cloneElement)(icon, {
        color: icon.props.color || styles.label.color,
        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style),
        key: 'iconCloned'
      });

      // Place label before or after children.
      var enhancedButtonChildren = labelPosition === 'before' ? [labelElement, iconCloned, children] : [children, iconCloned, labelElement];

      return _react2.default.createElement(
        _Paper2.default,
        {
          className: className,
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: this.state.zDepth
        },
        _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({}, other, buttonEventHandlers, {
            ref: 'container',
            disabled: disabled,
            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
            focusRippleColor: mergedRippleStyles.color,
            touchRippleColor: mergedRippleStyles.color,
            focusRippleOpacity: mergedRippleStyles.opacity,
            touchRippleOpacity: mergedRippleStyles.opacity
          }),
          _react2.default.createElement(
            'div',
            {
              ref: 'overlay',
              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
            },
            enhancedButtonChildren
          )
        )
      );
    }
  }]);
  return RaisedButton;
}(_react.Component);

RaisedButton.muiName = 'RaisedButton';
RaisedButton.defaultProps = {
  disabled: false,
  labelPosition: 'after',
  fullWidth: false,
  primary: false,
  secondary: false
};
RaisedButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
RaisedButton.propTypes =  true ? {
  /**
   * Override the default background color for the button,
   * but not the default disabled background color
   * (use `disabledBackgroundColor` for this).
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _propTypes2.default.object,
  /**
   * The content of the button.
   * If a label is provided via the `label` prop, the text within the label
   * will be displayed in addition to the content provided here.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
    * The element to use as the container for the RaisedButton. Either a string to
    * use a DOM element or a ReactElement. This is useful for wrapping the
    * RaisedButton in a custom Link component. If a ReactElement is given, ensure
    * that it passes all of its given props through to the underlying DOM
    * element and renders its children prop for proper integration.
    */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * If true, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the default background color for the button
   * when it is disabled.
   */
  disabledBackgroundColor: _propTypes2.default.string,
  /**
   * The color of the button's label when the button is disabled.
   */
  disabledLabelColor: _propTypes2.default.string,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * An icon to be displayed within the button.
   */
  icon: _propTypes2.default.node,
  /**
   * The label to be displayed within the button.
   * If content is provided via the `children` prop, that content will be
   * displayed in addition to the label provided here.
   */
  label: validateLabel,
  /**
   * The color of the button's label.
   */
  labelColor: _propTypes2.default.string,
  /**
   * The position of the button's label relative to the button's `children`.
   */
  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function fired when the button is clicked.
   *
   * @param {object} event Click event targeting the button.
   */
  onClick: _propTypes2.default.func,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Override the inline style of the button overlay.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's primary color.
   */
  primary: _propTypes2.default.bool,
  /**
   * Override the inline style of the ripple element.
   */
  rippleStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's secondary color.
   * If both `secondary` and `primary` are true, the button will use
   * the theme's primary color.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = RaisedButton;

/***/ }),

/***/ 1111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _api = __webpack_require__(29);

var noImage = __webpack_require__(1117);

var getCover = function getCover(cover) {return cover ? _api.BASE_URL + '/' + cover.path : noImage;};exports.default =

getCover;

/***/ }),

/***/ 1112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.formDataFormatter = exports.extractedIdsObj = exports.extractIds = undefined;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};var _lodash = __webpack_require__(130);

// Необходимо получить массив из айдишников
// [{ _id: 123, name: 'Name1' }, { _id: 456, name: 'Name2' }] => [123, 456]
var extractIds = function extractIds(arr) {return arr.map(function (_ref) {var _id = _ref._id;return _id;});};

// TODO: Нечитаемая функция - непонятно что делает и как
// перебираем объект, находим в нем массивы, мапим
// Необходимо отформатировать объект так, чтобы все массивы
// с объектами, которые в нем содержатся превратились в массивы айдишников
// этих объектов
// {
//   directors: [{ _id: 123, name: 'Name1' }, { _id: 456, name: 'Name2' }], => directors: [123, 456]
//   countries: [{ _id: 321, name: 'Country1' }, { _id: 654, name: 'Country2' }] => [321, 654]
// }

var extractedIdsObj = function extractedIdsObj(obj) {
  var newObj = {};
  (0, _lodash.forIn)(obj, function (value, key) {
    if (Array.isArray(value)) {
      newObj[key] = extractIds(value);
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      newObj[key] = obj[key] && obj[key]._id ? obj[key]._id : obj[key];
    } else {
      newObj[key] = value;
    }
  });
  return newObj;
};

var formDataFormatter = function formDataFormatter(data) {
  if (data.cover instanceof File) {var
    cover = data.cover;
    (0, _lodash.unset)(data, 'cover');
    var stringData = JSON.stringify(extractedIdsObj(data));

    console.log('stringData', stringData);

    var form = new FormData();
    form.append('cover', cover);
    form.append('data', stringData);
    return form;
  }
  var sendData = extractedIdsObj(data);
  return { data: JSON.stringify(sendData) };
};exports.

extractIds = extractIds;exports.extractedIdsObj = extractedIdsObj;exports.formDataFormatter = formDataFormatter;

/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var sizes = {
  mobile: 640,
  tablet: 960,
  laptop: 1280,
  desktop: 1600,
  giant: 1920 };


var media = {
  mobile: "only screen and (min-width: " + sizes.mobile + "px)",
  tablet: "only screen and (min-width: " + sizes.tablet + "px)",
  laptop: "only screen and (min-width: " + sizes.laptop + "px)",
  desktop: "only screen and (min-width: " + sizes.desktop + "px)",
  giant: "only screen and (min-width: " + sizes.giant + "px)" };exports.default =


media;

/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {Object.defineProperty(exports, "__esModule", { value: true });var _reactRouterDom = __webpack_require__(175);
var _reactTippy = __webpack_require__(1115);

var _CoversGrid = __webpack_require__(1108);
var _cover = __webpack_require__(1111);var _cover2 = _interopRequireDefault(_cover);
var _cropper = __webpack_require__(1118);var _cropper2 = _interopRequireDefault(_cropper);

var _Controls = __webpack_require__(1119);var _Controls2 = _interopRequireDefault(_Controls);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var coverStyles = function coverStyles(cover) {return {
    backgroundImage: 'url(' + (0, _cover2.default)(cover) + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover' };};


var nameLinkStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0 };


var nameStyle = {
  color: '#fff',
  padding: '0 20px',
  textDecoration: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  width: '100%',
  fontSize: '1.2em',
  lineHeight: '1.2em',
  height: 80,
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0 };













var Cover = function Cover(_ref) {var
  cover = _ref.cover,id = _ref.id,name = _ref.name,showPath = _ref.showPath,remove = _ref.remove,edit = _ref.edit,small = _ref.small,orientation = _ref.orientation;return (

    React.createElement(_CoversGrid.Box, { style: coverStyles(cover), small: small, orientation: orientation },
      React.createElement(_Controls2.default, {
        onRemove: function onRemove() {
          remove(id);
        },
        onEdit: function onEdit() {
          edit(id);
        } }),

      React.createElement(_reactRouterDom.Link, { to: showPath, href: showPath, style: nameLinkStyle },
        React.createElement(_reactTippy.Tooltip, { title: name, style: nameStyle },
          React.createElement('span', null, (0, _cropper2.default)(name, 25))))));};





Cover.defaultProps = {
  remove: false,
  edit: false,
  small: false,
  cover: null,
  orientation: 'vertical' // 'gorizontal'
};exports.default =

Cover;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0), __webpack_require__(1116), __webpack_require__(23));
	else if(typeof define === 'function' && define.amd)
		define("reactTippy", ["react", "popper.js", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["reactTippy"] = factory(require("react"), require("popper.js"), require("react-dom"));
	else
		root["reactTippy"] = factory(root["React"], root["Popper"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_38__, __WEBPACK_EXTERNAL_MODULE_39__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Browser = exports.Browser = {};

if (typeof window !== 'undefined') {
  Browser.SUPPORTED = 'requestAnimationFrame' in window;
  Browser.SUPPORTS_TOUCH = 'ontouchstart' in window;
  Browser.touch = false;
  Browser.dynamicInputDetection = true;
  // Chrome device/touch emulation can make this dynamic
  Browser.iOS = function () {
    return (/iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream
    );
  };
}

/**
* The global storage array which holds all data reference objects
* from every instance
* This allows us to hide tooltips from all instances, finding the ref when
* clicking on the body, and for followCursor
*/
var Store = exports.Store = [];

/**
* Selector constants used for grabbing elements
*/
var Selectors = exports.Selectors = {
  POPPER: '.tippy-popper',
  TOOLTIP: '.tippy-tooltip',
  CONTENT: '.tippy-tooltip-content',
  CIRCLE: '[x-circle]',
  ARROW: '[x-arrow]',
  TOOLTIPPED_EL: '[data-tooltipped]',
  CONTROLLER: '[data-tippy-controller]'
};

/**
* The default settings applied to each instance
*/
var Defaults = exports.Defaults = {
  html: false,
  position: 'top',
  animation: 'shift',
  animateFill: true,
  arrow: false,
  arrowSize: 'regular',
  delay: 0,
  trigger: 'mouseenter focus',
  duration: 350,
  interactive: false,
  interactiveBorder: 2,
  theme: 'dark',
  size: 'regular',
  distance: 10,
  offset: 0,
  hideOnClick: true,
  multiple: false,
  followCursor: false,
  inertia: false,
  flipDuration: 350,
  sticky: false,
  stickyDuration: 200,
  appendTo: function appendTo() {
    return document.body;
  },
  zIndex: 9999,
  touchHold: false,
  performance: false,
  dynamicTitle: false,
  useContext: false,
  reactInstance: undefined,
  popperOptions: {},
  open: undefined,
  onRequestClose: function onRequestClose() {}
};

/**
* The keys of the defaults object for reducing down into a new object
* Used in `getIndividualSettings()`
*/
var DefaultsKeys = exports.DefaultsKeys = Browser.SUPPORTED && Object.keys(Defaults);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefix;
/**
* Returns the supported prefixed property - only `webkit` is needed, `moz`, `ms` and `o` are obsolete
* @param {String} property
* @return {String} - browser supported prefixed property
*/
function prefix(property) {
  var prefixes = [false, 'webkit'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var _prefix = prefixes[i];
    var prefixedProp = _prefix ? '' + _prefix + upperProp : property;
    if (typeof window.document.body.style[prefixedProp] !== 'undefined') {
      return prefixedProp;
    }
  }

  return null;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;
/**
* Ponyfill for Array.prototype.find
* @param {Array} arr
* @param {Function} checkFn
* @return item in the array
*/
function find(arr, checkFn) {
  if (Array.prototype.find) {
    return arr.find(checkFn);
  }

  // use `filter` as fallback
  return arr.filter(checkFn)[0];
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCorePlacement;
/**
* Returns the non-shifted placement (e.g., 'bottom-start' => 'bottom')
* @param {String} placement
* @return {String}
*/
function getCorePlacement(placement) {
  return placement.replace(/-.+/, '');
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closest;

var _matches = __webpack_require__(8);

/**
* Ponyfill to get the closest parent element
* @param {Element} element - child of parent to be returned
* @param {String} parentSelector - selector to match the parent if found
* @return {Element}
*/
function closest(element, parentSelector) {
  var _closest = Element.prototype.closest || function (selector) {
    var el = this;
    while (el) {
      if (_matches.matches.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
  };

  return _closest.call(element, parentSelector);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defer;
/**
* Waits until next repaint to execute a fn
* @param {Function} fn
*/
function defer(fn) {
  window.requestAnimationFrame(function () {
    setTimeout(fn, 0);
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInnerElements;

var _globals = __webpack_require__(0);

/**
* Returns inner elements of the popper element
* @param {Element} popper
* @return {Object}
*/
function getInnerElements(popper) {
  return {
    tooltip: popper.querySelector(_globals.Selectors.TOOLTIP),
    circle: popper.querySelector(_globals.Selectors.CIRCLE),
    content: popper.querySelector(_globals.Selectors.CONTENT)
  };
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isVisible;
/**
* Determines if a popper is currently visible
* @param {Element} popper
* @return {Boolean}
*/
function isVisible(popper) {
  return popper.style.visibility === 'visible';
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function defaultMatchSelector(s) {
  var matches = (this.document || this.ownerDocument).querySelectorAll(s),
      i = matches.length;
  while (--i >= 0 && matches.item(i) !== this) {}
  return i > -1;
}

var matches = exports.matches = typeof window === 'undefined' ? defaultMatchSelector : Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || defaultMatchSelector;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _tippy = __webpack_require__(30);

var _tippy2 = _interopRequireDefault(_tippy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  html: null,
  position: 'top',
  animation: 'shift',
  animateFill: true,
  arrow: false,
  delay: 0,
  hideDelay: 0,
  trigger: 'mouseenter focus',
  duration: 375,
  hideDuration: 375,
  interactive: false,
  interactiveBorder: 2,
  theme: 'dark',
  offset: 0,
  hideOnClick: true,
  multiple: false,
  followCursor: false,
  inertia: false,
  popperOptions: {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onHide: function onHide() {},
  onHidden: function onHidden() {},
  disabled: false,
  arrowSize: 'regular',
  size: 'regular',
  className: '',
  style: {},
  distance: 10,
  onRequestClose: function onRequestClose() {},
  sticky: false,
  stickyDuration: 200,
  touchHold: false,
  unmountHTMLWhenHide: false
};

var propKeys = Object.keys(defaultProps);

var detectPropsChanged = function detectPropsChanged(props, prevProps) {
  var result = [];
  propKeys.forEach(function (key) {
    if (props[key] !== prevProps[key]) {
      result.push(key);
    }
  });
  return result;
};

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));

    _this.initTippy = _this._initTippy.bind(_this);
    _this.destroyTippy = _this._destroyTippy.bind(_this);
    _this.updateTippy = _this._updateTippy.bind(_this);
    _this.updateReactDom = _this._updateReactDom.bind(_this);
    _this.showTooltip = _this._showTooltip.bind(_this);
    _this.hideTooltip = _this._hideTooltip.bind(_this);
    _this.updateSettings = _this._updateSettings.bind(_this);
    return _this;
  }

  _createClass(Tooltip, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      this.initTippy();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      this.destroyTippy();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      // enable and disabled
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.props.disabled === false && prevProps.disabled === true) {
        this.updateSettings('disabled', false);
        this.destroyTippy();
        this.initTippy();
        return;
      }

      if (this.props.disabled === true && prevProps.disabled === false) {
        this.updateSettings('disabled', true);
        this.destroyTippy();
        return;
      }

      // open
      if (this.props.open === true && !prevProps.open) {
        this.updateSettings('open', true);
        setTimeout(function () {
          _this2.showTooltip();
        }, 0);
      }
      if (this.props.open === false && prevProps.open === true) {
        this.updateSettings('open', false);
        this.hideTooltip();
      }

      if (this.props.html !== prevProps.html) {
        this.updateReactDom();
      }

      // Update content
      if (this.props.title !== prevProps.title) {
        this.updateTippy();
      }

      // update otherProps
      var propChanges = detectPropsChanged(this.props, prevProps);
      propChanges.forEach(function (key) {
        _this2.updateSettings(key, _this2.props[key]);
      });
    }
  }, {
    key: '_showTooltip',
    value: function _showTooltip() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.show(popper, this.props.duration);
      }
    }
  }, {
    key: '_hideTooltip',
    value: function _hideTooltip() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.hide(popper, this.props.hideDuration);
      }
    }
  }, {
    key: '_updateSettings',
    value: function _updateSettings(name, value) {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.updateSettings(popper, name, value);
      }
    }
  }, {
    key: '_updateReactDom',
    value: function _updateReactDom() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        this.updateSettings('reactDOM', this.props.html);
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        var isVisible = popper.style.visibility === 'visible' || this.props.open;
        if (isVisible) {
          this.tippy.updateForReact(popper, this.props.html);
        }
      }
    }
  }, {
    key: '_updateTippy',
    value: function _updateTippy() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.tippy.update(popper);
      }
    }
  }, {
    key: '_initTippy',
    value: function _initTippy() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (!this.props.disabled) {
        this.tooltipDOM.setAttribute('title', this.props.title);
        this.tippy = (0, _tippy2.default)(this.tooltipDOM, {
          disabled: this.props.disabled,
          position: this.props.position,
          animation: this.props.animation,
          animateFill: this.props.animateFill,
          arrow: this.props.arrow,
          arrowSize: this.props.arrowSize,
          delay: this.props.delay,
          hideDelay: this.props.hideDelay,
          trigger: this.props.trigger,
          duration: this.props.duration,
          hideDuration: this.props.hideDuration,
          interactive: this.props.interactive,
          interactiveBorder: this.props.interactiveBorder,
          theme: this.props.theme,
          offset: this.props.offset,
          hideOnClick: this.props.hideOnClick,
          multiple: this.props.multiple,
          size: this.props.size,
          followCursor: this.props.followCursor,
          inertia: this.props.inertia,
          popperOptions: this.props.popperOptions,
          onShow: this.props.onShow,
          onShown: this.props.onShown,
          onHide: this.props.onHide,
          onHidden: this.props.onHidden,
          distance: this.props.distance,
          reactDOM: this.props.html,
          unmountHTMLWhenHide: this.props.unmountHTMLWhenHide,
          open: this.props.open,
          sticky: this.props.sticky,
          stickyDuration: this.props.stickyDuration,
          touchHold: this.props.touchHold,
          onRequestClose: this.props.onRequestClose,
          useContext: this.props.useContext,
          reactInstance: this.props.useContext ? this : undefined,
          performance: true,
          html: this.props.rawTemplate ? this.props.rawTemplate : undefined
        });
        if (this.props.open) {
          this.showTooltip();
        }
      } else {
        this.tippy = null;
      }
    }
  }, {
    key: '_destroyTippy',
    value: function _destroyTippy() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return;
      }
      if (this.tippy) {
        var popper = this.tippy.getPopperElement(this.tooltipDOM);
        this.updateSettings('open', false);
        this.tippy.hide(popper, 0);
        this.tippy.destroy(popper);
        this.tippy = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(tooltip) {
            _this3.tooltipDOM = tooltip;
          },
          title: this.props.title,
          className: this.props.className,
          tabIndex: this.props.tabIndex,
          style: _extends({
            display: 'inline'
          }, this.props.style)
        },
        this.props.children
      );
    }
  }]);

  return Tooltip;
}(_react.Component);

Tooltip.defaultProps = defaultProps;

exports.default = Tooltip;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = followCursorHandler;

var _globals = __webpack_require__(0);

var _getCorePlacement = __webpack_require__(3);

var _getCorePlacement2 = _interopRequireDefault(_getCorePlacement);

var _find = __webpack_require__(2);

var _find2 = _interopRequireDefault(_find);

var _prefix = __webpack_require__(1);

var _prefix2 = _interopRequireDefault(_prefix);

var _closest = __webpack_require__(4);

var _closest2 = _interopRequireDefault(_closest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Mousemove event listener callback method for follow cursor setting
* @param {MouseEvent} e
*/
function followCursorHandler(e) {
  var _this = this;

  var refData = (0, _find2.default)(_globals.Store, function (refData) {
    return refData.el === _this;
  });

  var popper = refData.popper,
      offset = refData.settings.offset;


  var position = (0, _getCorePlacement2.default)(popper.getAttribute('x-placement'));
  var halfPopperWidth = Math.round(popper.offsetWidth / 2);
  var halfPopperHeight = Math.round(popper.offsetHeight / 2);
  var viewportPadding = 5;
  var pageWidth = document.documentElement.offsetWidth || document.body.offsetWidth;

  var pageX = e.pageX,
      pageY = e.pageY;


  var x = void 0,
      y = void 0;

  switch (position) {
    case 'top':
      x = pageX - halfPopperWidth + offset;
      y = pageY - 2.25 * halfPopperHeight;
      break;
    case 'left':
      x = pageX - 2 * halfPopperWidth - 10;
      y = pageY - halfPopperHeight + offset;
      break;
    case 'right':
      x = pageX + halfPopperHeight;
      y = pageY - halfPopperHeight + offset;
      break;
    case 'bottom':
      x = pageX - halfPopperWidth + offset;
      y = pageY + halfPopperHeight / 1.5;
      break;
  }

  var isRightOverflowing = pageX + viewportPadding + halfPopperWidth + offset > pageWidth;
  var isLeftOverflowing = pageX - viewportPadding - halfPopperWidth + offset < 0;

  // Prevent left/right overflow
  if (position === 'top' || position === 'bottom') {
    if (isRightOverflowing) {
      x = pageWidth - viewportPadding - 2 * halfPopperWidth;
    }

    if (isLeftOverflowing) {
      x = viewportPadding;
    }
  }

  popper.style[(0, _prefix2.default)('transform')] = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOffsetDistanceInPx;

var _globals = __webpack_require__(0);

/**
* Returns the distance taking into account the default distance due to
* the transform: translate setting in CSS
* @param {Number} distance
* @return {String}
*/
function getOffsetDistanceInPx(distance) {
  return -(distance - _globals.Defaults.distance) + 'px';
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTitle;
/**
* Removes the title from the tooltipped element, setting `data-original-title`
* appropriately
* @param {Element} el
*/
function removeTitle(el) {
  var title = el.getAttribute('title');

  // Only set `data-original-title` attr if there is a title
  if (title) {
    el.setAttribute('data-original-title', title);
  }

  el.removeAttribute('title');
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(13);

var _react2 = _interopRequireDefault(_react);

var _component = __webpack_require__(9);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var withTooltip = function withTooltip(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (_ref) {
    var props = _objectWithoutProperties(_ref, []);

    return _react2.default.createElement(
      _component2.default,
      options,
      _react2.default.createElement(Component, props)
    );
  };
};

exports.default = withTooltip;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTooltip = exports.Tooltip = undefined;

var _component = __webpack_require__(9);

var _component2 = _interopRequireDefault(_component);

var _hoc = __webpack_require__(14);

var _hoc2 = _interopRequireDefault(_hoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tooltip = _component2.default;
exports.withTooltip = _hoc2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindEventListeners;

var _globals = __webpack_require__(0);

var _hideAllPoppers = __webpack_require__(25);

var _hideAllPoppers2 = _interopRequireDefault(_hideAllPoppers);

var _closest = __webpack_require__(4);

var _closest2 = _interopRequireDefault(_closest);

var _find = __webpack_require__(2);

var _find2 = _interopRequireDefault(_find);

var _matches = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Adds the needed event listeners
*/
function bindEventListeners() {
  var touchHandler = function touchHandler() {
    _globals.Browser.touch = true;

    if (_globals.Browser.iOS()) {
      document.body.classList.add('tippy-touch');
    }

    if (_globals.Browser.dynamicInputDetection && window.performance) {
      document.addEventListener('mousemove', mousemoveHandler);
    }
  };

  var mousemoveHandler = function () {
    var time = void 0;

    return function () {
      var now = performance.now();

      // Chrome 60+ is 1 mousemove per rAF, use 20ms time difference
      if (now - time < 20) {
        _globals.Browser.touch = false;
        document.removeEventListener('mousemove', mousemoveHandler);
        if (!_globals.Browser.iOS()) {
          document.body.classList.remove('tippy-touch');
        }
      }

      time = now;
    };
  }();

  var clickHandler = function clickHandler(event) {
    // Simulated events dispatched on the document
    if (!(event.target instanceof Element)) {
      return (0, _hideAllPoppers2.default)();
    }

    var el = (0, _closest2.default)(event.target, _globals.Selectors.TOOLTIPPED_EL);
    var popper = (0, _closest2.default)(event.target, _globals.Selectors.POPPER);

    if (popper) {
      var ref = (0, _find2.default)(_globals.Store, function (ref) {
        return ref.popper === popper;
      });
      var interactive = ref.settings.interactive;

      if (interactive) return;
    }

    if (el) {
      var _ref = (0, _find2.default)(_globals.Store, function (ref) {
        return ref.el === el;
      });
      var _ref$settings = _ref.settings,
          hideOnClick = _ref$settings.hideOnClick,
          multiple = _ref$settings.multiple,
          trigger = _ref$settings.trigger;

      // Hide all poppers except the one belonging to the element that was clicked IF
      // `multiple` is false AND they are a touch user, OR
      // `multiple` is false AND it's triggered by a click

      if (!multiple && _globals.Browser.touch || !multiple && trigger.indexOf('click') !== -1) {
        return (0, _hideAllPoppers2.default)(_ref);
      }

      // If hideOnClick is not strictly true or triggered by a click don't hide poppers
      if (hideOnClick !== true || trigger.indexOf('click') !== -1) return;
    }

    // Don't trigger a hide for tippy controllers, and don't needlessly run loop
    if ((0, _closest2.default)(event.target, _globals.Selectors.CONTROLLER) || !document.querySelector(_globals.Selectors.POPPER)) return;

    (0, _hideAllPoppers2.default)();
  };

  var blurHandler = function blurHandler(event) {
    var _document = document,
        el = _document.activeElement;

    if (el && el.blur && _matches.matches.call(el, _globals.Selectors.TOOLTIPPED_EL)) {
      el.blur();
    }
  };

  // Hook events
  document.addEventListener('click', clickHandler);
  document.addEventListener('touchstart', touchHandler);
  window.addEventListener('blur', blurHandler);

  if (!_globals.Browser.SUPPORTS_TOUCH && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)) {
    document.addEventListener('pointerdown', touchHandler);
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPopperElement;

var _getCorePlacement = __webpack_require__(3);

var _getCorePlacement2 = _interopRequireDefault(_getCorePlacement);

var _getOffsetDistanceInPx = __webpack_require__(11);

var _getOffsetDistanceInPx2 = _interopRequireDefault(_getOffsetDistanceInPx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Creates a popper element then returns it
* @param {Number} id - the popper id
* @param {String} title - the tooltip's `title` attribute
* @param {Object} settings - individual settings
* @return {Element} - the popper element
*/
function createPopperElement(id, title, settings) {
  var position = settings.position,
      distance = settings.distance,
      arrow = settings.arrow,
      animateFill = settings.animateFill,
      inertia = settings.inertia,
      animation = settings.animation,
      arrowSize = settings.arrowSize,
      size = settings.size,
      theme = settings.theme,
      html = settings.html,
      zIndex = settings.zIndex,
      interactive = settings.interactive;


  var popper = document.createElement('div');
  popper.setAttribute('class', 'tippy-popper');
  popper.setAttribute('role', 'tooltip');
  popper.setAttribute('aria-hidden', 'true');
  popper.setAttribute('id', 'tippy-tooltip-' + id);
  popper.style.zIndex = zIndex;

  var tooltip = document.createElement('div');
  tooltip.setAttribute('class', 'tippy-tooltip tippy-tooltip--' + size + ' leave');
  tooltip.setAttribute('data-animation', animation);

  theme.split(' ').forEach(function (t) {
    tooltip.classList.add(t + '-theme');
  });

  if (arrow) {
    // Add an arrow
    var _arrow = document.createElement('div');
    _arrow.setAttribute('class', 'arrow-' + arrowSize);
    _arrow.setAttribute('x-arrow', '');
    tooltip.appendChild(_arrow);
  }

  if (animateFill) {
    // Create animateFill circle element for animation
    tooltip.setAttribute('data-animatefill', '');
    var circle = document.createElement('div');
    circle.setAttribute('class', 'leave');
    circle.setAttribute('x-circle', '');
    tooltip.appendChild(circle);
  }

  if (inertia) {
    // Change transition timing function cubic bezier
    tooltip.setAttribute('data-inertia', '');
  }

  if (interactive) {
    tooltip.setAttribute('data-interactive', '');
  }

  // Tooltip content (text or HTML)
  var content = document.createElement('div');
  content.setAttribute('class', 'tippy-tooltip-content');

  if (html) {
    var templateId = void 0;

    if (html instanceof Element) {
      content.appendChild(html);
      templateId = '#' + html.id || 'tippy-html-template';
    } else {
      content.innerHTML = document.getElementById(html.replace('#', '')).innerHTML;
      templateId = html;
    }

    popper.classList.add('html-template');
    interactive && popper.setAttribute('tabindex', '-1');
    tooltip.setAttribute('data-template-id', templateId);
  } else {
    content.innerHTML = title;
  }

  // Init distance. Further updates are made in the popper instance's `onUpdate()` method
  tooltip.style[(0, _getCorePlacement2.default)(position)] = (0, _getOffsetDistanceInPx2.default)(distance);

  tooltip.appendChild(content);
  popper.appendChild(tooltip);

  return popper;
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = createPopperInstance;

var _popper = __webpack_require__(38);

var _popper2 = _interopRequireDefault(_popper);

var _defer = __webpack_require__(5);

var _defer2 = _interopRequireDefault(_defer);

var _prefix = __webpack_require__(1);

var _prefix2 = _interopRequireDefault(_prefix);

var _getCorePlacement = __webpack_require__(3);

var _getCorePlacement2 = _interopRequireDefault(_getCorePlacement);

var _getInnerElements2 = __webpack_require__(6);

var _getInnerElements3 = _interopRequireDefault(_getInnerElements2);

var _getOffsetDistanceInPx = __webpack_require__(11);

var _getOffsetDistanceInPx2 = _interopRequireDefault(_getOffsetDistanceInPx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Creates a new popper instance
* @param {Object} data
* @return {Object} - the popper instance
*/
function createPopperInstance(data) {
  var el = data.el,
      popper = data.popper,
      _data$settings = data.settings,
      position = _data$settings.position,
      popperOptions = _data$settings.popperOptions,
      offset = _data$settings.offset,
      distance = _data$settings.distance,
      flipDuration = _data$settings.flipDuration;

  var _getInnerElements = (0, _getInnerElements3.default)(popper),
      tooltip = _getInnerElements.tooltip;

  var config = _extends({
    placement: position
  }, popperOptions || {}, {
    modifiers: _extends({}, popperOptions ? popperOptions.modifiers : {}, {
      flip: _extends({
        padding: distance + 5 /* 5px from viewport boundary */
      }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.flip : {}),
      offset: _extends({
        offset: offset
      }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.offset : {})
    }),
    onUpdate: function onUpdate() {
      var styles = tooltip.style;
      styles.top = '';
      styles.bottom = '';
      styles.left = '';
      styles.right = '';
      styles[(0, _getCorePlacement2.default)(popper.getAttribute('x-placement'))] = (0, _getOffsetDistanceInPx2.default)(distance);
    }
  });

  // Update the popper's position whenever its content changes
  // Not supported in IE10 unless polyfilled
  if (window.MutationObserver) {
    var styles = popper.style;

    var observer = new MutationObserver(function () {
      styles[(0, _prefix2.default)('transitionDuration')] = '0ms';
      data.popperInstance.update();
      (0, _defer2.default)(function () {
        styles[(0, _prefix2.default)('transitionDuration')] = flipDuration + 'ms';
      });
    });

    observer.observe(popper, {
      childList: true,
      subtree: true,
      characterData: true
    });

    data._mutationObserver = observer;
  }

  return new _popper2.default(el, popper, config);
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTooltips;

var _getIndividualSettings = __webpack_require__(24);

var _getIndividualSettings2 = _interopRequireDefault(_getIndividualSettings);

var _createPopperElement = __webpack_require__(17);

var _createPopperElement2 = _interopRequireDefault(_createPopperElement);

var _createTrigger = __webpack_require__(20);

var _createTrigger2 = _interopRequireDefault(_createTrigger);

var _getEventListenerHandlers = __webpack_require__(23);

var _getEventListenerHandlers2 = _interopRequireDefault(_getEventListenerHandlers);

var _evaluateSettings = __webpack_require__(21);

var _evaluateSettings2 = _interopRequireDefault(_evaluateSettings);

var _removeTitle = __webpack_require__(12);

var _removeTitle2 = _interopRequireDefault(_removeTitle);

var _globals = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idCounter = 1;

/**
* Creates tooltips for all el elements that match the instance's selector
* @param {Element[]} els
* @return {Object[]} Array of ref data objects
*/
function createTooltips(els) {
  var _this = this;

  return els.reduce(function (a, el) {
    var id = idCounter;

    var settings = (0, _evaluateSettings2.default)(_this.settings.performance ? _this.settings : (0, _getIndividualSettings2.default)(el, _this.settings));

    var html = settings.html,
        trigger = settings.trigger,
        touchHold = settings.touchHold;


    var title = el.getAttribute('title');
    if (!title && !html) return a;

    el.setAttribute('data-tooltipped', '');
    el.setAttribute('aria-describedby', 'tippy-tooltip-' + id);
    (0, _removeTitle2.default)(el);

    var popper = (0, _createPopperElement2.default)(id, title, settings);
    var handlers = _getEventListenerHandlers2.default.call(_this, el, popper, settings);

    var listeners = [];

    trigger.trim().split(' ').forEach(function (event) {
      return listeners = listeners.concat((0, _createTrigger2.default)(event, el, handlers, touchHold));
    });

    a.push({
      id: id,
      el: el,
      popper: popper,
      settings: settings,
      listeners: listeners,
      tippyInstance: _this
    });

    idCounter++;

    return a;
  }, []);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTrigger;

var _globals = __webpack_require__(0);

/**
* Creates a trigger
* @param {Object} event - the custom event specified in the `trigger` setting
* @param {Element} el - tooltipped element
* @param {Object} handlers - the handlers for each listener
* @param {Boolean} touchHold
* @return {Array} - array of listener objects
*/
function createTrigger(event, el, handlers, touchHold) {
  var listeners = [];

  if (event === 'manual') return listeners;

  // Enter
  el.addEventListener(event, handlers.handleTrigger);
  listeners.push({
    event: event,
    handler: handlers.handleTrigger
  });

  // Leave
  if (event === 'mouseenter') {
    if (_globals.Browser.SUPPORTS_TOUCH && touchHold) {
      el.addEventListener('touchstart', handlers.handleTrigger);
      listeners.push({
        event: 'touchstart',
        handler: handlers.handleTrigger
      });
      el.addEventListener('touchend', handlers.handleMouseleave);
      listeners.push({
        event: 'touchend',
        handler: handlers.handleMouseleave
      });
    }

    el.addEventListener('mouseleave', handlers.handleMouseleave);
    listeners.push({
      event: 'mouseleave',
      handler: handlers.handleMouseleave
    });
  }

  if (event === 'focus') {
    el.addEventListener('blur', handlers.handleBlur);
    listeners.push({
      event: 'blur',
      handler: handlers.handleBlur
    });
  }

  return listeners;
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = evaluateSettings;
/**
* Evaluates/modifies the settings object for appropriate behavior
* @param {Object} settings
* @return {Object} modified/evaluated settings
*/
function evaluateSettings(settings) {
  // animateFill is disabled if an arrow is true
  if (settings.arrow) {
    settings.animateFill = false;
  }

  // reassign appendTo into the result of evaluating appendTo
  // if it's set as a function instead of Element
  if (settings.appendTo && typeof settings.appendTo === 'function') {
    settings.appendTo = settings.appendTo();
  }

  return settings;
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getArrayOfElements;
/**
* Returns an array of elements based on the selector input
* @param {String|Element|Element[]} selector
* @return {Element[]}
*/
function getArrayOfElements(selector) {
  if (selector instanceof Element) {
    return [selector];
  }

  if (Array.isArray(selector)) {
    return selector;
  }

  return [].slice.call(document.querySelectorAll(selector));
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getEventListenerHandlers;

var _globals = __webpack_require__(0);

var _isVisible = __webpack_require__(7);

var _isVisible2 = _interopRequireDefault(_isVisible);

var _closest = __webpack_require__(4);

var _closest2 = _interopRequireDefault(_closest);

var _cursorIsOutsideInteractiveBorder = __webpack_require__(32);

var _cursorIsOutsideInteractiveBorder2 = _interopRequireDefault(_cursorIsOutsideInteractiveBorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Returns relevant listener callbacks for each ref
* @param {Element} el
* @param {Element} popper
* @param {Object} settings
* @return {Object} - relevant listener handlers
*/
function getEventListenerHandlers(el, popper, settings) {
  var _this = this;

  var position = settings.position,
      delay = settings.delay,
      duration = settings.duration,
      interactive = settings.interactive,
      interactiveBorder = settings.interactiveBorder,
      distance = settings.distance,
      hideOnClick = settings.hideOnClick,
      trigger = settings.trigger,
      touchHold = settings.touchHold,
      touchWait = settings.touchWait;


  var showDelay = void 0,
      hideDelay = void 0;

  var clearTimeouts = function clearTimeouts() {
    clearTimeout(showDelay);
    clearTimeout(hideDelay);
  };

  var _show = function _show() {
    clearTimeouts();

    // Not hidden. For clicking when it also has a `focus` event listener
    if ((0, _isVisible2.default)(popper)) return;

    var _delay = Array.isArray(delay) ? delay[0] : delay;

    if (delay) {
      showDelay = setTimeout(function () {
        return _this.show(popper);
      }, _delay);
    } else {
      _this.show(popper);
    }
  };

  var show = function show(event) {
    return _this.callbacks.wait ? _this.callbacks.wait.call(popper, _show, event) : _show();
  };

  var hide = function hide() {
    clearTimeouts();

    var _delay = Array.isArray(delay) ? delay[1] : delay;

    if (delay) {
      hideDelay = setTimeout(function () {
        return _this.hide(popper);
      }, _delay);
    } else {
      _this.hide(popper);
    }
  };

  var handleTrigger = function handleTrigger(event) {
    var mouseenterTouch = event.type === 'mouseenter' && _globals.Browser.SUPPORTS_TOUCH && _globals.Browser.touch;

    if (mouseenterTouch && touchHold) return;

    // Toggle show/hide when clicking click-triggered tooltips
    var isClick = event.type === 'click';
    var isNotPersistent = hideOnClick !== 'persistent';

    isClick && (0, _isVisible2.default)(popper) && isNotPersistent ? hide() : show(event);

    if (mouseenterTouch && _globals.Browser.iOS() && el.click) {
      el.click();
    }
  };

  var handleMouseleave = function handleMouseleave(event) {

    // Don't fire 'mouseleave', use the 'touchend'
    if (event.type === 'mouseleave' && _globals.Browser.SUPPORTS_TOUCH && _globals.Browser.touch && touchHold) {
      return;
    }

    if (interactive) {
      // Temporarily handle mousemove to check if the mouse left somewhere
      // other than its popper
      var handleMousemove = function handleMousemove(event) {

        var triggerHide = function triggerHide() {
          document.body.removeEventListener('mouseleave', hide);
          document.removeEventListener('mousemove', handleMousemove);
          hide();
        };

        var closestTooltippedEl = (0, _closest2.default)(event.target, _globals.Selectors.TOOLTIPPED_EL);

        var isOverPopper = (0, _closest2.default)(event.target, _globals.Selectors.POPPER) === popper;
        var isOverEl = closestTooltippedEl === el;
        var isClickTriggered = trigger.indexOf('click') !== -1;
        var isOverOtherTooltippedEl = closestTooltippedEl && closestTooltippedEl !== el;

        if (isOverOtherTooltippedEl) {
          return triggerHide();
        }

        if (isOverPopper || isOverEl || isClickTriggered) return;

        if ((0, _cursorIsOutsideInteractiveBorder2.default)(event, popper, settings)) {
          triggerHide();
        }
      };

      document.body.addEventListener('mouseleave', hide);
      document.addEventListener('mousemove', handleMousemove);

      return;
    }

    // If it's not interactive, just hide it
    hide();
  };

  var handleBlur = function handleBlur(event) {
    // Ignore blur on touch devices, if there is no `relatedTarget`, hide
    // If the related target is a popper, ignore
    if (!event.relatedTarget || _globals.Browser.touch) return;
    if ((0, _closest2.default)(event.relatedTarget, _globals.Selectors.POPPER)) return;

    hide();
  };

  return {
    handleTrigger: handleTrigger,
    handleMouseleave: handleMouseleave,
    handleBlur: handleBlur
  };
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIndividualSettings;

var _globals = __webpack_require__(0);

/**
* Returns an object of settings to override global settings
* @param {Element} el - the tooltipped element
* @param {Object} instanceSettings
* @return {Object} - individual settings
*/
function getIndividualSettings(el, instanceSettings) {
  var settings = _globals.DefaultsKeys.reduce(function (acc, key) {
    var val = el.getAttribute('data-' + key.toLowerCase()) || instanceSettings[key];

    // Convert strings to booleans
    if (val === 'false') val = false;
    if (val === 'true') val = true;

    // Convert number strings to true numbers
    if (isFinite(val) && !isNaN(parseFloat(val))) {
      val = parseFloat(val);
    }

    // Convert array strings to actual arrays
    if (typeof val === 'string' && val.trim().charAt(0) === '[') {
      val = JSON.parse(val);
    }

    acc[key] = val;

    return acc;
  }, {});

  return Object.assign({}, instanceSettings, settings);
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hideAllPoppers;

var _globals = __webpack_require__(0);

/**
* Hides all poppers
* @param {Object} exclude - refData to exclude if needed
*/
function hideAllPoppers(exclude) {
  _globals.Store.forEach(function (refData) {
    var popper = refData.popper,
        tippyInstance = refData.tippyInstance,
        _refData$settings = refData.settings,
        appendTo = _refData$settings.appendTo,
        hideOnClick = _refData$settings.hideOnClick,
        trigger = _refData$settings.trigger;

    // Don't hide already hidden ones

    if (!appendTo.contains(popper)) return;

    // hideOnClick can have the truthy value of 'persistent', so strict check is needed
    var isHideOnClick = hideOnClick === true || trigger.indexOf('focus') !== -1;
    var isNotCurrentRef = !exclude || popper !== exclude.popper;

    if (isHideOnClick && isNotCurrentRef) {
      refData.settings.onRequestClose();
      tippyInstance.hide(popper);
    }
  });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _bindEventListeners = __webpack_require__(16);

var _bindEventListeners2 = _interopRequireDefault(_bindEventListeners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* To run a single time, once DOM is presumed to be ready
* @return {Boolean} whether the function has run or not
*/
function init() {
  if (init.done) return false;
  init.done = true;

  (0, _bindEventListeners2.default)();

  return true;
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeSticky;

var _defer = __webpack_require__(5);

var _defer2 = _interopRequireDefault(_defer);

var _prefix = __webpack_require__(1);

var _prefix2 = _interopRequireDefault(_prefix);

var _isVisible = __webpack_require__(7);

var _isVisible2 = _interopRequireDefault(_isVisible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Updates a popper's position on each animation frame to make it stick to a moving element
* @param {Object} refData
*/
function makeSticky(refData) {
  var popper = refData.popper,
      popperInstance = refData.popperInstance,
      stickyDuration = refData.settings.stickyDuration;


  var applyTransitionDuration = function applyTransitionDuration() {
    return popper.style[(0, _prefix2.default)('transitionDuration')] = stickyDuration + 'ms';
  };

  var removeTransitionDuration = function removeTransitionDuration() {
    return popper.style[(0, _prefix2.default)('transitionDuration')] = '';
  };

  var updatePosition = function updatePosition() {
    popperInstance && popperInstance.scheduleUpdate();

    applyTransitionDuration();

    (0, _isVisible2.default)(popper) ? window.requestAnimationFrame(updatePosition) : removeTransitionDuration();
  };

  // Wait until Popper's position has been updated initially
  (0, _defer2.default)(updatePosition);
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mountPopper;

var _globals = __webpack_require__(0);

var _followCursorHandler = __webpack_require__(10);

var _followCursorHandler2 = _interopRequireDefault(_followCursorHandler);

var _createPopperInstance = __webpack_require__(18);

var _createPopperInstance2 = _interopRequireDefault(_createPopperInstance);

var _prefix = __webpack_require__(1);

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Appends the popper and creates a popper instance if one does not exist
* Also updates its position if need be and enables event listeners
* @param {Object} data -  the element/popper reference data
*/
function mountPopper(data) {
  var el = data.el,
      popper = data.popper,
      _data$settings = data.settings,
      appendTo = _data$settings.appendTo,
      followCursor = _data$settings.followCursor;

  // Already on the DOM

  if (appendTo.contains(popper)) return;

  appendTo.appendChild(popper);

  if (!data.popperInstance) {
    data.popperInstance = (0, _createPopperInstance2.default)(data);
  } else {
    data.popperInstance.update();
    if (!followCursor || _globals.Browser.touch) {
      data.popperInstance.enableEventListeners();
    }
  }

  // Since touch is determined dynamically, followCursor is set on mount
  if (followCursor && !_globals.Browser.touch) {
    el.addEventListener('mousemove', _followCursorHandler2.default);
    data.popperInstance.disableEventListeners();
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onTransitionEnd;

var _globals = __webpack_require__(0);

var _getInnerElements2 = __webpack_require__(6);

var _getInnerElements3 = _interopRequireDefault(_getInnerElements2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Prepares the callback functions for `show` and `hide` methods
* @param {Object} data
* @param {Number} duration
* @param {Function} callback - callback function to fire once transitions complete
*/
function onTransitionEnd(data, duration, callback) {
  // Make callback synchronous if duration is 0
  if (!duration) {
    return callback();
  }

  var _getInnerElements = (0, _getInnerElements3.default)(data.popper),
      tooltip = _getInnerElements.tooltip;

  var transitionendFired = false;

  var listenerCallback = function listenerCallback(e) {
    if (e.target === tooltip && !transitionendFired) {
      transitionendFired = true;
      callback();
    }
  };

  // Fire callback upon transition completion
  tooltip.addEventListener('webkitTransitionEnd', listenerCallback);
  tooltip.addEventListener('transitionend', listenerCallback);

  // Fallback: transitionend listener sometimes may not fire
  clearTimeout(data._transitionendTimeout);
  data._transitionendTimeout = setTimeout(function () {
    if (!transitionendFired) {
      callback();
    }
  }, duration);
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/* Utility functions */


/* Core library functions */


var _globals = __webpack_require__(0);

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _init = __webpack_require__(26);

var _init2 = _interopRequireDefault(_init);

var _defer = __webpack_require__(5);

var _defer2 = _interopRequireDefault(_defer);

var _prefix = __webpack_require__(1);

var _prefix2 = _interopRequireDefault(_prefix);

var _find = __webpack_require__(2);

var _find2 = _interopRequireDefault(_find);

var _findIndex = __webpack_require__(34);

var _findIndex2 = _interopRequireDefault(_findIndex);

var _removeTitle = __webpack_require__(12);

var _removeTitle2 = _interopRequireDefault(_removeTitle);

var _elementIsInViewport = __webpack_require__(33);

var _elementIsInViewport2 = _interopRequireDefault(_elementIsInViewport);

var _triggerReflow = __webpack_require__(37);

var _triggerReflow2 = _interopRequireDefault(_triggerReflow);

var _modifyClassList = __webpack_require__(35);

var _modifyClassList2 = _interopRequireDefault(_modifyClassList);

var _getInnerElements4 = __webpack_require__(6);

var _getInnerElements5 = _interopRequireDefault(_getInnerElements4);

var _applyTransitionDuration = __webpack_require__(31);

var _applyTransitionDuration2 = _interopRequireDefault(_applyTransitionDuration);

var _isVisible = __webpack_require__(7);

var _isVisible2 = _interopRequireDefault(_isVisible);

var _noop = __webpack_require__(36);

var _noop2 = _interopRequireDefault(_noop);

var _followCursorHandler = __webpack_require__(10);

var _followCursorHandler2 = _interopRequireDefault(_followCursorHandler);

var _getArrayOfElements = __webpack_require__(22);

var _getArrayOfElements2 = _interopRequireDefault(_getArrayOfElements);

var _onTransitionEnd = __webpack_require__(29);

var _onTransitionEnd2 = _interopRequireDefault(_onTransitionEnd);

var _mountPopper = __webpack_require__(28);

var _mountPopper2 = _interopRequireDefault(_mountPopper);

var _makeSticky = __webpack_require__(27);

var _makeSticky2 = _interopRequireDefault(_makeSticky);

var _createTooltips = __webpack_require__(19);

var _createTooltips2 = _interopRequireDefault(_createTooltips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* @param {String|Element|Element[]} selector
* @param {Object} settings (optional) - the object of settings to be applied to the instance
*/
var Tippy = function () {
  function Tippy(selector) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Tippy);

    // Use default browser tooltip on unsupported browsers
    if (!_globals.Browser.SUPPORTED) return;

    (0, _init2.default)();

    this.state = {
      destroyed: false
    };

    this.selector = selector;

    this.settings = _extends({}, _globals.Defaults, settings);

    if (settings.show || settings.shown || settings.hide || settings.hidden) {
      console.warn('Callbacks without the `on` prefix are deprecated (with the exception of `wait`).' + ' Use onShow, onShown, onHide, and onHidden instead.');
    }

    this.callbacks = {
      wait: settings.wait,
      show: settings.onShow || settings.show || _noop2.default,
      shown: settings.onShown || settings.shown || _noop2.default,
      hide: settings.onHide || settings.hide || _noop2.default,
      hidden: settings.onHidden || settings.hidden || _noop2.default
    };

    this.store = _createTooltips2.default.call(this, (0, _getArrayOfElements2.default)(selector));
    _globals.Store.push.apply(_globals.Store, this.store);
  }

  /**
  * Returns the reference element's popper element
  * @param {Element} el
  * @return {Element}
  */


  _createClass(Tippy, [{
    key: 'getPopperElement',
    value: function getPopperElement(el) {
      try {
        return (0, _find2.default)(this.store, function (data) {
          return data.el === el;
        }).popper;
      } catch (e) {
        console.error('[getPopperElement]: Element passed as the argument does not exist in the instance');
      }
    }

    /**
    * Returns a popper's reference element
    * @param {Element} popper
    * @return {Element}
    */

  }, {
    key: 'getReferenceElement',
    value: function getReferenceElement(popper) {
      try {
        return (0, _find2.default)(this.store, function (data) {
          return data.popper === popper;
        }).el;
      } catch (e) {
        console.error('[getReferenceElement]: Popper passed as the argument does not exist in the instance');
      }
    }

    /**
    * Returns the reference data object from either the reference element or popper element
    * @param {Element} x (reference element or popper)
    * @return {Object}
    */

  }, {
    key: 'getReferenceData',
    value: function getReferenceData(x) {
      return (0, _find2.default)(this.store, function (data) {
        return data.el === x || data.popper === x;
      });
    }

    /**
    * Update settings
    * @param {DOMElement} - popper
    * @param {string} - name
    * @param {string} - value
    */

  }, {
    key: 'updateSettings',
    value: function updateSettings(popper, name, value) {
      var data = (0, _find2.default)(this.store, function (data) {
        return data.popper === popper;
      });
      var newSettings = _extends({}, data.settings, _defineProperty({}, name, value));
      data.settings = newSettings;
    }
  }, {
    key: 'updateForReact',


    /**
    * Update for React
    * @param {DOMElement} - popper
    * @param {ReactElement} - content
    */
    value: function updateForReact(popper, updatedContent) {
      var tooltipContent = popper.querySelector(_globals.Selectors.CONTENT);
      var data = (0, _find2.default)(this.store, function (data) {
        return data.popper === popper;
      });

      var _data$settings = data.settings,
          useContext = _data$settings.useContext,
          reactInstance = _data$settings.reactInstance;

      if (useContext) {
        _reactDom2.default.unstable_renderSubtreeIntoContainer(data.settings.reactInstance, updatedContent, tooltipContent);
      } else {
        _reactDom2.default.render(updatedContent, tooltipContent);
      }
    }
    /**
    * Shows a popper
    * @param {Element} popper
    * @param {Number} customDuration (optional)
    */

  }, {
    key: 'show',
    value: function show(popper, customDuration) {
      var _this = this;

      if (this.state.destroyed) return;

      var data = (0, _find2.default)(this.store, function (data) {
        return data.popper === popper;
      });

      var _getInnerElements = (0, _getInnerElements5.default)(popper),
          tooltip = _getInnerElements.tooltip,
          circle = _getInnerElements.circle,
          content = _getInnerElements.content;

      if (!document.body.contains(data.el)) {
        this.destroy(popper);
        return;
      }

      this.callbacks.show.call(popper);

      // Custom react
      if (data && data.settings && data.settings.open === false) {
        return;
      }

      if (data.settings.reactDOM) {
        this.updateForReact(popper, data.settings.reactDOM);
      }
      // end: Custom react

      var el = data.el,
          _data$settings2 = data.settings,
          appendTo = _data$settings2.appendTo,
          sticky = _data$settings2.sticky,
          interactive = _data$settings2.interactive,
          followCursor = _data$settings2.followCursor,
          flipDuration = _data$settings2.flipDuration,
          duration = _data$settings2.duration,
          dynamicTitle = _data$settings2.dynamicTitle;


      if (dynamicTitle) {
        var title = el.getAttribute('title');
        if (title) {
          content.innerHTML = title;
          (0, _removeTitle2.default)(el);
        }
      }

      var _duration = customDuration !== undefined ? customDuration : Array.isArray(duration) ? duration[0] : duration;

      // Prevent a transition when popper changes position
      (0, _applyTransitionDuration2.default)([popper, tooltip, circle], 0);

      (0, _mountPopper2.default)(data);

      popper.style.visibility = 'visible';
      popper.setAttribute('aria-hidden', 'false');

      // Wait for popper's position to update
      (0, _defer2.default)(function () {
        // Sometimes the arrow will not be in the correct position, force another update
        if (!followCursor || _globals.Browser.touch) {
          data.popperInstance.update();
          (0, _applyTransitionDuration2.default)([popper], flipDuration);
        }

        // Re-apply transition durations
        (0, _applyTransitionDuration2.default)([tooltip, circle], _duration);

        // Make content fade out a bit faster than the tooltip if `animateFill`
        if (circle) content.style.opacity = 1;

        // Interactive tooltips receive a class of 'active'
        interactive && el.classList.add('active');

        // Update popper's position on every animation frame
        sticky && (0, _makeSticky2.default)(data);

        // Repaint/reflow is required for CSS transition when appending
        (0, _triggerReflow2.default)(tooltip, circle);

        (0, _modifyClassList2.default)([tooltip, circle], function (list) {
          list.contains('tippy-notransition') && list.remove('tippy-notransition');
          list.remove('leave');
          list.add('enter');
        });

        // Wait for transitions to complete
        (0, _onTransitionEnd2.default)(data, _duration, function () {
          if (!(0, _isVisible2.default)(popper) || data._onShownFired) return;

          // Focus interactive tooltips only
          interactive && popper.focus();
          // Remove transitions from tooltip
          tooltip.classList.add('tippy-notransition');
          // Prevents shown() from firing more than once from early transition cancellations
          data._onShownFired = true;

          _this.callbacks.shown.call(popper);
        });
      });
    }

    /**
    * Hides a popper
    * @param {Element} popper
    * @param {Number} customDuration (optional)
    */

  }, {
    key: 'hide',
    value: function hide(popper, customDuration) {
      var _this2 = this;

      if (this.state.destroyed) return;

      this.callbacks.hide.call(popper);

      var data = (0, _find2.default)(this.store, function (data) {
        return data.popper === popper;
      });

      var _getInnerElements2 = (0, _getInnerElements5.default)(popper),
          tooltip = _getInnerElements2.tooltip,
          circle = _getInnerElements2.circle,
          content = _getInnerElements2.content;

      // custom react
      // Prevent hide if open


      if (data.settings.disabled === false && data.settings.open) {
        return;
      }

      var isUnmount = data && data.settings && data.settings.unmountHTMLWhenHide && data.settings.reactDOM;
      // end: custom react

      var el = data.el,
          _data$settings3 = data.settings,
          appendTo = _data$settings3.appendTo,
          sticky = _data$settings3.sticky,
          interactive = _data$settings3.interactive,
          followCursor = _data$settings3.followCursor,
          html = _data$settings3.html,
          trigger = _data$settings3.trigger,
          duration = _data$settings3.duration;


      var _duration = customDuration !== undefined ? customDuration : Array.isArray(duration) ? duration[1] : duration;

      data._onShownFired = false;
      interactive && el.classList.remove('active');

      popper.style.visibility = 'hidden';
      popper.setAttribute('aria-hidden', 'true');

      (0, _applyTransitionDuration2.default)([tooltip, circle, circle ? content : null], _duration);

      if (circle) content.style.opacity = 0;

      (0, _modifyClassList2.default)([tooltip, circle], function (list) {
        list.contains('tippy-tooltip') && list.remove('tippy-notransition');
        list.remove('enter');
        list.add('leave');
      });

      // Re-focus click-triggered html elements
      // and the tooltipped element IS in the viewport (otherwise it causes unsightly scrolling
      // if the tooltip is closed and the element isn't in the viewport anymore)
      if (html && trigger.indexOf('click') !== -1 && (0, _elementIsInViewport2.default)(el)) {
        el.focus();
      }

      // Wait for transitions to complete
      (0, _onTransitionEnd2.default)(data, _duration, function () {
        // `isVisible` is not completely reliable to determine if we shouldn't
        // run the hidden callback, we need to check the computed opacity style.
        // This prevents glitchy behavior of the transition when quickly showing
        // and hiding a tooltip.
        if ((0, _isVisible2.default)(popper) || !appendTo.contains(popper) || getComputedStyle(tooltip).opacity === '1') return;

        el.removeEventListener('mousemove', _followCursorHandler2.default);
        data.popperInstance.disableEventListeners();
        appendTo.removeChild(popper);

        _this2.callbacks.hidden.call(popper);

        // custom react
        if (isUnmount) {
          _reactDom2.default.unmountComponentAtNode(content);
        }
      });
    }

    /**
    * Updates a popper with new content
    * @param {Element} popper
    */

  }, {
    key: 'update',
    value: function update(popper) {
      if (this.state.destroyed) return;

      var data = (0, _find2.default)(this.store, function (data) {
        return data.popper === popper;
      });

      var _getInnerElements3 = (0, _getInnerElements5.default)(popper),
          content = _getInnerElements3.content;

      var el = data.el,
          html = data.settings.html;


      if (html instanceof Element) {
        console.warn('Aborted: update() should not be used if `html` is a DOM element');
        return;
      }

      content.innerHTML = html ? document.getElementById(html.replace('#', '')).innerHTML : el.getAttribute('title') || el.getAttribute('data-original-title');

      if (!html) (0, _removeTitle2.default)(el);
    }

    /**
    * Destroys a popper
    * @param {Element} popper
    * @param {Boolean} _isLast - private param used by destroyAll to optimize
    */

  }, {
    key: 'destroy',
    value: function destroy(popper, _isLast) {
      var _this3 = this;

      if (this.state.destroyed) return;

      var data = (0, _find2.default)(this.store, function (data) {
        return data.popper === popper;
      });

      var el = data.el,
          popperInstance = data.popperInstance,
          listeners = data.listeners,
          _mutationObserver = data._mutationObserver;

      // Ensure the popper is hidden

      if ((0, _isVisible2.default)(popper)) {
        this.hide(popper, 0);
      }

      // Remove Tippy-only event listeners from tooltipped element
      listeners.forEach(function (listener) {
        return el.removeEventListener(listener.event, listener.handler);
      });

      // Restore original title
      el.setAttribute('title', el.getAttribute('data-original-title'));

      el.removeAttribute('data-original-title');
      el.removeAttribute('data-tooltipped');
      el.removeAttribute('aria-describedby');

      popperInstance && popperInstance.destroy();
      _mutationObserver && _mutationObserver.disconnect();

      // Remove from store
      _globals.Store.splice((0, _findIndex2.default)(_globals.Store, function (data) {
        return data.popper === popper;
      }), 1);

      // Ensure filter is called only once
      if (_isLast === undefined || _isLast) {
        this.store = _globals.Store.filter(function (data) {
          return data.tippyInstance === _this3;
        });
      }
    }

    /**
    * Destroys all tooltips created by the instance
    */

  }, {
    key: 'destroyAll',
    value: function destroyAll() {
      var _this4 = this;

      if (this.state.destroyed) return;

      var storeLength = this.store.length;

      this.store.forEach(function (_ref, index) {
        var popper = _ref.popper;

        _this4.destroy(popper, index === storeLength - 1);
      });

      this.store = null;
      this.state.destroyed = true;
    }
  }]);

  return Tippy;
}();

function tippy(selector, settings) {
  return new Tippy(selector, settings);
}

tippy.Browser = _globals.Browser;
tippy.Defaults = _globals.Defaults;
tippy.disableDynamicInputDetection = function () {
  return _globals.Browser.dynamicInputDetection = false;
};
tippy.enableDynamicInputDetection = function () {
  return _globals.Browser.dynamicInputDetection = true;
};

exports.default = tippy;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyTransitionDuration;

var _globals = __webpack_require__(0);

var _prefix = __webpack_require__(1);

var _prefix2 = _interopRequireDefault(_prefix);

var _matches = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Applies the transition duration to each element
* @param {Element[]} els - Array of elements
* @param {Number} duration
*/
function applyTransitionDuration(els, duration) {
  els.forEach(function (el) {
    if (!el) return;

    var isContent = _matches.matches.call(el, _globals.Selectors.CONTENT);

    var _duration = isContent ? Math.round(duration / 1.3) : duration;

    el.style[(0, _prefix2.default)('transitionDuration')] = _duration + 'ms';
  });
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursorIsOutsideInteractiveBorder;

var _getCorePlacement = __webpack_require__(3);

var _getCorePlacement2 = _interopRequireDefault(_getCorePlacement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Determines if the mouse's cursor is outside the interactive border
* @param {MouseEvent} event
* @param {Element} popper
* @param {Object} settings
* @return {Boolean}
*/
function cursorIsOutsideInteractiveBorder(event, popper, settings) {
  if (!popper.getAttribute('x-placement')) return true;

  var x = event.clientX,
      y = event.clientY;
  var interactiveBorder = settings.interactiveBorder,
      distance = settings.distance;


  var rect = popper.getBoundingClientRect();
  var corePosition = (0, _getCorePlacement2.default)(popper.getAttribute('x-placement'));
  var borderWithDistance = interactiveBorder + distance;

  var exceeds = {
    top: rect.top - y > interactiveBorder,
    bottom: y - rect.bottom > interactiveBorder,
    left: rect.left - x > interactiveBorder,
    right: x - rect.right > interactiveBorder
  };

  switch (corePosition) {
    case 'top':
      exceeds.top = rect.top - y > borderWithDistance;
      break;
    case 'bottom':
      exceeds.bottom = y - rect.bottom > borderWithDistance;
      break;
    case 'left':
      exceeds.left = rect.left - x > borderWithDistance;
      break;
    case 'right':
      exceeds.right = x - rect.right > borderWithDistance;
      break;
  }

  return exceeds.top || exceeds.bottom || exceeds.left || exceeds.right;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = elementIsInViewport;
/**
* Determines if an element is visible in the viewport
* @param {Element} el
* @return {Boolean}
*/
function elementIsInViewport(el) {
  var rect = el.getBoundingClientRect();

  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findIndex;

var _find = __webpack_require__(2);

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Ponyfill for Array.prototype.findIndex
* @param {Array} arr
* @param {Function} checkFn
* @return index of the item in the array
*/
function findIndex(arr, checkFn) {
  if (Array.prototype.findIndex) {
    return arr.findIndex(checkFn);
  }

  // fallback
  return arr.indexOf((0, _find2.default)(arr, checkFn));
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = modifyClassList;
/**
* Modifies elements' class lists
* @param {Element[]} els - Array of elements
* @param {Function} callback
*/
function modifyClassList(els, callback) {
  els.forEach(function (el) {
    if (!el) return;
    callback(el.classList);
  });
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = noop;
function noop() {}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = triggerReflow;

var _prefix = __webpack_require__(1);

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Triggers a document repaint or reflow for CSS transition
* @param {Element} tooltip
* @param {Element} circle
*/
function triggerReflow(tooltip, circle) {
  // Safari needs the specific 'transform' property to be accessed
  circle ? window.getComputedStyle(circle)[(0, _prefix2.default)('transform')] : window.getComputedStyle(tooltip).opacity;
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-tippy.js.map

/***/ }),

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(63)))

/***/ }),

/***/ 1117:
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAe4CegMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP7qKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU4v7bn/dtn/rIfwCoA/1vqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP8kH/g50/wCU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AUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+SD/wAHOn/KcX9tz/u2z/1kP4BUAf631ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+SD/wAHOn/KcX9tz/u2z/1kP4BUAf631ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+SD/wAHOn/KcX9tz/u2z/1kP4BUAf631ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+SD/wAHOn/KcX9tz/u2z/1kP4BUAf631ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+SD/wAHOn/KcX9tz/u2z/1kP4BUAf631ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+SD/wAHOn/KcX9tz/u2z/1kP4BUAf631ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+SD/wAHOn/KcX9tz/u2z/1kP4BUAf631ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+SD/wAHOn/KcX9tz/u2z/1kP4BUAf631ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+SD/wAHOn/KcX9tz/u2z/1kP4BUAf631ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+SD/wAHOn/KcX9tz/u2z/1kP4BUAf631ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+SD/wAHOn/KcX9tz/u2z/1kP4BUAf631ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUA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"

/***/ }),

/***/ 1118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var cropper = function cropper(text, length) {return (
    text.length > length ? text.substring(0, length - 3) + "..." : text);};exports.default =

cropper;

/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {Object.defineProperty(exports, "__esModule", { value: true });var _edit = __webpack_require__(1120);var _edit2 = _interopRequireDefault(_edit);
var _clear = __webpack_require__(412);var _clear2 = _interopRequireDefault(_clear);
var _IconButton = __webpack_require__(109);var _IconButton2 = _interopRequireDefault(_IconButton);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}






var wrapperStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 2 };


var hoveredStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)' };


var IconStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.3)' };


var Controls = function Controls(_ref) {var onEdit = _ref.onEdit,onRemove = _ref.onRemove;return (
    React.createElement('div', { style: wrapperStyles },
      React.createElement(_IconButton2.default, { style: IconStyles, hoveredStyle: hoveredStyle, onClick: onEdit },
        React.createElement(_edit2.default, { color: '#fff' })),

      React.createElement(_IconButton2.default, {
          style: IconStyles,
          hoveredStyle: hoveredStyle,
          onClick: onRemove },

        React.createElement(_clear2.default, { color: '#fff' }))));};exports.default =




Controls;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(41);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(42);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageEdit = function ImageEdit(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' })
  );
};
ImageEdit = (0, _pure2.default)(ImageEdit);
ImageEdit.displayName = 'ImageEdit';
ImageEdit.muiName = 'SvgIcon';

exports.default = ImageEdit;

/***/ }),

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.removeDirector = exports.createDirector = exports.fetchDirectors = undefined;var _actions = __webpack_require__(15);





var fetchDirectors = function fetchDirectors() {return function (dispatch) {
    dispatch({
      type: _actions.FETCH_DIRECTORS });

  };};

var createDirector = function createDirector(data) {return function (dispatch) {
    dispatch({
      type: _actions.CREATE_DIRECTOR,
      payload: data });

  };};

var removeDirector = function removeDirector(id) {return function (dispatch) {
    dispatch({
      type: _actions.REMOVE_DIRECTOR,
      payload: id });

  };};exports.

fetchDirectors = fetchDirectors;exports.createDirector = createDirector;exports.removeDirector = removeDirector;

/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.removeStudio = exports.createStudio = exports.fetchStudios = undefined;var _actions = __webpack_require__(15);

var fetchStudios = function fetchStudios() {return function (dispatch) {
    dispatch({
      type: _actions.FETCH_STUDIOS });

  };};

var createStudio = function createStudio(data) {return function (dispatch) {
    dispatch({
      type: _actions.CREATE_STUDIO,
      payload: data });

  };};

var removeStudio = function removeStudio(id) {return function (dispatch) {
    dispatch({
      type: _actions.REMOVE_STUDIO,
      payload: id });

  };};exports.

fetchStudios = fetchStudios;exports.createStudio = createStudio;exports.removeStudio = removeStudio;

/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.removeCountry = exports.createCountry = exports.fetchCountries = undefined;var _actions = __webpack_require__(15);





var fetchCountries = function fetchCountries() {return function (dispatch) {
    dispatch({
      type: _actions.FETCH_COUNTRIES });

  };};

var createCountry = function createCountry(data) {return function (dispatch) {
    dispatch({
      type: _actions.CREATE_COUNTRY,
      payload: data });

  };};

var removeCountry = function removeCountry(id) {return function (dispatch) {
    dispatch({
      type: _actions.REMOVE_COUNTRY,
      payload: id });

  };};exports.

fetchCountries = fetchCountries;exports.createCountry = createCountry;exports.removeCountry = removeCountry;

/***/ }),

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.removeSerial = exports.createSerial = exports.updateSerial = exports.fetchSerial = exports.fetchSerials = undefined;var _actions = __webpack_require__(15);







var fetchSerials = function fetchSerials() {return function (dispatch) {
    dispatch({
      type: _actions.FETCH_SERIALS });

  };};

var fetchSerial = function fetchSerial(id) {return function (dispatch) {
    dispatch({
      type: _actions.FETCH_SERIAL,
      id: id });

  };};

var updateSerial = function updateSerial(id, data) {return function (dispatch) {
    dispatch({
      type: _actions.UPDATE_SERIAL,
      id: id,
      payload: data });

  };};

var createSerial = function createSerial(data) {return function (dispatch) {
    dispatch({
      type: _actions.CREATE_SERIAL,
      payload: data });

  };};

var removeSerial = function removeSerial(id) {return function (dispatch) {
    dispatch({
      type: _actions.REMOVE_SERIAL,
      id: id });

  };};exports.

fetchSerials = fetchSerials;exports.fetchSerial = fetchSerial;exports.updateSerial = updateSerial;exports.createSerial = createSerial;exports.removeSerial = removeSerial;

/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(0);
var _reactRedux = __webpack_require__(40);
var _reduxForm = __webpack_require__(411);


var _validation = __webpack_require__(410);




var _index = __webpack_require__(413);


var _directors = __webpack_require__(1121);
var _studios = __webpack_require__(1123);
var _countries = __webpack_require__(1124);


var _RaisedButton = __webpack_require__(1109);var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
var _common = __webpack_require__(409);





var _SerialFormGrid = __webpack_require__(1150);

var _lodash = __webpack_require__(130);
var _validator = __webpack_require__(108);var _validator2 = _interopRequireDefault(_validator);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // constants
// actions
// components
var






















SerialForm = function (_Component) {_inherits(SerialForm, _Component);
  function SerialForm(props) {_classCallCheck(this, SerialForm);var _this = _possibleConstructorReturn(this, (SerialForm.__proto__ || Object.getPrototypeOf(SerialForm)).call(this,
    props));
    _this.state = {};return _this;
  }_createClass(SerialForm, [{ key: 'componentDidMount', value: function componentDidMount()

    {var _props =









      this.props,initialize = _props.initialize,initialValues = _props.initialValues,onFetchCountries = _props.onFetchCountries,countries = _props.countries,directors = _props.directors,studios = _props.studios,onFetchDirectors = _props.onFetchDirectors,onFetchStudios = _props.onFetchStudios;

      if (!directors.length) onFetchDirectors();
      if (!studios.length) onFetchStudios();
      if (!countries.length) onFetchCountries();

      if (initialValues) initialize(initialValues);else
      initialize();
    } }, { key: 'render', value: function render()

    {var _props2 =












      this.props,handleSubmit = _props2.handleSubmit,sendData = _props2.sendData,countries = _props2.countries,selectedCountries = _props2.selectedCountries,directors = _props2.directors,selectedDirectors = _props2.selectedDirectors,studios = _props2.studios,selectedStudios = _props2.selectedStudios,dirty = _props2.dirty,showed = _props2.showed,onClose = _props2.onClose;

      var filteredCountries = (0, _lodash.differenceBy)(countries, selectedCountries, '_id');
      var filteredDirectors = (0, _lodash.differenceBy)(directors, selectedDirectors, '_id');
      var filteredStudios = (0, _lodash.differenceBy)(studios, selectedStudios, '_id');

      return (
        React.createElement(_common.Dialog, { showed: showed, onClose: onClose },
          React.createElement('form', { onSubmit: handleSubmit(sendData) },
            React.createElement(_SerialFormGrid.Grid, null,
              React.createElement(_SerialFormGrid.Box, { cover: true }, React.createElement(_reduxForm.Field, { name: 'cover', component: _common.ImageUpload })),
              React.createElement(_SerialFormGrid.Box, { isName: true },
                React.createElement(_reduxForm.Field, {
                  name: 'name',
                  component: _common.TextField,
                  type: 'text',
                  floatingLabelText: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0435\u0440\u0438\u0430\u043B\u0430' })),


              React.createElement(_SerialFormGrid.Box, { originalName: true },
                React.createElement(_reduxForm.Field, {
                  name: 'originalName',
                  component: _common.TextField,
                  type: 'text',
                  floatingLabelText: '\u041E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0435\u0440\u0438\u0430\u043B\u0430' })),


              React.createElement(_SerialFormGrid.Box, { description: true },
                React.createElement(_reduxForm.Field, {
                  name: 'description',
                  component: _common.TextField,
                  type: 'text',
                  floatingLabelText: '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0435\u0440\u0438\u0430\u043B\u0430',
                  multiLine: true })),


              React.createElement(_SerialFormGrid.Box, { countries: true },
                React.createElement(_reduxForm.Field, {
                  component: _common.AutoCompleteWithTags,
                  dataSource: filteredCountries,
                  name: 'countries',
                  floatingLabelText: '\u0421\u0442\u0440\u0430\u043D\u044B',
                  tagsList: selectedCountries })),


              React.createElement(_SerialFormGrid.Box, { directors: true },
                React.createElement(_reduxForm.Field, {
                  component: _common.AutoCompleteWithTags,
                  dataSource: filteredDirectors,
                  name: 'directors',
                  floatingLabelText: '\u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440\u044B',
                  tagsList: selectedDirectors })),


              React.createElement(_SerialFormGrid.Box, { studios: true },
                React.createElement(_reduxForm.Field, {
                  component: _common.AutoCompleteWithTags,
                  dataSource: filteredStudios,
                  name: 'studios',
                  floatingLabelText: '\u0421\u0442\u0443\u0434\u0438\u0438',
                  tagsList: selectedStudios })),


              React.createElement(_SerialFormGrid.Box, { actions: true },
                React.createElement(_RaisedButton2.default, {
                  type: 'button',
                  label: '\u041E\u0442\u043C\u0435\u043D\u0438\u044C',
                  primary: true,
                  onClick: onClose,
                  style: { marginRight: 10 } }),

                React.createElement(_RaisedButton2.default, {
                  disabled: !dirty,
                  type: 'submit',
                  label: '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C',
                  secondary: true }))))));






    } }]);return SerialForm;}(_react.Component);

var selector = (0, _reduxForm.formValueSelector)('SerialForm');
var SerialFormRedux = (0, _reduxForm.reduxForm)({
  form: 'SerialForm',
  validate: (0, _validator2.default)({
    name: [_validation.REQUIRED],
    originalName: [_validation.REQUIRED],
    countries: [_validation.REQUIRED],
    directors: [_validation.REQUIRED],
    description: [
    function (_ref) {var description = _ref.description;return (
        (0, _validation.STRING_MAX_LENGTH)({
          value: description,
          maxLength: _index.DESCRIPTION_MAX_LENGTH }));},

    function (_ref2) {var description = _ref2.description;return (
        (0, _validation.STRING_MIN_LENGTH)({
          value: description,
          minLength: _index.DESCRIPTION_MIN_LENGTH }));}] }),



  enableReinitialize: true })(
SerialForm);

var mapStateToProps = function mapStateToProps(state) {return {
    countries: state.countries,
    selectedCountries: selector(state, 'countries') || [],
    directors: state.directors,
    selectedDirectors: selector(state, 'directors') || [],
    studios: state.studios,
    selectedStudios: selector(state, 'studios') || [],
    dirty: (0, _reduxForm.isDirty)('SerialForm')(state) };};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {return {
    onFetchCountries: function onFetchCountries() {
      dispatch((0, _countries.fetchCountries)());
    },
    onFetchDirectors: function onFetchDirectors() {
      dispatch((0, _directors.fetchDirectors)());
    },
    onFetchStudios: function onFetchStudios() {
      dispatch((0, _studios.fetchStudios)());
    },
    onReset: function onReset() {
      dispatch((0, _reduxForm.reset)('SerialForm'));
    } };};exports.default =


(0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SerialFormRedux);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Box = exports.Grid = undefined;var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-gap: 15px;\n  grid-template-columns: repeat(2, [col] 1fr);\n  grid-template-rows: repeat(7, [row] auto);\n'], ['\n  display: grid;\n  grid-gap: 15px;\n  grid-template-columns: repeat(2, [col] 1fr);\n  grid-template-rows: repeat(7, [row] auto);\n']),_templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),_templateObject3 = _taggedTemplateLiteral(['\n    grid-column: 1 / 2;\n    grid-row: 1 / 4;\n  '], ['\n    grid-column: 1 / 2;\n    grid-row: 1 / 4;\n  ']),_templateObject4 = _taggedTemplateLiteral(['\n    grid-column: 2 / 3;\n    grid-row: 1;\n  '], ['\n    grid-column: 2 / 3;\n    grid-row: 1;\n  ']),_templateObject5 = _taggedTemplateLiteral(['\n    grid-column: 2 / 3;\n    grid-row: 2;\n  '], ['\n    grid-column: 2 / 3;\n    grid-row: 2;\n  ']),_templateObject6 = _taggedTemplateLiteral(['\n    grid-column: 2 / 3;\n    grid-row: 3;\n  '], ['\n    grid-column: 2 / 3;\n    grid-row: 3;\n  ']),_templateObject7 = _taggedTemplateLiteral(['\n    grid-column: 1 / 3;\n    grid-row: 4;\n  '], ['\n    grid-column: 1 / 3;\n    grid-row: 4;\n  ']),_templateObject8 = _taggedTemplateLiteral(['\n    grid-column:  1 / 3;\n    grid-row: 5;\n  '], ['\n    grid-column:  1 / 3;\n    grid-row: 5;\n  ']),_templateObject9 = _taggedTemplateLiteral(['\n    grid-column:  1 / 3;\n    grid-row: 6;\n    margin-bottom: 30px;\n  '], ['\n    grid-column:  1 / 3;\n    grid-row: 6;\n    margin-bottom: 30px;\n  ']),_templateObject10 = _taggedTemplateLiteral(['\n    grid-column:  1 / 3;\n    grid-row: 7;\n    display: flex;\n    justify-content: flex-end;\n  '], ['\n    grid-column:  1 / 3;\n    grid-row: 7;\n    display: flex;\n    justify-content: flex-end;\n  ']);var _styledComponents = __webpack_require__(173);var _styledComponents2 = _interopRequireDefault(_styledComponents);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _taggedTemplateLiteral(strings, raw) {return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));}

var Grid = _styledComponents2.default.div(_templateObject);






var Box = _styledComponents2.default.div(_templateObject2,
function (props) {return props.cover && (0, _styledComponents.css)(_templateObject3);},



function (props) {return props.isName && (0, _styledComponents.css)(_templateObject4);},



function (props) {return props.originalName && (0, _styledComponents.css)(_templateObject5);},



function (props) {return props.description && (0, _styledComponents.css)(_templateObject6);},



function (props) {return props.countries && (0, _styledComponents.css)(_templateObject7);},



function (props) {return props.directors && (0, _styledComponents.css)(_templateObject8);},



function (props) {return props.studios && (0, _styledComponents.css)(_templateObject9);},




function (props) {return props.actions && (0, _styledComponents.css)(_templateObject10);});exports.







Grid = Grid;exports.Box = Box;

/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {Object.defineProperty(exports, "__esModule", { value: true });var _CoversGrid = __webpack_require__(1108);
var _Cover = __webpack_require__(1114);var _Cover2 = _interopRequireDefault(_Cover);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}







var SerialsList = function SerialsList(_ref) {var serials = _ref.serials,removeSerial = _ref.removeSerial,editSerial = _ref.editSerial;
  if (serials) {
    return (
      React.createElement(_CoversGrid.Grid, null,
        serials.map(function (serial) {return (
            React.createElement(_Cover2.default, {
              key: serial._id,
              cover: serial.cover,
              editPath: '/serials/' + serial._id + '/edit',
              id: serial._id,
              name: serial.name,
              showPath: '/serials/' + serial._id + '/show',
              remove: removeSerial,
              edit: editSerial }));})));




  }
  return null;
};exports.default =

SerialsList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(0);
var _reactRedux = __webpack_require__(40);
var _common = __webpack_require__(409);

var _serials = __webpack_require__(1131);
var _ui = __webpack_require__(174);
var _formHelper = __webpack_require__(1112);

var _SerialForm = __webpack_require__(1149);var _SerialForm2 = _interopRequireDefault(_SerialForm);

var _SerialsList = __webpack_require__(1151);var _SerialsList2 = _interopRequireDefault(_SerialsList);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var















SerialsPage = function (_Component) {_inherits(SerialsPage, _Component);
  function SerialsPage(props) {_classCallCheck(this, SerialsPage);var _this = _possibleConstructorReturn(this, (SerialsPage.__proto__ || Object.getPrototypeOf(SerialsPage)).call(this,
    props));
    _this.state = {
      formOpened: false,
      currentSerial: null };


    _this.showForm = _this.showForm.bind(_this);
    _this.closeForm = _this.closeForm.bind(_this);
    _this.send = _this.send.bind(_this);return _this;
  }_createClass(SerialsPage, [{ key: 'componentDidMount', value: function componentDidMount()

    {var _props =
      this.props,serials = _props.serials,onFetchSerials = _props.onFetchSerials;
      if (!serials.length) onFetchSerials();
    } }, { key: 'setCurrentSerial', value: function setCurrentSerial(

    serialId) {var
      serials = this.props.serials;
      var currentSerial = serials.find(function (serial) {return serial._id === serialId;});
      this.setState({ currentSerial: currentSerial });
    } }, { key: 'showForm', value: function showForm(

    serialId) {
      if (serialId) this.setCurrentSerial(serialId);
      this.setState({ formOpened: true });
    } }, { key: 'closeForm', value: function closeForm()

    {
      this.setState({ formOpened: false, currentSerial: null });
    } }, { key: 'showConfirmDialog', value: function showConfirmDialog(

    serialId) {var _props2 =
      this.props,onShowConfirmDialog = _props2.onShowConfirmDialog,onRemoveSerial = _props2.onRemoveSerial,serials = _props2.serials;var _serials$find =

      serials.find(function (serial) {return serial._id === serialId;}),name = _serials$find.name;

      onShowConfirmDialog({
        title: 'Удаление',
        message: '\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C ' + name + '?',
        onSuccess: function onSuccess() {return onRemoveSerial(serialId);} });

    } }, { key: 'send', value: function send(

    data) {var _props3 =
      this.props,onUpdateSerial = _props3.onUpdateSerial,onCreateSerial = _props3.onCreateSerial;
      if (data._id) {var
        _id2 = data._id;
        onUpdateSerial(_id2, (0, _formHelper.formDataFormatter)(data));
      } else {
        onCreateSerial((0, _formHelper.formDataFormatter)(data));
      }
      this.closeForm();
    } }, { key: 'render', value: function render()

    {var _this2 = this;var
      serials = this.props.serials;var _state =
      this.state,formOpened = _state.formOpened,currentSerial = _state.currentSerial;

      return (
        React.createElement('div', { style: { textAlign: 'right' } },
          React.createElement(_common.AddBtn, { handleClick: this.showForm }),
          React.createElement(_SerialsList2.default, {
            serials: serials,
            removeSerial: function removeSerial(id) {
              _this2.showConfirmDialog(id);
            },
            editSerial: function editSerial(id) {
              _this2.showForm(id);
            } }),

          formOpened &&
          React.createElement(_SerialForm2.default, {
            showed: formOpened,
            sendData: this.send,
            onClose: this.closeForm,
            initialValues: currentSerial })));




    } }]);return SerialsPage;}(_react.Component);


var mapStateToProps = function mapStateToProps(state) {return {
    serials: state.serials };};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {return {
    onFetchSerials: function onFetchSerials() {
      dispatch((0, _serials.fetchSerials)());
    },
    onRemoveSerial: function onRemoveSerial(id) {
      dispatch((0, _serials.removeSerial)(id));
    },
    onShowConfirmDialog: function onShowConfirmDialog(data) {
      dispatch((0, _ui.showConfirmDialog)(data));
    },
    onCreateSerial: function onCreateSerial(data) {
      dispatch((0, _serials.createSerial)(data));
    },
    onUpdateSerial: function onUpdateSerial(id, data) {
      dispatch((0, _serials.updateSerial)(id, data));
    } };};exports.default =


(0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SerialsPage);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

});