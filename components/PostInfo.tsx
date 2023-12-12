import React, {FC} from 'react';
import Heading from "./Heading";
import { PostInfoType} from "../type/type";
import styled from "styled-components";


const PostInfo: FC<{post: PostInfoType}> = ({post}) => {
    const {title,body } = post || {}

    if(!post) {
        return <>
            <Heading tag={'h3'} text={'Empty Post info'}/>
        </>
    }
    return (
        <div>
            <div>
                <strong>Title: </strong>
                <p>{title}</p>
            </div>
            <div>
                <strong>Body: </strong>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default PostInfo