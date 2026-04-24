"use client";

import { useState } from "react";
import { useArticleSubmit } from "@/hooks/useArticleSubmit";

export default function ArticleForm() {
  const { submit, loading, errors, success } = useArticleSubmit();

  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
    tags: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    submit({
      ...form,
      tags: form.tags.split(",").map(t => t.trim()).filter(Boolean),
    });
  };

  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Submit Article
        </h2>
        <p className="text-sm text-gray-500">
          Your article will be processed for SEO optimization automatically.
        </p>
      </div>

      {/* Title */}
      <div>
        <input
          name="title"
          placeholder="Enter article title"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          onChange={handleChange}
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">{errors.title}</p>
        )}
      </div>

      {/* Content */}
      <div>
        <textarea
          name="content"
          placeholder="Write your article content..."
          rows={6}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          onChange={handleChange}
        />
        {errors.content && (
          <p className="text-sm text-red-500 mt-1">{errors.content}</p>
        )}
      </div>

      {/* Row Inputs */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="category"
          placeholder="Category"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          onChange={handleChange}
        />

        <input
          name="author"
          placeholder="Author"
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          onChange={handleChange}
        />
      </div>

      {/* Tags */}
      <div>
        <input
          name="tags"
          placeholder="Tags (comma separated)"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black"
          onChange={handleChange}
        />
        {errors.tags && (
          <p className="text-sm text-red-500 mt-1">{errors.tags}</p>
        )}
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Article"}
      </button>

      {/* Success */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-lg text-sm">
          Article submitted successfully 🚀
        </div>
      )}
    </div>
  );
}