"use client"
import { useRef } from "react"
import { Editor } from "@tinymce/tinymce-react";


export default function HtmlEditor () {
  const editorRef = useRef<any>();
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };


  return (
    <>
      <Editor
        apiKey={process.env.TINY_MCE_API_KEY}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={() => {
          throw new Error('frontend error!')
        }}>Log editor content</button>
    </>
  );
}