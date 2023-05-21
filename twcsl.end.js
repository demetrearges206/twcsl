( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Version       : 0.1.0
  
  SS Versions   : Not Applicable
  
  Dependencies  : twcsl
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  const initialize = ( ) => {
  
    const initialize = self._.initialize;
    
    initialize.forEach ( ( callback ) => {
    
      callback ( );
      
      } );
      
    self._seal ( );
    
    };
    
  switch ( true ) {
  
    case self.ss.is71 :
    
      const $ = self._.$;
      
      $( initialize );
      
      break;
      
    case self.ss.is70 :
    
      Squarespace.onInitialize ( Y, initialize );
      
      break;
      
    }
    
  } ) ( twcsl );
