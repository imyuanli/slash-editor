import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Toggle} from "@/components/ui/toggle";
import React, {forwardRef, useImperativeHandle, useState} from "react";

interface PopoverBoxProps {
    icon: any,
    isActive?: boolean,
    classname?: string,
    children: any
    ref?: any
}

const PopoverBox: React.FunctionComponent<PopoverBoxProps> = forwardRef(({
                                                                             icon,
                                                                             isActive,
                                                                             classname = '',
                                                                             children
                                                                         }, ref) => {
    const [open, setOpen] = useState(false)
    const handleChangeOpen = () => setOpen(!open)
    useImperativeHandle(ref, () => ({
        handleChangeOpen
    }))
    return (
        <Popover
            open={open}
            modal={open}
            onOpenChange={handleChangeOpen}
        >
            <PopoverTrigger>
                <Toggle
                    size="sm"
                    pressed={isActive}
                >
                    {icon}
                </Toggle>
            </PopoverTrigger>
            <PopoverContent className={classname}>
                {children}
            </PopoverContent>
        </Popover>
    );
})


export default PopoverBox