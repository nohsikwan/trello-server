export const BOARD_FRAGMENT = `
fragment BoardParts on Board {
    id
    text
    createdAt
    user{
        id
        email 
        name 
    }
    containers{
        id
        text
        createdAt
         cards{
             id
             text
             createdAt
             
         }
    }
    
}

`;
