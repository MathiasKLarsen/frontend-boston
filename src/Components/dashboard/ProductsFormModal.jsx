import { createPortal } from "react-dom";

const ProductsFormModal = ({ 
    isOpen, 
    onClose,
    isEditeMode,
    formData,
    fileName,
    onChange,
    onSubmit,
}) => {
    if (!isOpen) return null;

    const heading = isEditeMode ? "Edit Product" : "Add New Product";
    const submitButtonText = isEditeMode ? "gem Product" : "Add Product";

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h2 className="text-2xl mb-4">{heading}</h2>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={onChange}
                            className="w-full border border-gray-300 p-2 rounded"
                            required
                        />
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default ProductsFormModal;