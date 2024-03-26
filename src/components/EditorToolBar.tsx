'use client'

import Image from "next/image";
import { type Editor } from '@tiptap/react'
import { useEffect, useState } from "react";


const EditorToolBar = (Props: { editor: Editor | null; }) => {

    const
        { editor } = Props;

    const
        orderLists = [{
            icon: 'orderedList',
            title: 'orderedList',
            action: () => editor?.commands.toggleOrderedList()
        },
        {
            icon: 'unorderedList',
            title: 'bulletList',
            action: () => editor?.commands.toggleBulletList()
        }],
        alignLists = [{
            icon: 'indent',
            title: 'indent',
            action: () => { },
        },
        {
            icon: 'outdent',
            title: 'indent',
            action: () => { },
        },
        {
            icon: 'alignLeft',
            title: 'left',
            action: () => editor?.commands.setTextAlign('left'),
        },
        {
            icon: 'alignJustify',
            title: 'alignJustify',
            action: () => editor?.commands.setTextAlign('justify'),
        },
        {
            icon: 'alignRight',
            title: 'alignRight',
            action: () => editor?.commands.setTextAlign('right'),
        }],
        stylingLists = [{
            icon: 'font.family',
            title: 'Font Family',
            action: () => { },
        },
        {
            icon: 'bold',
            title: 'bold',
            action: () => editor?.chain().focus().toggleBold().run(),
        },
        {
            icon: 'italic',
            title: 'italic',
            action: () => editor?.chain().focus().toggleItalic().run(),
        },
        {
            icon: 'underline',
            title: 'underline',
            action: () => editor?.chain().focus().toggleUnderline().run(),
        },],
        hostoryLists = [{
            icon: 'undo',
            title: 'undo',
            action: () => editor?.chain().focus().undo().run(),
        },
        {
            icon: 'redo',
            title: 'redo',
            action: () => editor?.chain().focus().redo().run(),
        }];
    const
        [menuIs, setMenuIs] = useState(''),
        [fontFamily, setFontFamily] = useState(''),
        [fontSize, setFontSize] = useState(Number);
    return (
        <div className="flex flex-row items-start xl:justify-center w-full border-b *:border *:border-black-400 overflow-x-scroll overflow-y-hidden no-scrollbar *:z-[10]">
            {menuIs === 'fontFamily' ?
                <ul className="flex flex-row min-w-fit *:bg-[#F8F7FC] *:h-16 *:min-w-[73px] *:px-6 *:w-fit *:flex *:items-center *:justify-center">
                    {['Inter', 'Comic Sans MS, Comic Sans', 'serif', 'monospace', 'cursive', null].map((opt: any) => <button
                        className='relative flex flex-row gap-3 items-center hover:bg-black-400 !min-w-fit'
                        onClick={() => { opt === null ? editor?.commands.unsetFontFamily() : editor?.commands.setFontFamily(opt); setMenuIs(''); setFontFamily(opt) }} >{opt === null ? 'Unset' : opt}</button>)}
                </ul> : null}
            {menuIs === 'fontSize' ?
                <ul className="flex flex-row min-w-fit *:bg-[#F8F7FC] *:h-16 *:min-w-[73px] *:px-6 *:w-fit *:flex *:items-center *:justify-center">
                    {[1, 2, 3].map((opt: any) => <button
                        className='relative flex flex-row gap-3 items-center hover:bg-black-400 !min-w-fit'
                        onClick={() => { editor?.commands.setHeading({ level: opt }); setMenuIs(''); setFontSize(opt) }} >{opt}x</button>)}
                </ul> : null}
            {menuIs === '' ? <>
                <div className="flex flex-row min-w-fit *:bg-[#F8F7FC] *:h-16 *:min-w-[73px] *:px-6 *:w-fit *:flex *:items-center *:justify-center">
                    {orderLists.map((a) =>
                        <button className={`flex flex-row gap-3 items-center hover:bg-black-400 ${editor?.isActive(a.title) ? '!bg-accentEmerald-500 *:invert' : ''}`} onClick={a.action}>
                            <Image src={`/assets/${a.icon}.svg`} height={25} width={25} alt="" />
                        </button>
                    )}
                </div>
                <div className="flex flex-row min-w-fit *:bg-[#F8F7FC] *:h-16 *:min-w-[73px] *:px-6 *:w-fit *:flex *:items-center *:justify-center">
                    {alignLists.map((a) =>
                        <button className={`flex flex-row gap-3 items-center hover:bg-black-400 ${editor?.isActive(a.title) ? '!bg-accentEmerald-500 *:invert' : ''}`} onClick={a.action}>
                            <Image src={`/assets/${a.icon}.svg`} height={25} width={25} alt="" />
                        </button>
                    )}
                </div>
                <div className="flex flex-row min-w-fit *:bg-[#F8F7FC] *:h-16 *:min-w-[73px] *:px-6 *:w-fit *:flex *:items-center *:justify-center">
                    {stylingLists.map((a) =>
                        <button className={`flex flex-row gap-3 items-center hover:bg-black-400 ${editor?.isActive(a.title) ? '!bg-accentEmerald-500 *:invert' : ''}`} onClick={a.action}>
                            <Image src={`/assets/${a.icon}.svg`} height={25} width={25} alt="" />
                        </button>
                    )}
                </div>
                <div className="flex flex-row min-w-fit *:bg-[#F8F7FC] *:h-16 *:min-w-[73px] *:px-6 *:w-fit *:flex *:items-center *:justify-center">
                    <button className="relative flex flex-row gap-3 items-center hover:bg-black-400 !min-w-fit"
                        onClick={() => setMenuIs('fontSize')}>
                        <Image src={"/assets/formatting.svg"} height={40} width={40} alt="" /></button>
                    {hostoryLists.map((a) =>
                        <button className={`flex flex-row gap-3 items-center hover:bg-black-400 ${editor?.isActive(a.title) ? '!bg-accentEmerald-500 *:invert' : ''}`} onClick={a.action}>
                            <Image src={`/assets/${a.icon}.svg`} height={25} width={25} alt="" />
                        </button>
                    )}
                    <button className="relative flex flex-row gap-3 items-center hover:bg-black-400 !min-w-fit"
                        onClick={() => setMenuIs('fontFamily')}>
                        {fontFamily || 'Font family'}
                        <Image src={"/assets/dropArrow.svg"} height={6} width={8} alt="" /></button>
                </div>
            </> : null}
        </div>

    )
}

export default EditorToolBar;
/**
 width: Fill (1,242px)px;
height: Fixed (243px)px;
padding: 40px 0px 0px 0px;
gap: 10px;
opacity: 0px;


 */