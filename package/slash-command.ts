import Suggestion from "@tiptap/suggestion";
import {Extension} from "@tiptap/react";
import SuggestionItem from "@/package/suggestion-item";
import renderItem from "@/package/render-item";

const Command: any = Extension.create({
    name: "Command",
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

const suggestion = {
    items: SuggestionItem,
    render: renderItem,
}

const SlashCommand = Command.configure({
    suggestion
})

export default SlashCommand