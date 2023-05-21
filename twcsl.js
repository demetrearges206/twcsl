var twcsl = ( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License     : < https://bit.ly/3F8sn8W >
  
  Version     : 0.4.0
  
  SS Versions : 7.1, 7.0
  
  By          : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  // private property
  
  const _ssVersion = Static
    
    .SQUARESPACE_CONTEXT
    
    .templateVersion;
    
  // shared private
  
  const _ = self._ = self._ || {
  
    initialize : [ ],
    
    $ : jQuery,
    
    // property
    
    urlSlug : ( ( ) => {
    
      let urlSlug = '';
      
      try {
      
        urlSlug = Static.SQUARESPACE_CONTEXT.collection.fullUrl;
        
        } catch ( e ) { }
        
      return urlSlug;
      
      } ) ( ),
      
    // method
    
    addInitializer : ( callback, name, version ) => {
    
      self
      
        .version
        
        .initializer
        
        [ name ]
        
        =
        
        version;
        
      self
      
        ._
        
        .initialize
        
        .push ( callback );
        
      },
      
    };
    
  // private methods
  
  const _seal = self._seal = self._seal || function ( ) {
  
    delete self._;
    
    delete self._seal;
    
    delete self._unseal;
    
    };
    
  /*
  
  const _unseal = self._unseal = self._unseal || function ( ) {
  
    self._ = _;
    
    self._seal = _seal;
    
    self._unseal = _unseal;
    
    };
    
  */
  
  // begin public properties
  
    self.ss = {
    
      is70    : _ssVersion == '7',
      
      is71    : _ssVersion == '7.1',
      
      version : _ssVersion,
      
      };
      
    self.version = {
    
      'twcsl' : '0.4.0',
      
      initializer : { },
      
      submodule : { }
      
      };
      
    // end public properties
    
  return self;
  
  } ) ( twcsl || { } );
