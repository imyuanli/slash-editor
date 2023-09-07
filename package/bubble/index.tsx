import React from "react";
import {Toggle} from "@/components/ui/toggle";
import {BubbleMenu} from "@tiptap/react";
import {markMenu} from "@/package/menus";
import LinkPopover from "@/package/bubble/link-popover";
import ColorSetting from "@/package/bubble/color-setting";

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
                <LinkPopover editor={editor}/>
                <ColorSetting editor={editor}/>
              </div>
            </BubbleMenu>}
        </>
    );
}

export default Bubble