"use client";

import { on } from "events";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ModalConfirmDeleteBox = ({ open, data, onClose, onConfirm }) => {
  const [showFeedback, setShowFeedback] = useState(false); // controlling the display of feedback
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!open || !data || !isMounted) return null;

  const handleDelete = async () => {
    setShowFeedback(true);

    setTimeout(() => {
      onConfirm(data._id);
      setShowFeedback(false);
      onClose();
    }, 2000);
  };

  return createPortal(
    <>
      <div className="fixed inset-0 bg-black/20 z-30" onClick={onClose} />
      <div>
        <h2>
          Vil du slette:{""}
          <span>{data.title}</span>
        </h2>

        {showFeedback && (
          <div className="bg-green-500 text-white p-2 rounded mb-4">
            Produktet er slettet!
          </div>  
        )}

        <div>
          <button
            onClick={handleDelete}
          >
            Slet
          </button>
          <button
            onClick={onClose}
          >
            Annuller
          </button>
        </div>
      </div>
    </>,
    document.body
  );
};

export default ModalConfirmDeleteBox;
