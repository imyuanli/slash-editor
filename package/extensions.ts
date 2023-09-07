import './slash.css'
import SlashCommand from "@/package/command";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import {Typography} from "@tiptap/extension-typography";
import {Color} from "@tiptap/extension-color";
import {TextStyle} from "@tiptap/extension-text-style";

export const defaultExtensions = [
    SlashCommand,
    StarterKit,
    Placeholder.configure({
        emptyNodeClass: 'is-empty',
        placeholder: `Press '/' to insert a command`,
    }),
    Underline,
    Link,
    Typography,
    Color,
    TextStyle
]