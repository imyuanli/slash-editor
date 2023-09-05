import {Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Quote} from "lucide-react";

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

const SuggestionItem = ({query}: { query: string }) => [
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
        title: "Heading 4",
        description: "Heading 1",
        icon: <Heading4/>,
        command: getHeadingCommand(4),
    },
    {
        title: "Heading 5",
        description: "Heading 1",
        icon: <Heading5/>,
        command: getHeadingCommand(5),
    },
    {
        title: "Heading 6",
        description: "Heading 1",
        icon: <Heading6/>,
        command: getHeadingCommand(6),
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

export default SuggestionItem