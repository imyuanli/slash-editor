import {
    Code,
    Heading1,
    Heading2,
    Heading3, List, ListOrdered,
    Pilcrow,
    Quote, TerminalSquare,
} from "lucide-react";

interface CommandProps {
    editor: any;
    range: any;
}

const getCommand = (props: CommandProps) => props?.editor.chain().focus().deleteRange(props?.range)

const getHeadingCommand = (level: number) => (props: CommandProps) => getCommand(props).setNode("heading", {level}).run();

const Suggestions = ({query}: { query: string }) => [
    {
        title: "Paragraph",
        description: "Just start typing with plain text.",
        icon: <Pilcrow/>,
        command: ({editor, range}: CommandProps) => {
            editor
                .chain()
                .focus()
                .deleteRange(range)
                .toggleNode("paragraph", "paragraph")
                .run();
        }
    },
    {
        title: "Heading 1",
        description: "Big section heading.",
        icon: <Heading1/>,
        command: getHeadingCommand(1),
    },
    {
        title: "Heading 2",
        description: "Medium section heading.",
        icon: <Heading2/>,
        command: getHeadingCommand(2),
    },
    {
        title: "Heading 3",
        description: "Small section heading.",
        icon: <Heading3/>,
        command: getHeadingCommand(3),
    },
    {
        title: "Blockquote",
        description: "Capture a quote.",
        icon: <Quote/>,
        command: ({editor, range}: CommandProps) => {
            editor
                .chain()
                .focus()
                .deleteRange(range)
                .toggleBlockquote()
                .run();
        },
    },
    {
        title: 'Bullet List',
        description: 'Create a simple bullet list.',
        icon: <List/>,
        command: (props: CommandProps) => getCommand(props).toggleBulletList().run()
    },
    {
        title: 'Ordered List',
        description: 'Create a list with numbering.',
        icon: <ListOrdered/>,
        command: (props: CommandProps) => getCommand(props).toggleOrderedList().run()
    },
    {
        title: "Code",
        description: "Capture a line code",
        icon: <Code/>,
        command: (props: CommandProps) => getCommand(props).toggleCode().run(),
    },
    {
        title: "CodeBlock",
        description: "Capture a code snippet.",
        icon: <TerminalSquare/>,
        command: (props: CommandProps) => getCommand(props).toggleCodeBlock().run(),
    },
]

export default Suggestions