export interface CreatePostProps {
   userID: string;
   title: string;
   content: string;
}

export interface removePostProps {
   id: string
}

export interface updatePostProps {
   id: string;
   title: string;
   content: string;
}