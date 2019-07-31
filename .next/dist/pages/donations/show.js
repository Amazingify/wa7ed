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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _case = require('../../ethereum/case');

var _case2 = _interopRequireDefault(_case);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _contributionForm = require('../../components/contributionForm');

var _contributionForm2 = _interopRequireDefault(_contributionForm);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\quality\\Desktop\\hackathon\\pages\\donations\\show.js?entry';


var DonationShow = function (_Component) {
       (0, _inherits3.default)(DonationShow, _Component);

       function DonationShow() {
              (0, _classCallCheck3.default)(this, DonationShow);

              return (0, _possibleConstructorReturn3.default)(this, (DonationShow.__proto__ || (0, _getPrototypeOf2.default)(DonationShow)).apply(this, arguments));
       }

       (0, _createClass3.default)(DonationShow, [{
              key: 'renderCards',
              value: function renderCards() {
                     var _props = this.props,
                         donated = _props.donated,
                         rate = _props.rate,
                         Balance = _props.Balance,
                         TargetAmount = _props.TargetAmount;

                     var items = [{

                            header: Math.ceil(_web2.default.utils.fromWei(Balance, 'ether') * rate) + " USD",
                            meta: 'the current balance for this case',
                            description: 'the amount of funds gathered for this case'

                     }, {

                            header: Math.ceil(_web2.default.utils.fromWei(TargetAmount, 'ether') * rate) + " USD",
                            meta: "amount needed to be collected",
                            description: " this is the target amount of this case"

                     }, {
                            header: Math.ceil((_web2.default.utils.fromWei(TargetAmount, 'ether') - _web2.default.utils.fromWei(Balance, 'ether')) * rate) + " USD",
                            meta: "is still needed",
                            description: "this is how much more funds needed for this case"
                     }, {
                            header: donated + " USD",
                            meta: "is how much you donated",
                            description: "the amount of money you donated for this case"
                     }];

                     return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 110
                            }
                     });
              }
       }, {
              key: 'renderOtherDonations',
              value: function renderOtherDonations() {
                     var _this2 = this;

                     var items = this.props.moreDonations.map(function (elem, index) {

                            return {

                                   header: _this2.props.moreDonations[index][2],
                                   meta: "Amount you donated: " + Math.ceil(_web2.default.utils.fromWei(_this2.props.moreDonations[index][3], 'ether') * _this2.props.rate) + " USD" + " • " + "Target Amount: " + Math.ceil(_web2.default.utils.fromWei(_this2.props.moreDonations[index][1], 'ether') * _this2.props.rate) + " USD" + " • " + " Amount Collected: " + Math.ceil(_web2.default.utils.fromWei(_this2.props.moreDonations[index][0], 'ether') * _this2.props.rate) + " USD",
                                   description: _react2.default.createElement(_routes.Link, { route: '/donations/' + _this2.props.moreDonations[index][4], __source: {
                                                 fileName: _jsxFileName,
                                                 lineNumber: 128
                                          }
                                   }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', style: { marginTop: 10 },
                                          __source: {
                                                 fileName: _jsxFileName,
                                                 lineNumber: 129
                                          }
                                   }, 'Donate again')),
                                   fluid: true

                            };
                     });

                     return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 141
                            }
                     });
              }
       }, {
              key: 'render',
              value: function render() {

                     console.log(this.props.donated);
                     return _react2.default.createElement(_Layout2.default, {
                            __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 151
                            }
                     }, _react2.default.createElement('h3', {
                            __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 154
                            }
                     }, this.props.Name), _react2.default.createElement('h4', {
                            __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 155
                            }
                     }, 'This is a sample case description'), _react2.default.createElement(_semanticUiReact.Grid, { divided: 'vertically', __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 157
                            }
                     }, _react2.default.createElement(_semanticUiReact.Grid.Row, { columns: 16, __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 158
                            }
                     }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 159
                            }
                     }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 163
                            }
                     }, _react2.default.createElement(_contributionForm2.default, { rate: this.props.rate, address: this.props.address, __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 164
                            }
                     }))), _react2.default.createElement(_semanticUiReact.Grid.Row, { columns: 16, __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 171
                            }
                     }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 16, __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 174
                            }
                     }, _react2.default.createElement('h3', {
                            __source: {
                                   fileName: _jsxFileName,
                                   lineNumber: 175
                            }
                     }, ' Cases you donated to '), this.renderOtherDonations()))));
              }
       }], [{
              key: 'getInitialProps',
              value: function () {
                     var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                            var dons, other_donations, accounts, userAccount, i, temp, contribution_test, summ, donationCase, summary, resp, to_json, finale, donatedAmount;
                            return _regenerator2.default.wrap(function _callee$(_context) {
                                   while (1) {
                                          switch (_context.prev = _context.next) {
                                                 case 0:
                                                        _context.next = 2;
                                                        return _factory2.default.methods.getDeployedCampaigns().call();

                                                 case 2:
                                                        dons = _context.sent;

                                                        console.log(dons);

                                                        other_donations = [];
                                                        _context.next = 7;
                                                        return _web2.default.eth.getAccounts();

                                                 case 7:
                                                        accounts = _context.sent;
                                                        userAccount = accounts[0];

                                                        console.log(userAccount);

                                                        i = 0;

                                                 case 11:
                                                        if (!(i < dons.length)) {
                                                               _context.next = 26;
                                                               break;
                                                        }

                                                        temp = (0, _case2.default)(dons[i]);
                                                        _context.next = 15;
                                                        return temp.methods.getDonatedAmount(userAccount).call();

                                                 case 15:
                                                        contribution_test = _context.sent;

                                                        if (!(contribution_test > 0 && dons[i] != props.query.address)) {
                                                               _context.next = 23;
                                                               break;
                                                        }

                                                        _context.next = 19;
                                                        return temp.methods.getSummary().call();

                                                 case 19:
                                                        summ = _context.sent;

                                                        summ[3] = contribution_test;
                                                        summ[4] = dons[i];
                                                        other_donations.push(summ);

                                                 case 23:
                                                        i++;
                                                        _context.next = 11;
                                                        break;

                                                 case 26:

                                                        console.log(other_donations);
                                                        donationCase = (0, _case2.default)(props.query.address);
                                                        _context.next = 30;
                                                        return donationCase.methods.getSummary().call();

                                                 case 30:
                                                        summary = _context.sent;
                                                        _context.next = 33;
                                                        return (0, _isomorphicUnfetch2.default)('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR&api_key=d72fbb2700048423c8118fe1032b901856834ad63205c3d4e5163a40686a8940');

                                                 case 33:
                                                        resp = _context.sent;
                                                        _context.next = 36;
                                                        return resp.json();

                                                 case 36:
                                                        to_json = _context.sent;
                                                        finale = to_json;
                                                        _context.next = 40;
                                                        return donationCase.methods.getDonatedAmount(userAccount).call();

                                                 case 40:
                                                        donatedAmount = _context.sent;
                                                        return _context.abrupt('return', {

                                                               moreDonations: other_donations,
                                                               donated: Math.ceil(_web2.default.utils.fromWei(donatedAmount, 'ether') * to_json.ETH.USD),
                                                               rate: to_json.ETH.USD,
                                                               address: props.query.address,
                                                               Balance: summary[0],
                                                               TargetAmount: summary[1],
                                                               Name: summary[2]

                                                        });

                                                 case 42:
                                                 case 'end':
                                                        return _context.stop();
                                          }
                                   }
                            }, _callee, this);
                     }));

                     function getInitialProps(_x) {
                            return _ref.apply(this, arguments);
                     }

                     return getInitialProps;
              }()
       }]);

       return DonationShow;
}(_react.Component);

exports.default = DonationShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxkb25hdGlvbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYXNlIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJmZXRjaCIsImZhY3RvcnkiLCJMaW5rIiwiRG9uYXRpb25TaG93IiwicHJvcHMiLCJkb25hdGVkIiwicmF0ZSIsIkJhbGFuY2UiLCJUYXJnZXRBbW91bnQiLCJpdGVtcyIsImhlYWRlciIsIk1hdGgiLCJjZWlsIiwidXRpbHMiLCJmcm9tV2VpIiwibWV0YSIsImRlc2NyaXB0aW9uIiwibW9yZURvbmF0aW9ucyIsIm1hcCIsImVsZW0iLCJpbmRleCIsIm1hcmdpblRvcCIsImZsdWlkIiwiY29uc29sZSIsImxvZyIsIk5hbWUiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJyZW5kZXJPdGhlckRvbmF0aW9ucyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiLCJkb25zIiwib3RoZXJfZG9uYXRpb25zIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInVzZXJBY2NvdW50IiwiaSIsImxlbmd0aCIsInRlbXAiLCJnZXREb25hdGVkQW1vdW50IiwiY29udHJpYnV0aW9uX3Rlc3QiLCJxdWVyeSIsImdldFN1bW1hcnkiLCJzdW1tIiwicHVzaCIsImRvbmF0aW9uQ2FzZSIsInN1bW1hcnkiLCJyZXNwIiwianNvbiIsInRvX2pzb24iLCJmaW5hbGUiLCJkb25hdGVkQW1vdW50IiwiRVRIIiwiVVNEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFPLEFBQUs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU87Ozs7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REFBcEQ7QSx3RUFDTjs7Z0VBQUEsQUFBUSxJQUFSLEFBQVksQUFHUjs7QSwwRUFBa0IsQTs7K0RBRUMsY0FBQSxBQUFLLElBQUwsQUFBUyxBOztzREFBMUI7QSw0RUFDQTtBLHNFQUFjLFMsQUFBQSxBQUFTLEFBQzdCOztnRUFBQSxBQUFRLElBQVIsQUFBWSxBQUVKOztBLDREQUFJLEE7Ozs4REFBSSxJQUFHLEssQUFBSzs7O0FBRWxCOztBLCtEQUFPLG9CQUFLLEtBQUwsQUFBSyxBQUFLLEE7OytEQUNTLEtBQUEsQUFBSyxRQUFMLEFBQWEsaUJBQWIsQUFBOEIsYUFBOUIsQUFBMkMsQTs7c0RBQXJFO0E7OzhEQUVELG9CQUFBLEFBQWtCLEtBQUssS0FBQSxBQUFLLE1BQU0sTUFBQSxBQUFNLE0sQUFBTTs7Ozs7OytEQUU3QixLQUFBLEFBQUssUUFBTCxBQUFhLGFBQWIsQSxBQUEwQjs7c0RBQXZDO0Esd0VBQ0o7OzZEQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7NkRBQUEsQUFBSyxLQUFLLEtBQVYsQUFBVSxBQUFLLEFBQ2Y7d0VBQUEsQUFBZ0IsS0FBaEIsQUFBcUI7O3NEQVZNO0E7Ozs7c0RBY2hDOztnRUFBQSxBQUFRLElBQVIsQUFBWSxBQUNOO0EsdUVBQWUsb0JBQUssTUFBQSxBQUFNLE1BQVgsQUFBaUIsQTs7K0RBQ2hCLGFBQUEsQUFBYSxRQUFiLEFBQXFCLGFBQXJCLEEsQUFBa0M7O3NEQUFsRDtBOzsrREFDYyxpQ0FBQSxBLEFBQU07O3NEQUFwQjtBOzsrREFDZ0IsS0FBQSxBQUFLLEE7O3NEQUFyQjtBLDJFQUNBO0EsaUUsQUFBUzs7K0RBQ2EsYUFBQSxBQUFhLFFBQWIsQUFBcUIsaUJBQXJCLEFBQXNDLGFBQXRDLEEsQUFBbUQ7O3NEQUF6RTtBOzs7OEVBRUEsQUFFVSxBQUNoQjt3RUFBVSxLQUFBLEFBQUssS0FBSyxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsZUFBbkIsQUFBaUMsV0FBUyxRQUFBLEFBQVEsSUFIaEUsQUFHSSxBQUFnRSxBQUMxRTtxRUFBSyxRQUFBLEFBQVEsSUFKUCxBQUlXLEFBQ2pCO3dFQUFTLE1BQUEsQUFBTSxNQUxULEFBS2UsQUFDckI7d0VBQVMsUUFOSCxBQU1HLEFBQVEsQUFDakI7NkVBQWMsUUFQUixBQU9RLEFBQVEsQUFDdEI7cUVBQU8sUUFSRCxBQVFDLEFBQVEsQTs7QUFSVCxBQUVOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBekNvQixBLEFBc0wzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3F1YWxpdHkvRGVza3RvcC9oYWNrYXRob24ifQ==