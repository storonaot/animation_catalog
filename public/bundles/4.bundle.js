webpackJsonp([4],{

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

/***/ 1122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(0);
var _reactRedux = __webpack_require__(40);
var _reduxForm = __webpack_require__(411);

var _ui = __webpack_require__(174);

var _common = __webpack_require__(409);

var _AdditionFormGrid = __webpack_require__(1133);
var _RaisedButton = __webpack_require__(1109);var _RaisedButton2 = _interopRequireDefault(_RaisedButton);
var _TextField = __webpack_require__(110);var _TextField2 = _interopRequireDefault(_TextField);
var _IconButton = __webpack_require__(109);var _IconButton2 = _interopRequireDefault(_IconButton);
var _highlightOff = __webpack_require__(1134);var _highlightOff2 = _interopRequireDefault(_highlightOff);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var













AdditionForm = function (_Component) {_inherits(AdditionForm, _Component);
  function AdditionForm(props) {_classCallCheck(this, AdditionForm);var _this = _possibleConstructorReturn(this, (AdditionForm.__proto__ || Object.getPrototypeOf(AdditionForm)).call(this,
    props));
    _this.state = {
      substring: '' };


    _this.updateSubstring = _this.updateSubstring.bind(_this);
    _this.resetSubstring = _this.resetSubstring.bind(_this);
    _this.sendData = _this.sendData.bind(_this);
    _this.showDialog = _this.showDialog.bind(_this);return _this;
  }_createClass(AdditionForm, [{ key: 'updateSubstring', value: function updateSubstring(

    event, value) {
      this.setState({ substring: value });
    } }, { key: 'resetSubstring', value: function resetSubstring()

    {
      this.setState({ substring: '' });
    } }, { key: 'sendData', value: function sendData(

    data) {var _props =
      this.props,sendData = _props.sendData,form = _props.form,onReset = _props.onReset;
      sendData(data);
      onReset(form);
    } }, { key: 'showDialog', value: function showDialog(

    id) {var _props2 =
      this.props,onShowDialog = _props2.onShowDialog,onRemoveTag = _props2.onRemoveTag,tags = _props2.tags;var _tags$find =
      tags.find(function (tag) {return tag._id === id;}),name = _tags$find.name;
      onShowDialog({
        title: 'Удаление',
        message: '\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C ' + name + '?',
        onSuccess: function onSuccess() {return onRemoveTag(id);} });

    } }, { key: 'render', value: function render()

    {var _props3 =
      this.props,handleSubmit = _props3.handleSubmit,formFields = _props3.formFields,tags = _props3.tags,filterFunc = _props3.filterFunc;var

      substring = this.state.substring;

      var filteredTags = tags.filter(filterFunc(substring));
      return (
        React.createElement('form', { onSubmit: handleSubmit(this.sendData) },
          React.createElement(_AdditionFormGrid.Grid, null,
            React.createElement(_AdditionFormGrid.Box, { left: true },
              formFields.map(function (_ref) {var name = _ref.name,label = _ref.label,id = _ref.id,component = _ref.component;return (
                  React.createElement(_reduxForm.Field, {
                    key: id,
                    name: name,
                    component: component,
                    floatingLabelText: label,
                    fullWidth: true,
                    type: 'text' }));}),


              React.createElement(_RaisedButton2.default, { type: 'submit', label: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C', secondary: true })),

            React.createElement(_AdditionFormGrid.Box, { right: true },
              React.createElement(_TextField2.default, {
                value: substring,
                onChange: this.updateSubstring,
                name: 'substring',
                floatingLabelText: '\u0424\u0438\u043B\u044C\u0442\u0440' }),

              React.createElement(_IconButton2.default, { disabled: !substring, tooltip: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C', onClick: this.resetSubstring },
                React.createElement(_highlightOff2.default, null)),

              React.createElement(_common.TagsList, { tags: filteredTags, deleteTag: this.showDialog })))));




    } }]);return AdditionForm;}(_react.Component);


AdditionForm.defaultProps = {
  filterFunc: function filterFunc(substring) {return function (_ref2) {var name = _ref2.name;return name.toLowerCase().match(substring.toLowerCase());};} };


var AdditionFormRedux = (0, _reduxForm.reduxForm)()(AdditionForm);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {return {
    onReset: function onReset(formName) {
      dispatch((0, _reduxForm.reset)(formName));
    },
    onShowDialog: function onShowDialog(data) {
      dispatch((0, _ui.showConfirmDialog)(data));
    } };};exports.default =


(0, _reactRedux.connect)(null, mapDispatchToProps)(AdditionFormRedux);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

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

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.removeTranslation = exports.createTranslation = exports.fetchTranslations = undefined;var _actions = __webpack_require__(15);





var fetchTranslations = function fetchTranslations() {return function (dispatch) {
    dispatch({
      type: _actions.FETCH_TRANSLATIONS });

  };};

var createTranslation = function createTranslation(data) {return function (dispatch) {
    dispatch({
      type: _actions.CREATE_TRANSLATION,
      payload: data });

  };};

var removeTranslation = function removeTranslation(id) {return function (dispatch) {
    dispatch({
      type: _actions.REMOVE_TRANSLATION,
      payload: id });

  };};exports.

fetchTranslations = fetchTranslations;exports.createTranslation = createTranslation;exports.removeTranslation = removeTranslation;

/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.removeLanguage = exports.createLanguage = exports.fetchLanguages = undefined;var _actions = __webpack_require__(15);





var fetchLanguages = function fetchLanguages() {return function (dispatch) {
    dispatch({
      type: _actions.FETCH_LANGUAGES });

  };};

var createLanguage = function createLanguage(data) {return function (dispatch) {
    dispatch({
      type: _actions.CREATE_LANGUAGE,
      payload: data });

  };};

var removeLanguage = function removeLanguage(id) {return function (dispatch) {
    dispatch({
      type: _actions.REMOVE_LANGUAGE,
      payload: id });

  };};exports.

fetchLanguages = fetchLanguages;exports.createLanguage = createLanguage;exports.removeLanguage = removeLanguage;

/***/ }),

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(0);
var _reactRedux = __webpack_require__(40);
var _directors = __webpack_require__(1121);





var _validator = __webpack_require__(108);var _validator2 = _interopRequireDefault(_validator);
var _validation = __webpack_require__(410);

var _common = __webpack_require__(409);
var _AdditionForm = __webpack_require__(1122);var _AdditionForm2 = _interopRequireDefault(_AdditionForm);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

var FORM_FIELDS = [
{ id: 1, name: 'first', label: 'Имя', component: _common.TextField },
{ id: 2, name: 'last', label: 'Фамилия', component: _common.TextField },
{
  id: 3,
  name: 'firstOriginal',
  label: 'Имя (оригинал)',
  component: _common.TextField },

{
  id: 4,
  name: 'lastOriginal',
  label: 'Фамилия (оригинал)',
  component: _common.TextField }];var










DirectorsForm = function (_Component) {_inherits(DirectorsForm, _Component);
  function DirectorsForm(props) {_classCallCheck(this, DirectorsForm);var _this = _possibleConstructorReturn(this, (DirectorsForm.__proto__ || Object.getPrototypeOf(DirectorsForm)).call(this,
    props));
    _this.sendData = _this.sendData.bind(_this);return _this;
  }_createClass(DirectorsForm, [{ key: 'componentDidMount', value: function componentDidMount()
    {var _props =
      this.props,directors = _props.directors,onFetchDirectors = _props.onFetchDirectors;
      if (!directors.length) onFetchDirectors();
    } }, { key: 'sendData', value: function sendData(

    value) {
      var data = {
        name: {
          first: value.first,
          last: value.last },

        originalName: {
          first: value.firstOriginal,
          last: value.lastOriginal } };


      this.props.onCreateDirector(data);
    } }, { key: 'render', value: function render()

    {var _props2 =
      this.props,directors = _props2.directors,onRemoveDirector = _props2.onRemoveDirector;

      // фильтровать теги по оригинальному имени и по переводу
      var filterFunc = function filterFunc(substr) {return function (_ref) {var name = _ref.name,originalName = _ref.originalName;return (
            name.toLowerCase().match(substr.toLowerCase()) ||
            originalName.toLowerCase().match(substr.toLowerCase()));};};

      var validate = (0, _validator2.default)({
        first: [_validation.REQUIRED],
        last: [_validation.REQUIRED],
        firstOriginal: [_validation.REQUIRED],
        lastOriginal: [_validation.REQUIRED] });


      return (
        React.createElement(_AdditionForm2.default, {
          formFields: FORM_FIELDS,
          sendData: this.sendData,
          onRemoveTag: onRemoveDirector,
          tags: directors,
          form: 'DirectorsForm',
          filterFunc: filterFunc,
          validate: validate }));


    } }]);return DirectorsForm;}(_react.Component);


var mapStateToProps = function mapStateToProps(state) {return {
    directors: state.directors };};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {return {
    onFetchDirectors: function onFetchDirectors() {
      dispatch((0, _directors.fetchDirectors)());
    },
    onCreateDirector: function onCreateDirector(data) {
      dispatch((0, _directors.createDirector)(data));
    },
    onRemoveDirector: function onRemoveDirector(id) {
      dispatch((0, _directors.removeDirector)(id));
    } };};exports.default =


(0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DirectorsForm);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Box = exports.Grid = undefined;var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-gap: 15px;\n  grid-template-columns: repeat(3, [col] 1fr);\n  margin-bottom: 30px;\n'], ['\n  display: grid;\n  grid-gap: 15px;\n  grid-template-columns: repeat(3, [col] 1fr);\n  margin-bottom: 30px;\n']),_templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n']),_templateObject3 = _taggedTemplateLiteral(['\n    grid-column: 1 / 2;\n  '], ['\n    grid-column: 1 / 2;\n  ']),_templateObject4 = _taggedTemplateLiteral(['\n    grid-column: 2 / 4;\n  '], ['\n    grid-column: 2 / 4;\n  ']);var _styledComponents = __webpack_require__(173);var _styledComponents2 = _interopRequireDefault(_styledComponents);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _taggedTemplateLiteral(strings, raw) {return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));}

var Grid = _styledComponents2.default.div(_templateObject);






var Box = _styledComponents2.default.div(_templateObject2,
function (props) {return props.left && (0, _styledComponents.css)(_templateObject3);},


function (props) {return props.right && (0, _styledComponents.css)(_templateObject4);});exports.




Grid = Grid;exports.Box = Box;

/***/ }),

/***/ 1134:
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

var ActionHighlightOff = function ActionHighlightOff(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' })
  );
};
ActionHighlightOff = (0, _pure2.default)(ActionHighlightOff);
ActionHighlightOff.displayName = 'ActionHighlightOff';
ActionHighlightOff.muiName = 'SvgIcon';

exports.default = ActionHighlightOff;

/***/ }),

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(0);
var _reactRedux = __webpack_require__(40);
var _studios = __webpack_require__(1123);

var _validator = __webpack_require__(108);var _validator2 = _interopRequireDefault(_validator);
var _validation = __webpack_require__(410);

var _common = __webpack_require__(409);
var _AdditionForm = __webpack_require__(1122);var _AdditionForm2 = _interopRequireDefault(_AdditionForm);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

var FORM_FIELDS = [
{ id: 1, name: 'name', label: 'Название студии', component: _common.TextField }];var









StudiosForm = function (_Component) {_inherits(StudiosForm, _Component);function StudiosForm() {_classCallCheck(this, StudiosForm);return _possibleConstructorReturn(this, (StudiosForm.__proto__ || Object.getPrototypeOf(StudiosForm)).apply(this, arguments));}_createClass(StudiosForm, [{ key: 'componentDidMount', value: function componentDidMount()
    {var _props =
      this.props,studios = _props.studios,onFetchStudios = _props.onFetchStudios;
      if (!studios.length) onFetchStudios();
    } }, { key: 'render', value: function render()

    {var _props2 =
      this.props,studios = _props2.studios,onRemoveStudio = _props2.onRemoveStudio,onCreateStudio = _props2.onCreateStudio;

      var validate = (0, _validator2.default)({
        name: [_validation.REQUIRED] });


      return (
        React.createElement(_AdditionForm2.default, {
          formFields: FORM_FIELDS,
          sendData: onCreateStudio,
          onRemoveTag: onRemoveStudio,
          tags: studios,
          form: 'StudiosForm',
          validate: validate }));


    } }]);return StudiosForm;}(_react.Component);


var mapStateToProps = function mapStateToProps(state) {return {
    studios: state.studios };};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {return {
    onFetchStudios: function onFetchStudios() {
      dispatch((0, _studios.fetchStudios)());
    },
    onCreateStudio: function onCreateStudio(data) {
      dispatch((0, _studios.createStudio)(data));
    },
    onRemoveStudio: function onRemoveStudio(id) {
      dispatch((0, _studios.removeStudio)(id));
    } };};exports.default =


(0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(StudiosForm);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(0);
var _reactRedux = __webpack_require__(40);
var _countries = __webpack_require__(1124);





var _validator = __webpack_require__(108);var _validator2 = _interopRequireDefault(_validator);
var _validation = __webpack_require__(410);

var _common = __webpack_require__(409);
var _AdditionForm = __webpack_require__(1122);var _AdditionForm2 = _interopRequireDefault(_AdditionForm);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

var FORM_FIELDS = [
{ id: 1, name: 'name', label: 'Название страны', component: _common.TextField },
{ id: 2, name: 'iso', label: 'ISO', component: _common.TextField }];var









CountriesForm = function (_Component) {_inherits(CountriesForm, _Component);function CountriesForm() {_classCallCheck(this, CountriesForm);return _possibleConstructorReturn(this, (CountriesForm.__proto__ || Object.getPrototypeOf(CountriesForm)).apply(this, arguments));}_createClass(CountriesForm, [{ key: 'componentDidMount', value: function componentDidMount()
    {var _props =
      this.props,countries = _props.countries,onFetchCountries = _props.onFetchCountries;
      if (!countries.length) onFetchCountries();
    } }, { key: 'render', value: function render()

    {var _props2 =
      this.props,countries = _props2.countries,onRemoveCountry = _props2.onRemoveCountry,onCreateCountry = _props2.onCreateCountry;

      var validate = (0, _validator2.default)({
        name: [_validation.REQUIRED],
        iso: [_validation.REQUIRED] });


      return (
        React.createElement(_AdditionForm2.default, {
          formFields: FORM_FIELDS,
          sendData: onCreateCountry,
          onRemoveTag: onRemoveCountry,
          tags: countries,
          form: 'CountriesForm',
          validate: validate }));


    } }]);return CountriesForm;}(_react.Component);


var mapStateToProps = function mapStateToProps(state) {return {
    countries: state.countries };};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {return {
    onFetchCountries: function onFetchCountries() {
      dispatch((0, _countries.fetchCountries)());
    },
    onCreateCountry: function onCreateCountry(data) {
      dispatch((0, _countries.createCountry)(data));
    },
    onRemoveCountry: function onRemoveCountry(id) {
      dispatch((0, _countries.removeCountry)(id));
    } };};exports.default =


(0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CountriesForm);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 1137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _reactRedux = __webpack_require__(40);
var _translations = __webpack_require__(1125);





var _validator = __webpack_require__(108);var _validator2 = _interopRequireDefault(_validator);
var _validation = __webpack_require__(410);

var _common = __webpack_require__(409);
var _AdditionForm = __webpack_require__(1122);var _AdditionForm2 = _interopRequireDefault(_AdditionForm);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

var FORM_FIELDS = [
{ id: 1, name: 'name', label: 'Озвучка', component: _common.TextField }];var









TranslationsForm = function (_Component) {_inherits(TranslationsForm, _Component);function TranslationsForm() {_classCallCheck(this, TranslationsForm);return _possibleConstructorReturn(this, (TranslationsForm.__proto__ || Object.getPrototypeOf(TranslationsForm)).apply(this, arguments));}_createClass(TranslationsForm, [{ key: 'componentDidMount', value: function componentDidMount()
    {var _props =
      this.props,translations = _props.translations,onFetchTranslations = _props.onFetchTranslations;
      if (!translations.length) onFetchTranslations();
    } }, { key: 'render', value: function render()

    {var _props2 =




      this.props,translations = _props2.translations,onRemoveTranslation = _props2.onRemoveTranslation,onCreateTranslation = _props2.onCreateTranslation;

      var validate = (0, _validator2.default)({
        name: [_validation.REQUIRED] });


      return (
        _react2.default.createElement(_AdditionForm2.default, {
          formFields: FORM_FIELDS,
          sendData: onCreateTranslation,
          onRemoveTag: onRemoveTranslation,
          tags: translations,
          form: 'CountriesForm',
          validate: validate }));


    } }]);return TranslationsForm;}(_react.Component);


var mapStateToProps = function mapStateToProps(state) {return {
    translations: state.translations };};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {return {
    onFetchTranslations: function onFetchTranslations() {
      dispatch((0, _translations.fetchTranslations)());
    },
    onCreateTranslation: function onCreateTranslation(data) {
      dispatch((0, _translations.createTranslation)(data));
    },
    onRemoveTranslation: function onRemoveTranslation(id) {
      dispatch((0, _translations.removeTranslation)(id));
    } };};exports.default =


(0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TranslationsForm);

/***/ }),

/***/ 1138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(0);var _react2 = _interopRequireDefault(_react);
var _reactRedux = __webpack_require__(40);
var _languages = __webpack_require__(1126);





var _validator = __webpack_require__(108);var _validator2 = _interopRequireDefault(_validator);
var _validation = __webpack_require__(410);

var _common = __webpack_require__(409);
var _AdditionForm = __webpack_require__(1122);var _AdditionForm2 = _interopRequireDefault(_AdditionForm);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

var FORM_FIELDS = [
{ id: 1, name: 'name', label: 'Язык', component: _common.TextField }];var









LanguagesForm = function (_Component) {_inherits(LanguagesForm, _Component);function LanguagesForm() {_classCallCheck(this, LanguagesForm);return _possibleConstructorReturn(this, (LanguagesForm.__proto__ || Object.getPrototypeOf(LanguagesForm)).apply(this, arguments));}_createClass(LanguagesForm, [{ key: 'componentDidMount', value: function componentDidMount()
    {var _props =
      this.props,languages = _props.languages,onFetchLanguages = _props.onFetchLanguages;
      if (!languages.length) onFetchLanguages();
    } }, { key: 'render', value: function render()

    {var _props2 =
      this.props,languages = _props2.languages,onRemoveLanguage = _props2.onRemoveLanguage,onCreateLanguage = _props2.onCreateLanguage;

      var validate = (0, _validator2.default)({
        name: [_validation.REQUIRED] });


      return (
        _react2.default.createElement(_AdditionForm2.default, {
          formFields: FORM_FIELDS,
          sendData: onCreateLanguage,
          onRemoveTag: onRemoveLanguage,
          tags: languages,
          form: 'CountriesForm',
          validate: validate }));


    } }]);return LanguagesForm;}(_react.Component);


var mapStateToProps = function mapStateToProps(state) {return { languages: state.languages };};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {return {
    onFetchLanguages: function onFetchLanguages() {
      dispatch((0, _languages.fetchLanguages)());
    },
    onCreateLanguage: function onCreateLanguage(data) {
      dispatch((0, _languages.createLanguage)(data));
    },
    onRemoveLanguage: function onRemoveLanguage(id) {
      dispatch((0, _languages.removeLanguage)(id));
    } };};exports.default =


(0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LanguagesForm);

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(0);
var _DirectorsForm = __webpack_require__(1132);var _DirectorsForm2 = _interopRequireDefault(_DirectorsForm);
var _StudiosForm = __webpack_require__(1135);var _StudiosForm2 = _interopRequireDefault(_StudiosForm);
var _CountriesForm = __webpack_require__(1136);var _CountriesForm2 = _interopRequireDefault(_CountriesForm);
var _TranslationsForm = __webpack_require__(1137);var _TranslationsForm2 = _interopRequireDefault(_TranslationsForm);
var _LanguagesForm = __webpack_require__(1138);var _LanguagesForm2 = _interopRequireDefault(_LanguagesForm);

var _common = __webpack_require__(409);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

var SELECT_OPTIONS = [
{ _id: 1, name: 'Режиссер' },
{ _id: 2, name: 'Страна' },
{ _id: 3, name: 'Студия' },
{ _id: 4, name: 'Озвучка' },
{ _id: 5, name: 'Язык' }];var


Addition = function (_Component) {_inherits(Addition, _Component);
  function Addition(props) {_classCallCheck(this, Addition);var _this = _possibleConstructorReturn(this, (Addition.__proto__ || Object.getPrototypeOf(Addition)).call(this,
    props));
    _this.state = {
      currentValue: { _id: 5, name: 'Язык' } };


    _this.changeForm = _this.changeForm.bind(_this);return _this;
  }_createClass(Addition, [{ key: 'changeForm', value: function changeForm(

    value) {
      this.setState({ currentValue: value });
    } }, { key: 'render', value: function render()

    {var
      currentValue = this.state.currentValue;
      return (
        React.createElement('div', null,
          React.createElement(_common.Select, {
            options: SELECT_OPTIONS,
            input: { onChange: this.changeForm, value: currentValue },
            floatingLabelText: '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0443',
            fullWidth: false,
            meta: { touched: false } }),

          currentValue._id === 1 && React.createElement(_DirectorsForm2.default, null),
          currentValue._id === 2 && React.createElement(_CountriesForm2.default, null),
          currentValue._id === 3 && React.createElement(_StudiosForm2.default, null),
          currentValue._id === 4 && React.createElement(_TranslationsForm2.default, null),
          currentValue._id === 5 && React.createElement(_LanguagesForm2.default, null)));


    } }]);return Addition;}(_react.Component);exports.default =


Addition;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

});