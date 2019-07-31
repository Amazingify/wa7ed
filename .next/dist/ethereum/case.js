'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Donation = require('./build/Donation.json');

var _Donation2 = _interopRequireDefault(_Donation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {

  return new _web2.default.eth.Contract(JSON.parse(_Donation2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxjYXNlLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJkb25hdGlvbiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXFCLEFBQXJCLEFBSUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBWSxBQUd6Qjs7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FFTCxLQUFLLEFBQUwsTUFBVyxtQkFBUyxBQUFwQixBQUZLLFlBR0wsQUFISyxBQUFQLEFBUUQ7QUFYRCIsImZpbGUiOiJjYXNlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3F1YWxpdHkvRGVza3RvcC9oYWNrYXRob24ifQ==