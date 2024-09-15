"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Pour typer les props

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("section", {
    className: "modal-content"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Employee Created"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    className: "modal-close-button"
  }, "Close")));
};
Modal.propTypes = {
  isOpen: _propTypes["default"].bool.isRequired,
  onClose: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = Modal;