import {
    Heading1,
    Heading2,
    Heading3,
    Pilcrow,
    Quote,
} from "lucide-react";

interface CommandProps {
    editor: any;
    range: any;
}

const getHeadingCommand = (level: number) => {
    return ({editor, range}: CommandProps) => {
        editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading", {level})
            .run();
    };
}

const Suggestions = ({query}: { query: string }) => [
    {
        title: "Paragraph",
        description: "Paragraph",
        icon: <Pilcrow/>,
        command: getHeadingCommand(1),
    },
    {
        title: "Heading 1",
        description: "Heading 1",
        icon: <Heading1/>,
        command: getHeadingCommand(1),
    },
    {
        title: "Heading 2",
        description: "Heading 1",
        icon: <Heading2/>,
        command: getHeadingCommand(2),
    },
    {
        title: "Heading 3",
        description: "Heading 1",
        icon: <Heading3/>,
        command: getHeadingCommand(3),
    },
    {
        title: "Blockquote",
        description: "Heading 1",
        icon: <Quote/>,
        command: ({editor, range}: CommandProps) => {
            editor
                .chain()
                .focus()
                .deleteRange(range)
                .toggleNode("paragraph", "paragraph")
                .toggleBlockquote("blockquote")
                .run();
        },
    }
]

export default Suggestions