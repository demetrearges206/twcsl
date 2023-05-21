( ( self ) => {

  /*
  
  Tom's Web Consulting Squarespace Library
  
  License       : < https://bit.ly/3F8sn8W >
  
  Initializer   : page.gallery
  
  Version       : 0.1.0
  
  SS Version    : 7.0
  
  Dependencies  : twcsl
  
  By            : Thomas Creedon < http://www.tomsWeb.consulting/ >
  
  */
  
  'use strict';
  
  if ( self.ss.is71 ) return; // bail if 7.1
  
  const $ = self._.$;
  
  const gallery = ( ) => {
  
    const selector = 'body.collection-type-gallery';
    
    const l = $( selector ).length;
    
    if ( ! l ) return; // bail if not gallery
    
    const m = self._.page; // methods
    
    const p = self.page.gallery; // page
    
    p.is = true;
    
    p.urlSlug = self._.urlSlug;
    
    };
    
  self._.addInitializer ( gallery, 'page.gallery', '0.1.0' );
  
  } ) ( twcsl );
