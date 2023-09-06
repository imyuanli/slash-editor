import React from "react";
import {Bold, Code, Italic, Strikethrough, Underline} from "lucide-react";
import {Toggle} from "@/components/ui/toggle";
import {BubbleMenu} from "@tiptap/react";
import LinkPopover from "@/package/bubble/link-popover";

interface BubbleProps {
    editor: any;
}

const Bubble: React.FunctionComponent<BubbleProps> = ({editor}) => {
    const getEditor = () => editor?.chain().focus()
    const isActive = (type: string) => editor?.isActive(type)

    const menu = [
        {
            name: 'bold',
            icon: <Bold/>,
            onClick: () => getEditor().toggleBold().run(),
        },
        {
            name: 'italic',
            icon: <Italic/>,
            onClick: () => getEditor().toggleItalic().run(),
        },
        {
            name: 'strike',
            icon: <Strikethrough/>,
            onClick: () => getEditor().toggleStrike().run(),
        },
        {
            name: 'underline',
            icon: <Underline/>,
            onClick: () => getEditor().toggleUnderline().run(),
        },
        {
            name: 'code',
            icon: <Code/>,
            onClick: () => getEditor().toggleCode().run(),
        },
    ]

    return (
        <>
            {editor && <BubbleMenu editor={editor} tippyOptions={{duration: 100}}>
              <div className={'flex items-center scale-75 p-1 bg-white border border-solid rounded-md space-x-2'}>
                  {menu.map((item, index) => {
                      return (
                          <Toggle
                              key={index}
                              size="sm"
                              onClick={() => {
                                  item.onClick()
                              }}
                              pressed={isActive(item.name)}
                          >
                              {item.icon}
                          </Toggle>
                      )
                  })}
                <LinkPopover editor={editor} getEditor={getEditor} isActive={isActive}/>
              </div>
            </BubbleMenu>}
        </>
    );
}

export default Bubble