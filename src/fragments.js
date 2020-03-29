export const BOARD_FRAGMENT = `
fragment BoardParts on Board {
    id
    text
    color
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
             
             created
             
         }
    }
    
}

`;

export const CONTAINER_FRAGMENT = `
fragment ContainerParts on Container {
  
        id
        text
        createdAt
         cards{
             id
             
             text
             created
             
         
    }
    
}

`;

export const CARD_FRAGMENT = `
fragment CardParts on Card {
               id
             num
             text
             container{
                id
                text
                createdAt
                 cards{
                     id
                     
                     text
                     created
                       
                 }        
             }   
}

`;
