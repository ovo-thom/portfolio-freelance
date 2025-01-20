import PropTypes from 'prop-types';

export default function Modal({ isOpen, onClose, title, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-black border border-blue-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-600">{title}</h2>
        <p className="mt-4 text-gray-400">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-blue-900 text-white rounded"
        >
          OK
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
