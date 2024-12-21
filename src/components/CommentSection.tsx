'use client'

import { useState } from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'

const initialComments = [
  { id: 1, author: 'John Smith', content: 'Great Blog ', date: 'May 16, 2023' },
  { id: 2, author: 'Alice Johnson', content: 'Informative!', date: 'May 17, 2023' },
]


export default function Comments() {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')
  const [editCommentId, setEditCommentId] = useState<number | null>(null)
  const [editedContent, setEditedContent] = useState('')

  const addComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: 'You',
        content: newComment,
        date: new Date().toLocaleDateString(),
      }
      setComments([...comments, comment])
      setNewComment('')
    }
  }

  const deleteComment = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id))
  }

  const startEditing = (id: number, content: string) => {
    setEditCommentId(id)
    setEditedContent(content)
  }

  const saveEditedComment = (e: React.FormEvent) => {
    e.preventDefault()
    setComments(comments.map(comment =>
      comment.id === editCommentId ? { ...comment, content: editedContent } : comment
    ))
    setEditCommentId(null)
    setEditedContent('')
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={addComment} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-md"
          rows={3}
          placeholder="Add a comment..."
        ></textarea>
        <button type="submit" className="mt-2 bg-myPrimary text-white px-4 py-2 rounded-xl font-semibold hover:bg-mySecondary transition-colors duration-500">
          Post Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded-md">
            {editCommentId === comment.id ? (
              // Edit Mode
              <form onSubmit={saveEditedComment}>
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  rows={2}
                ></textarea>
                <div className="mt-2 flex gap-2">
                  <button type="submit" className="bg-myPrimary text-white px-4 py-1 rounded-md hover:bg-mySecondary transition-colors">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditCommentId(null)}
                    className="bg-gray-300 text-black px-4 py-1 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              // View Mode
              <>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{comment.author}</span>
                  <span className="text-sm text-gray-600">{comment.date}</span>
                </div>
                <p>{comment.content}</p>
                {comment.author === 'You' && (
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => startEditing(comment.id, comment.content)}
                      className="text-mySecondary transition-colors flex items-center gap-1"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => deleteComment(comment.id)}
                      className="text-red-600 transition-colors flex items-center gap-1"
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
