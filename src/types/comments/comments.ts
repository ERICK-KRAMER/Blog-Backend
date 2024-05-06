export interface createCommentsProps {
   comment: string,
   postId: string,
   userId: string
}

export interface removeCommentProps {
   id: string
}

export interface updateCommentProps {
   id: string,
   comment: string
}
