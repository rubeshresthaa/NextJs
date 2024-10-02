// app/api/posts/[id]/route.js
import dbConnect from '@/lib/dbConnect';
import Post from '@/models/Post';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
  const { id } = params;
  const { title, slug, content } = await req.json();

  await dbConnect();

  try {
    const updatedPost = await Post.findByIdAndUpdate(id, { title, slug, content }, { new: true });
    if (!updatedPost) {
      return NextResponse.json({ success: false, message: 'Post not found.' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: updatedPost }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error updating post.' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  await dbConnect();

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return NextResponse.json({ success: false, message: 'Post not found.' }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: 'Post deleted successfully.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error deleting post.' }, { status: 500 });
  }
}
