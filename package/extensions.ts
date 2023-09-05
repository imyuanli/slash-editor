import './slash.css'
import SlashCommand from "@/package/command";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

export const defaultExtensions = [
    SlashCommand,
    StarterKit,
    Placeholder.configure({
        emptyNodeClass: 'is-empty',
        placeholder: `Press '/' to insert a command`,
    }),
]