import React from "react";
import {Toggle} from "@/components/ui/toggle";
import {BubbleMenu} from "@tiptap/react";
import {markMenu} from "@/package/menus";

const Bubble = ({editor}: any) => {
    return (
        <>
            {editor && <BubbleMenu className={'max-w-xl'} editor={editor} tippyOptions={{duration: 100}}>
              <div className={'flex items-center scale-75 p-1 bg-white border border-solid rounded-md'}>
                  {markMenu.map((item, index) => {
                      return (
                          <Toggle
                              key={index}
                              size="sm"
                              onClick={() => {
                                  item.command({editor})
                              }}
                              pressed={item.isActive(editor)}
                          >
                              {React.createElement(item.icon)}
                          </Toggle>
                      )
                  })}
              </div>
            </BubbleMenu>}
        </>
    );
}

export default Bubble