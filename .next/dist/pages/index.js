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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _case = require('../ethereum/case');

var _case2 = _interopRequireDefault(_case);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\quality\\Desktop\\hackathon\\pages\\index.js?entry';


var donationIndex = function (_Component) {
  (0, _inherits3.default)(donationIndex, _Component);

  function donationIndex() {
    (0, _classCallCheck3.default)(this, donationIndex);

    return (0, _possibleConstructorReturn3.default)(this, (donationIndex.__proto__ || (0, _getPrototypeOf2.default)(donationIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(donationIndex, [{
    key: 'renderDonation',
    value: function renderDonation() {
      var _this2 = this;

      var items = this.props.donation.map(function (address, index) {

        return {

          header: _this2.props.title[index],

          meta: "Amount Collected: " + Math.ceil(_web2.default.utils.fromWei(_this2.props.summary[index][0], 'ether') * _this2.props.rate) + " USD" + " • Target Amount: " + Math.ceil(_web2.default.utils.fromWei(_this2.props.summary[index][1], 'ether') * _this2.props.rate) + " USD",

          description: _react2.default.createElement(_routes.Link, { route: '/donations/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', style: { marginTop: 10 },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          }, 'Donate now')),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      });
    }
  }, {
    key: 'changePage',
    value: function changePage() {
      routes = "/donations/new";
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, ' Avilable Cases '), _react2.default.createElement(_routes.Link, { routes: '/donations/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        onClick: this.changePage,
        floated: 'right',
        content: 'Create a new case',
        icon: 'add circle',
        primary: true,

        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }))), this.renderDonation()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var donation, title, summary, i, currentTitle, donationCase, current, resp, to_json;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                donation = _context.sent;
                title = [];
                summary = [];
                i = 0;

              case 6:
                if (!(i < donation.length)) {
                  _context.next = 19;
                  break;
                }

                _context.next = 9;
                return _factory2.default.methods.getTitle(donation[i]).call();

              case 9:
                currentTitle = _context.sent;

                title.push(currentTitle);
                donationCase = (0, _case2.default)(donation[i]);
                _context.next = 14;
                return donationCase.methods.getSummary().call();

              case 14:
                current = _context.sent;

                summary.push(current);

              case 16:
                i++;
                _context.next = 6;
                break;

              case 19:
                _context.next = 21;
                return (0, _isomorphicUnfetch2.default)('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=d72fbb2700048423c8118fe1032b901856834ad63205c3d4e5163a40686a8940');

              case 21:
                resp = _context.sent;
                _context.next = 24;
                return resp.json();

              case 24:
                to_json = _context.sent;

                console.log(to_json.ETH.USD);
                console.log(summary);

                return _context.abrupt('return', {
                  summary: summary,
                  donation: donation,
                  title: title,
                  rate: to_json.ETH.USD

                });

              case 28:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return donationIndex;
}(_react.Component);

exports.default = donationIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiTGluayIsIndlYjMiLCJDYXNlIiwiZmV0Y2giLCJkb25hdGlvbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImRvbmF0aW9uIiwibWFwIiwiYWRkcmVzcyIsImluZGV4IiwiaGVhZGVyIiwidGl0bGUiLCJtZXRhIiwiTWF0aCIsImNlaWwiLCJ1dGlscyIsImZyb21XZWkiLCJzdW1tYXJ5IiwicmF0ZSIsImRlc2NyaXB0aW9uIiwibWFyZ2luVG9wIiwiZmx1aWQiLCJyb3V0ZXMiLCJjaGFuZ2VQYWdlIiwicmVuZGVyRG9uYXRpb24iLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiaSIsImxlbmd0aCIsImdldFRpdGxlIiwiY3VycmVudFRpdGxlIiwicHVzaCIsImRvbmF0aW9uQ2FzZSIsImdldFN1bW1hcnkiLCJjdXJyZW50IiwicmVzcCIsImpzb24iLCJ0b19qc29uIiwiY29uc29sZSIsImxvZyIsIkVUSCIsIlVTRCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQU87O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVc7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7O0lBRUQsQTs7Ozs7Ozs7Ozs7cUNBcUNhO21CQUdoQjs7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSyxVQUFBLEFBQUMsU0FBRCxBQUFXLE9BQVMsQUFFNUQ7Ozs7a0JBR1UsT0FBQSxBQUFLLE1BQUwsQUFBVyxNQUhkLEFBR0csQUFBaUIsQUFFekI7O2dCQUFRLHVCQUF3QixLQUFBLEFBQUssS0FBSyxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsT0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLE9BQXRDLEFBQW1CLEFBQTBCLElBQTdDLEFBQWdELFdBQVcsT0FBQSxBQUFLLE1BQWxHLEFBQXdCLEFBQWdGLFFBQXhHLEFBQStHLFNBQS9HLEFBQ1IsdUJBQXVCLEtBQUEsQUFBSyxLQUFLLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxPQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsT0FBdEMsQUFBbUIsQUFBMEIsSUFBN0MsQUFBZ0QsV0FBVyxPQUFBLEFBQUssTUFEekYsQUFDZSxBQUFnRixRQU5sRyxBQU0wRyxBQUVoSDs7dUNBR0csQUFBQyw4QkFBSyx1QkFBTixBQUEyQjt3QkFBM0I7MEJBQUEsQUFDQTtBQURBO1dBQUEsa0JBQ0EsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQixTQUFRLE9BQVMsRUFBQyxXQUF0QyxBQUFxQyxBQUFXOzt3QkFBaEQ7MEJBQUE7QUFBQTthQVpHLEFBV0gsQUFDQSxBQUtIO2lCQWpCRCxBQUFPLEFBaUJDLEFBSUY7QUFyQkMsQUFHTjtBQUxBLEFBQWMsQUEwQmQsT0ExQmM7OzJDQTBCUCxBQUFHLHNCQUFILEFBQVEsU0FBTSxPQUFkLEFBQXVCO29CQUF2QjtzQkFBUCxBQUFPLEFBRVA7QUFGTztPQUFBOzs7O2lDQUlLLEFBQ1g7ZUFBQSxBQUFPLEFBQ1A7Ozs7NkJBRUssQUFFTDs7NkJBRUMsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBOztvQkFBQTtzQkFBQSxBQUVEO0FBRkM7QUFBQSx5QkFFRCxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGQyxBQUVELEFBR0QscUNBQUEsQUFBQyw4QkFBSyxRQUFOLEFBQWM7b0JBQWQ7c0JBQUEsQUFFRTtBQUZGO3lCQUVFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNBLEFBQUM7aUJBQ1csS0FEWixBQUNpQixBQUNoQjtpQkFGRCxBQUVTLEFBQ1I7aUJBSEQsQUFHVyxBQUNWO2NBSkQsQUFJTSxBQUNMO2lCQUxELEFBS1U7OztvQkFMVjtzQkFSQSxBQUtGLEFBRUUsQUFDQSxBQVVFO0FBVkY7QUFDQyxpQkFaRixBQUVDLEFBQ0EsQUFrQkUsQUFBSyxBQVNSOzs7Ozs7Ozs7Ozs7dUJBcEd1QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O21CQUF4RDtBLG9DQUVGO0Esd0JBQVEsQSxBQUNSO0EsMEJBQVUsQSxBQUVMO0Esb0JBQUksQTs7O3NCQUFJLElBQUcsU0FBUyxBOzs7Ozs7dUJBRUYsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLFNBQVMsU0FBekIsQUFBeUIsQUFBUyxJQUFsQyxBQUFzQyxBOzttQkFBM0Q7QSx3Q0FDSjs7c0JBQUEsQUFBTSxLQUFOLEFBQVcsQUFDUDtBLCtCQUFlLG9CQUFLLFNBQUwsQUFBSyxBQUFTLEE7O3VCQUNaLGFBQUEsQUFBYSxRQUFiLEFBQXFCLGFBQXJCLEEsQUFBa0M7O21CQUFuRDtBLG1DQUNKOzt3QkFBQSxBQUFRLEtBQVIsQUFBYTs7bUJBTnVCO0E7Ozs7Ozt1QkFTbkIsaUNBQUEsQUFBTSxBOzttQkFBcEI7QTs7dUJBQ2dCLEssQUFBQSxBQUFLOzttQkFBckI7QSxtQ0FDTjs7d0JBQUEsQUFBUSxJQUFJLFFBQUEsQUFBUSxJQUFwQixBQUF3QixBQUN4Qjt3QkFBQSxBQUFRLElBQVIsQUFBWTs7OzJCQUVMLEFBRU47NEJBRk0sQUFHTjt5QkFITSxBQUlOO3dCQUFPLFFBQUEsQUFBUSxJLEFBSlQsQUFJYTs7QUFKYixBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMUJ3QixBLEFBZ0g1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9xdWFsaXR5L0Rlc2t0b3AvaGFja2F0aG9uIn0=