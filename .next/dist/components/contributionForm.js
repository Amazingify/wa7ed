'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _case = require('../ethereum/case');

var _case2 = _interopRequireDefault(_case);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\quality\\Desktop\\hackathon\\components\\contributionForm.js';


var contributionForm = function (_Component) {
  (0, _inherits3.default)(contributionForm, _Component);

  function contributionForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, contributionForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = contributionForm.__proto__ || (0, _getPrototypeOf2.default)(contributionForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var amount, case1, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                event.preventDefault();

                amount = _this.state.value / _this.props.rate;
                case1 = (0, _case2.default)(_this.props.address);
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;

                console.log(accounts[0]);

                _context.next = 10;
                return case1.methods.contribute(1).send({

                  from: accounts[0],
                  value: _web2.default.utils.toWei(String(amount), 'ether')

                });

              case 10:

                _routes.Router.replaceRoute('/donations/' + _this.props.address);

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](3);
                console.log(_context.t0);
              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(contributionForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, ' Amount to Contribute '), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: 'USD',
        labelPosition: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Contribute!'));
    }
  }]);

  return contributionForm;
}(_react.Component);

exports.default = contributionForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbnRyaWJ1dGlvbkZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FzZSIsIndlYjMiLCJSb3V0ZXIiLCJmZXRjaCIsImNvbnRyaWJ1dGlvbkZvcm0iLCJzdGF0ZSIsInZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYW1vdW50IiwicHJvcHMiLCJyYXRlIiwiY2FzZTEiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsIlN0cmluZyIsInJlcGxhY2VSb3V0ZSIsInNldFN0YXRlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVEsQUFBTyxBQUFRLEFBQVM7O0FBQ2hDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOztBQUNyQixBQUFPOzs7Ozs7Ozs7SUFFRCxBOzs7Ozs7Ozs7Ozs7Ozs7Z08sQUFHRjthQUNVLEEsQUFERjtBQUFBLEFBQ04sYSxBQUdGOzJGQUFXLGlCQUFBLEFBQU8sT0FBUDsyQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFLUDs7c0JBQUEsQUFBTSxBQUVGOztBQVBHLHlCQU9NLE1BQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxNQUFBLEFBQUssTUFQOUIsQUFPb0MsQUFFckM7QUFUQyx3QkFTTyxvQkFBSyxNQUFBLEFBQUssTUFUakIsQUFTTyxBQUFnQjtnQ0FUdkI7Z0NBQUE7dUJBYWlCLGNBQUEsQUFBSyxJQWJ0QixBQWFpQixBQUFTOzttQkFBekI7QUFiRCxvQ0FjTDs7d0JBQUEsQUFBUSxJQUFJLFNBZFAsQUFjTCxBQUFZLEFBQVM7O2dDQWRoQjs2QkFnQkMsQUFBTSxRQUFOLEFBQWMsV0FBZCxBQUF5QixHQUF6QixBQUE0Qjs7d0JBRTNCLFNBRmdDLEFBRWhDLEFBQVMsQUFDZjt5QkFBUSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU8sT0FBbEIsQUFBa0IsQUFBTyxTQW5CN0IsQUFnQkMsQUFBaUMsQUFHOUIsQUFBa0M7O0FBSEosQUFFdEMsaUJBRks7O21CQU9SOzsrQkFBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUF2QmhDLEFBdUJQLEFBQTZDOztnQ0F2QnRDO0FBQUE7O21CQUFBO2dDQUFBO2dEQXlCTTt3QkFBQSxBQUFRLGFBekJkO21CQUFBO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7Ozs7Ozs7NkJBNkJKO21CQUdOOzs2QkFFQyxBQUFDLHVDQUFLLFVBQVcsS0FBakIsQUFBc0I7b0JBQXRCO3NCQUFBLEFBRUM7QUFGRDtPQUFBLGtCQUVFLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFFRTtBQUZGO0FBQUEseUJBRUUsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNDLDJDQUFBLEFBQUM7ZUFDUyxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNwQjtrQkFBWSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQVEsTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUYxRCxBQUdDO2VBSEQsQUFHTyxBQUNOO3VCQUpELEFBSWlCO29CQUpqQjtzQkFMSixBQUVDLEFBR0csQUFRSDtBQVJHO0FBQ0MsMkJBT0osQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FmRixBQUVDLEFBYUMsQUFTSDs7Ozs7QUEvRDJCLEEsQUFvRS9COztrQkFBQSxBQUFlIiwiZmlsZSI6ImNvbnRyaWJ1dGlvbkZvcm0uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcXVhbGl0eS9EZXNrdG9wL2hhY2thdGhvbiJ9