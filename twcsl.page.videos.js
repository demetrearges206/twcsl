( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Initializer   : page.videos
  
  Version       : 0.1.0
  
  SS Version    : 7.1
  
  Dependencies  : twcsl
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  if ( self.ss.is70 ) return; // bail if 7.0
  
  const $ = self._.$;
  
  const videos = ( ) => {
  
    let is = $( '.lessons-list-section' )
    
      .length;
      
    is = Boolean ( is );
    
    if ( ! is ) return; // bail if not videos
    
    const p = self.page.videos;
    
    p.is = is;
    
    p.urlSlug = self._.urlSlug;
    
    };
    
  self._.addInitializer ( videos, 'page.videos', '0.1.0' );
  
  return self;
  
  } ) ( twcsl );
