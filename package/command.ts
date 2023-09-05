import {Extension} from "@tiptap/react";
import renderItem from "@/package/render-item";
import Suggestion from "@tiptap/suggestion";
import Suggestions from "@/package/suggestions";

const SlashCommand: any = Extension
    .create({
            name: "SlashCommand",
            addOptions() {
                return {
                    suggestion: {
                        char: '/',
                        command: ({editor, range, props}: any) => {
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
                items: Suggestions,
                render: renderItem,
            }
        })

export default SlashCommand