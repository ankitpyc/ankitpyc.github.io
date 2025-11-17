"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Import the Button component

const BlogEditorPage = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(getCurrentDate()); // Set default date to today
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

    const blogPost = {
      title,
      date,
      tags: tags.split(",").map((tag) => tag.trim()),
      description,
      content,
      slug,
    };

    try {
      const response = await fetch("/api/save-blog-draft", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogPost),
      });

      if (response.ok) {
        setMessage("Blog draft saved successfully!");
        router.push(`/blog/${slug}`); // Redirect to the draft blog post
      } else {
        const errorData = await response.json();
        setMessage(`Error saving blog draft: ${errorData.error}`);
      }
    } catch (error: any) {
      setMessage(`Error saving blog draft: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-lg font-medium text-gray-700">
            Date (YYYY-MM-DD)
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="tags" className="block text-lg font-medium text-gray-700">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            id="tags"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="content" className="block text-lg font-medium text-gray-700">
            Content (Markdown/MDX)
          </label>
          <textarea
            id="content"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-mono"
            rows={15}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <Button type="submit">
          Save Draft
        </Button>
      </form>
      {message && <p className="mt-4 text-blue-600">{message}</p>}
    </div>
  );
};

export default BlogEditorPage;
