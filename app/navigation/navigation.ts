import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Menu principale',
        //translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
               // id       : 'sample',
               // title    : 'Accueil',
                //translate: 'NAV.SAMPLE.TITLE',
                //type     : 'collapsable',
                //icon     : 'home',
                id       : 'sample1',
                title    : 'Accueil',
                //translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'home',
                url      : '/sample'

               /* children : [
                {
                    id       : 'sample1',
                    title    : 'Sample1',
                    //translate: 'NAV.SAMPLE.TITLE',
                    type     : 'item',
                    icon     : 'home',
                   url      : '/sample'
         
               }
             
              ]*/



                /*,
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }*/
           

            },{
                id       : 'exemple',
                title    : 'Example',
                //translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'home',
                url : '/example'
            },
            {
                id       : 'exemple2',
                title    : 'Example2',
                //translate: 'NAV.SAMPLE.TITLE',
                type     : 'collapsable',
                icon     : 'home',
                

                children : [
                {
                    id       : 'example3',
                    title    : 'Example3',
                    //translate: 'NAV.SAMPLE.TITLE',
                    type     : 'item',
                    icon     : 'home',
                   url      : '/example3'
         
               },
               {
                id       : 'example4',
                title    : 'Example4',
                //translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'home',
               url      : '/example4'
     
           }
             
              ] 
            },
            {
                id       : 'traitemant',
                title    : 'Traitement',
                //translate: 'NAV.SAMPLE.TITLE',
                type     : 'collapsable',
                icon     : '360',
                

                children : [
                                {
                                    id       : 'client',
                                    title    : 'Client',
                                    //translate: 'NAV.SAMPLE.TITLE',
                                    type     : 'item',
                                    icon     : 'data_usage',
                                url      : '/client'
                        
                                 }
                            ]
            }
             
        ]
    }
];
