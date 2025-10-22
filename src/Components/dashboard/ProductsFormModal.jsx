"use client";

import { createPortal } from "react-dom";
import { getCategory } from "../../data/getCategory";
import React, { useEffect, useState } from "react";

const ProductsFormModal = ({
  isOpen,
  onClose,
  isEditMode,
  formData,
  fileName,
  onChange,
  onSubmit,
}) => {
  if (!isOpen) return null;

  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory().then(setCategory);
  }, []);

  const heading = isEditMode ? "Edit Product" : "Add New Product";
  const submitButtonText = isEditMode ? "Save Product" : "Add Product";

  return createPortal(
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
        >
          ×
        </button>

        <h2 className="text-2xl mb-4 admin-title">{heading}</h2>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block mb-1 admin-title">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded admin-title"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-1 admin-title">Content</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded admin-title"
              rows={4}
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 admin-title">Category</label>
            <select
              id="category"
              name="category"
              className="w-full mb-2 border border-gray-300 p-2 rounded admin-title"
              onChange={onChange}
              value={formData.category}
              required
            >
              <option value="">Vælg kategori</option>
              {category.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-1 admin-title">Product Image</label>
            <input
              id="productimage"
              type="file"
              name="productimage"
              onChange={onChange}
              className="w-full border border-gray-300 p-2 rounded bg-white admin-title"
              accept="image/*"
            />
            {fileName && (
              <p className="mt-1 text-sm text-gray-600">Selected: {fileName}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            {submitButtonText}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ProductsFormModal;
