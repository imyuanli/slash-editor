import {Extension} from "@tiptap/react";
import renderItem from "@/package/render-item";
import Suggestion from "@tiptap/suggestion";
import {markMenus, nodeMenus} from "@/package/menus";

const SlashCommand: any = Extension
    .create({
        name: "SlashCommand",
        addOptions() {
            return {
                suggestion: {
                    char: '/',
                    command: ({editor, range, props}: any) => {
                        console.log("range", range)
                        props.command({editor, range});
                    }
                },
            }
        },
        addProseMirrorPlugins(): any {
            return [
                Suggestion({
                    editor: this.editor,
                    ...this.options.suggestion,
                }),
            ]
        },
    })
    .configure({
        suggestion: {
            items: () => [
                ...nodeMenus,
                ...markMenus,
            ],
            render: renderItem,
        }
    })

export default SlashCommand