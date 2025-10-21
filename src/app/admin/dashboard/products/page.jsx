"use client";

import { useEffect, useState } from "react";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../../../data/getProduct";
import ProductsFormModal from "../../../../Components/dashboard/ProductsFormModal";
import ConfirmDeleteBox from "../../../../Components/dashboard/ConfirmDeleteBox";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [product, setProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [fileName, setFileName] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState(false);

  const [formData, setFormData] = useState({
    _id: "",
    title: "",
    content: "",
    category: "", // changed to string to hold category ID or title
    productimage: null,
  });

  useEffect(() => {
    getProduct().then(setProduct);
  }, []);

  useEffect(() => {
    if (editProduct) {
      setFormData({
        _id: editProduct._id,
        title: editProduct.title,
        content: editProduct.content,
        category: editProduct.category?.title || "", // Access category title for the form
        productimage: editProduct.productimage,
      });
      setFileName(
        typeof editProduct.productimage === "string"
          ? editProduct.productimage
          : ""
      );
    } else {
      setFormData({
        _id: "",
        title: "",
        content: "",
        category: "",
        productimage: null,
      });
      setFileName("");
    }
  }, [editProduct]);

  const handleUpdate = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      if (files && files.length > 0) {
        setFormData((prev) => ({ ...prev, productimage: files[0] }));
        setFileName(files[0].name);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("content", formData.content);
    // Here you might want to send category ID or title depending on backend expectations
    formDataToSend.append("category", formData.category);
    if (formData.productimage) {
      formDataToSend.append("productimage", formData.productimage);
    }

    if (editProduct?._id) {
      await updateProduct(editProduct._id, formDataToSend);
    } else {
      await createProduct(formDataToSend);
    }

    const updatedProducts = await getProduct();
    setProduct(updatedProducts);

    setFeedbackMessage(true);

    setFormData({
      _id: "",
      title: "",
      content: "",
      category: "",
      productimage: null,
    });
    setFileName("");
    setEditProduct(null);

    setTimeout(() => {
      setFeedbackMessage(false);
      setShowModal(false);
      router.refresh();
    }, 2000);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProduct((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <>
      <h2>Products</h2>

      <button
        className="mb-4 bg-green-500 px-4 py-2 rounded"
        onClick={() => {
          setEditProduct(null);
          setShowModal(true);
        }}
      >
        Tilføj nyt Product
      </button>

      <div className="grid grid-cols-3 gap-4">
        {product?.map((item) => (
          <div key={item._id} className="border p-4 space-y-4">
            <img
                src={`http://localhost:5039/images/product/${item.productimage}`}
                alt={item.title}
                className="mb-2 max-h-32 object-contain"
            />
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="mb-2 line-clamp-3">{item.content}</p>
            <p className="mb-2">
              Category: {item.category?.title || "No category"}
            </p>

            <div className="flex gap-4">
                <button
                  type="button"
                  className="cursor-pointer bg-blue-400 py-2 px-4 rounded"
                  onClick={() => {
                    setEditProduct(item);
                    setShowModal(true);
                  }}
                >
                  Edit Product
                </button>
                <button
                  type="button"
                  className="cursor-pointer bg-red-400 py-2 px-4 rounded"
                  onClick={() => setDeleteTarget(item)}
                >
                  Delete Product
                </button>
            </div>
          </div>
        ))}
      </div>

      <ProductsFormModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditProduct(null);
        }}
        isEditMode={!!editProduct}
        formData={formData}
        onChange={handleUpdate}
        onSubmit={onSubmit}
      />

      <ConfirmDeleteBox
        open={!!deleteTarget}
        data={deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => {
          if (deleteTarget?._id) {
            handleDelete(deleteTarget._id);
          }
          setDeleteTarget(null);
        }}
      />

      {feedbackMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded">
          Product updated successfully!
        </div>
      )}
    </>
  );
};

export default page;
