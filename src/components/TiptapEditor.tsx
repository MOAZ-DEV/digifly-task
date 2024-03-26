'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import EditorToolBar from './EditorToolBar'
import Bold from '@tiptap/extension-bold'
import BulletList from '@tiptap/extension-bullet-list'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import FontFamily from '@tiptap/extension-font-family'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import { SetStateAction, useState } from 'react'
import { Heading } from 'src/tiptap-extentions/Heading'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

const TiptapEditor = () => {

  const editor = useEditor({
    extensions: [
      Paragraph,
      Text,
      StarterKit,
      OrderedList.configure({
        HTMLAttributes: {
          class: 'list-decimal',
        },
        itemTypeName: 'listItem',
        keepMarks: true,
        keepAttributes: true,

      }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'list-disc',
        },
        itemTypeName: 'listItem',
        keepMarks: true,
        keepAttributes: true,

      }),
      ListItem,
      Bold,
      Italic,
      Underline,
      //  Indent,
      // Outdent,
      Heading.configure({
        HTMLAttributes: {
          levels: [1, 2, 3, 4],
        },
      }),
      TextStyle,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'right', 'justify'],
      }),
      FontFamily,
    ],
    content: 'إنها سلسلة من الكلمات اللاتينية التي ، عند وضعها في موضعها ، لا تشكل جملًا بمعنى كامل ، ولكنها تعطي الحياة لنص اختبار مفيد لملء الفراغات التي يتم شغلها لاحقًا من نصوص مخصصة كتبها متخصصون في الاتصال.',
  });

  return (
    <div className='flex flex-col gap-0 w-full px-4 max-w-[1284px] mx-auto'>
      <EditorToolBar editor={editor} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  )
}

export default TiptapEditor;
/**
 width: Fill (1,242px)px;
height: Fixed (243px)px;
padding: 40px 0px 0px 0px;
gap: 10px;
opacity: 0px;

 */