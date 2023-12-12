import React, {FC} from 'react';

const Heading: FC<{className?: string, tag?:  React.ElementType, text?: string}> = ({className,tag, text}) => {
    const Tag = tag || 'h1';

    return (
        <Tag  className={className}>
            {text}
        </Tag>
    );
};

export default Heading;