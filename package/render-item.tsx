import React, {ReactNode, useEffect, useImperativeHandle, useState} from "react";
import {ReactRenderer} from "@tiptap/react";
import tippy from "tippy.js";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface CommandItemProps {
    title: string;
    description: string;
    icon: ReactNode;
}

const CommendItem: any = ({
                              items,
                              command,
                              editor,
                          }: {
    items: CommandItemProps[];
    command: any;
    editor: any;
}) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const selectItem = (index: number) => {
        const item = items[index];
        if (item) {
            command(item)
        }
    }

    useImperativeHandle(editor, () => ({
        onKeyDown: ({event}: any) => {
            if (event.key === 'ArrowUp') {
                setSelectedIndex((selectedIndex + items.length - 1) % items.length)
                return true
            }

            if (event.key === 'ArrowDown') {
                setSelectedIndex((selectedIndex + 1) % items.length)
                return true
            }

            if (event.key === 'Enter') {
                selectItem(selectedIndex)
                return true
            }

            return false
        },
    }))

    useEffect(() => setSelectedIndex(0), [items])

    return (
        <DropdownMenu defaultOpen={true}>
            <DropdownMenuTrigger/>
            <DropdownMenuContent
                loop={true}
                side={'right'}
                sideOffset={10}
                align={'start'}
                alignOffset={-30}
                className={'max-h-96 overflow-auto'}
            >
                {
                    items.length ?
                        items.map((item: any, index) => (
                            <DropdownMenuItem
                                key={index}
                                onClick={() => selectItem(index)}
                                className={'flex items-center space-x-2'}
                            >
                                <div className={'border border-solid rounded-md p-1'}>
                                    {React.createElement(item.icon)}
                                </div>
                                <div className={'flex flex-col space-y-2'}>
                                    <div className={'font-semibold'}>{item.title}</div>
                                    <div className={'text-sm text-stone-900'}>{item.description}</div>
                                </div>
                            </DropdownMenuItem>
                        ))
                        :
                        <DropdownMenuItem className="item">No result</DropdownMenuItem>
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const renderItem = () => {
    let component: any
    let popup: any

    return {
        onStart: (props: any) => {
            component = new ReactRenderer(CommendItem, {
                props,
                editor: props.editor,
            })

            if (!props.clientRect) {
                return
            }

            popup = tippy('body', {
                getReferenceClientRect: props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: 'manual',
                placement: 'bottom-start',
            })
        },

        onUpdate(props: any) {
            component.updateProps(props)

            if (!props.clientRect) {
                return
            }

            popup[0].setProps({
                getReferenceClientRect: props.clientRect,
            })
        },

        onKeyDown(props: any) {
            if (props.event.key === 'Escape') {
                popup[0].hide()

                return true
            }

            return component.ref?.onKeyDown(props)
        },

        onExit() {
            popup?.[0].destroy()
            component?.destroy()
        },
    }
}

export default renderItem